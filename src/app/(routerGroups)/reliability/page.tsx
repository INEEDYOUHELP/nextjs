import React from 'react'
import Hero from '../../../components/hero'
import Image from '../../../../public/5.jpg'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Reliability',
}
export default function Page() {
  return (
    <div>
      <Hero imgUrl={Image} altTxt='image' content='reliablity' />
    </div>
  )
}