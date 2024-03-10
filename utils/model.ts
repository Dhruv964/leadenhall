import { CSVLoader } from 'langchain/document_loaders/fs/csv'
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { BufferMemory } from 'langchain/memory'

require('dotenv').config({ path: __dirname + '/.env' })

const createContext = async (filepath: string) => {
  const loader = new CSVLoader(filepath)
  const docs = await loader.load()
  const vectorStore = await MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings())
  return vectorStore
}

const setUpChain = async (store: Promise<MemoryVectorStore>) => {
  let streamedResponse = ''
  const streamingModel = new ChatOpenAI({
    streaming: true,
    callbacks: [
      {
        handleLLMNewToken(token) {
          streamedResponse += token
        },
      },
    ],
  })

  const nonStreamingModel = new ChatOpenAI({})
  const retriever = (await store).asRetriever()
  const chain = ConversationalRetrievalQAChain.fromLLM(
    streamingModel,
    retriever,
    {
      returnSourceDocuments: true,
      memory: new BufferMemory({
        memoryKey: 'chat_history',
        inputKey: 'question',
        outputKey: 'text',
        returnMessages: true,
      }),
      questionGeneratorChainOptions: {
        llm: nonStreamingModel,
      },
    }
  )
  return chain
}

const returnAnswer = async (
  chain: Promise<ConversationalRetrievalQAChain>,
  question: string
) => {
  const result = await (await chain).call({ question })
  return result
}

const store = createContext('./data/2024 Dashboard Data.csv')
const chain = setUpChain(store)

export { chain, returnAnswer }
