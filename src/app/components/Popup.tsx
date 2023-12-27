import { X } from '@phosphor-icons/react'
import React from 'react'

const Popup = (props: {
    children: React.ReactElement,
    toggle?: boolean,
    onClose?: Function,
}) => {
    const { children, toggle=false, onClose=() => {} } = props
  return (
    toggle && 
    <div 
        className='__popupWrapper fixed inset-0 z-50 bg-black/40 p-10 flex items-center justify-center'
        onClick={ e => {
            if(e.target.classList.contains('__popupWrapper')){
                onClose(false)
            }
        } }
    >
        <div className='bg-white p-10 rounded shadow relative overflow-auto max-h-[90vh]'>
            <button
                className='absolute top-4 right-4 hover:text-red-500'
                onClick={ () => onClose(false) }
            >
                <X size={25} weight='bold' />
            </button>
            { children }
        </div>
    </div>
  )
}

export default Popup