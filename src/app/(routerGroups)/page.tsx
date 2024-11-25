import React from 'react'
import Image from 'next/image'
import homePicture from '../../../public/3.jpg'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}
//大写开头是组件
//rfc 快速生成函数组件
export default function Page() {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image src={homePicture} fill style={{objectFit: 'cover'}} alt='homePicture'/>
        <div className='absolute inset-0  bg-gradient-to-r from-orange-200'></div>
      </div>
      <div className='flex justify-center pt-48'>
        <h1 className='text-white text-6xl font-bold'>内容</h1>
      </div>
    </div>
  )
}
