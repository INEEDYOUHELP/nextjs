import React from 'react'
import Hero from '../../../components/hero'
import Image from '../../../../public/6.jpg'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Scale',
}
export default function Page() {
  return (
    <div>
      <Hero imgUrl={Image} altTxt='image' content='scale' />
    </div>
  )
}