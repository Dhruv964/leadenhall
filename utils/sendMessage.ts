import { ChatCompletionMessage } from '@/types'

export const sendMessage = async (messages: ChatCompletionMessage[]) => {
  try {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })
    const data = await response.json()
    return data.response
  } catch (error) {
    console.log(error)
  }
}
