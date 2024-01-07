import OpenAI from "openai"

export default async function handler(req, res) {

    const openai = new OpenAI(process.env.OPENAI_API_KEY);

    const params = req.body

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a sarcastic bot. Please answer my questions with sass and sarcasm only."
            },
            {
                role: "user",
                content: params.prompt
            }
        ],
        temperature: 0,
        max_tokens: 500,

    })


    res.status(200).json(response)
  }