import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'
import { useMessages } from '@/utils/useMessages'

const MessageForm = () => {
  const [content, setContent] = useState('')
  const { addMessage } = useMessages()

  const handleSubmit = async (e: any) => {
    e?.preventDefault()
    addMessage(content)
    setContent('')
  }

  return (
    <form
      className='relative mx-auto max-w-3xl rounded-t-xl'
      onSubmit={handleSubmit}
    >
      <div className=' supports-backdrop-blur:bg-white/95 h-[130px] rounded-t-xl border-t border-l border-r border-gray-200 border-gray-500/10 bg-white p-5 backdrop-blur dark:border-gray-50/[0.06]'>
        <label htmlFor='content' className='sr-only'>
          Your message
        </label>
        <TextArea
          name='content'
          placeholder='Enter your message here...'
          rows={3}
          value={content}
          autoFocus
          className='border-0 !p-3 text-gray-900 shadow-none ring-1 ring-gray-300/40 backdrop-blur focus:outline-none focus:ring-gray-300/80 dark:bg-gray-800/80 dark:text-white dark:placeholder-gray-400 dark:ring-0'
          onChange={(e: any) => setContent(e.target.value)}
        />
        <div className='absolute right-8 bottom-10'>
          <div className='flex space-x-3'>
            <Button className='text-black' type='submit' size='small'>
              Send
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default MessageForm
