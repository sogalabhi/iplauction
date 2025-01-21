import React from 'react'
import LeftComponent from './Page1/LeftComponent'
import CenterComponent from './Page1/CenterComponent'

export default function HomePage() {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <CenterComponent />
        </div>
    )
}
