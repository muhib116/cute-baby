'use client'
import Img from '@/app/components/Img'
import { pricePrint } from '@/helper'
import React, { useState } from 'react'
import QuantityInput from './QuantityInput'

const CartItem = (props: {
    data: {
        path: string;
        blur_path: string;
        title: string;
        price: number;
        quantity: number;
        stock: number;
    }
}) => {
    const { data } = props
    const [quantity, setQuantity] = useState<number>(data.quantity)
    const handleQuantity = (direction: number) => {
        setQuantity((state) => {
            if(state + direction > data.stock) {
                return data.stock
            }
            if(state + direction < 0) {
                return 0
            }
            return state + direction
        })
    }
  return (
    <div
        className='shadow-[0px_1px_6px_#0002] p-4 rounded-lg flex items-center justify-between gap-4'
    >
        <div className='flex gap-4 items-center'>
            <Img
                src={data.path}
                blur_src={data.blur_path}
                width={60}
                height={60}
                alt={data.title}
                className='w-[60px] h-[60px] aspect-square object-center'
            />
            <div>
                <p 
                    className='font-bold truncate w-[150px]'
                    title={ data.title }
                >
                    { data.title }
                </p>
                <p
                    className='truncate'
                >
                    { pricePrint(data.price * quantity) }
                </p>
            </div>
        </div>
        <QuantityInput
            quantity={ quantity}
            setQuantity={ handleQuantity }
        />
    </div>
  )
}

export default CartItem