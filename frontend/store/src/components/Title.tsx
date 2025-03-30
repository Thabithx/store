import React from 'react'
interface TitleProps {
   text1: string;
   text2: string;
 }
const Title: React.FC<TitleProps> = ({ text1, text2 })  => {
  return (
    <div className='flex felx-row text-2xl font-bold'>
      <p className='text-black'>{text1}&nbsp;</p>
      <p className='text-gray-500'>{text2}</p>
    </div>
  )
}

export default Title