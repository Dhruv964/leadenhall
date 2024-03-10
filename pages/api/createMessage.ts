import { NextApiRequest, NextApiResponse } from 'next'
import { chain, returnAnswer } from '@/utils/model'

export default async function createMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { messages } = req.body

  const message = messages[messages.length - 1].content

  try {
    const response = await returnAnswer(chain, message)

    res.status(200).json({ response })
  } catch (error) {
    res.status(500).json({ error })
  }
}
