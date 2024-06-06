import React from 'react'
import Image from 'next/image'
import productImg from '@/public/images/9140d669006593.5b719df26abdb.jpg'
import { BNazaninFont } from '../utils/fronts'

const ProductCard = () => {
  return (
    <div className={`text-center ${BNazaninFont.className} font-bold text-lg`}>
        <Image src={productImg} alt='product-img'/>
        <p className=' mt-2'>قهوه بلند</p>
        <p className=' text-primary-600' >20.000 تومان</p>
    </div>
  )
} 

export default ProductCard