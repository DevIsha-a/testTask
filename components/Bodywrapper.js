import React from 'react'
import Image from 'next/image'
const Bodywrapper = () => {
  return (
    <div className='relative w-screen   h-screen top-0'>

    <div  >
    <Image src='/heart1.png' width={14} height={11} alt='heart' className='absolute top-100'></Image>
      <Image src='/heart1.png' width={14} height={11} alt='heart' className=''></Image>
      <Image src='/heart1.png' width={14} height={11} alt='heart' className=''></Image>

    </div>
    {/* <div>
      <Image src='/vright.png' width={709} height={741} className='absolute right-0  '></Image>
      <Image src='/vleft.png' width={391} height={410} className='absolute left-0'></Image>
    </div> */}
    </div>
  )
}

export default Bodywrapper