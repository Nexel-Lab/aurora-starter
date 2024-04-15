import type { RefObject } from 'react'

export const SomethingModal = ({ $ref }: { $ref: RefObject<any> }) => {
  return (
    <div className='w-[350px] shadow-md' ref={$ref}>
      <p>Something modal for example</p>
    </div>
  )
}
