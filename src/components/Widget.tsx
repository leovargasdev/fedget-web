import { Popover } from '@headlessui/react'
import { ChatTeardropDots  } from 'phosphor-react'

const styles = {
  button: 'bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'
}

export function Widget() {
  return (
    <Popover className='absolute top-4 right-4'>
      <Popover.Panel>olar mundo</Popover.Panel>

      <Popover.Button className={styles.button}>
        <ChatTeardropDots className='w-6 h-6' />
        
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}