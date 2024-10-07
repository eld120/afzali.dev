import React from 'react'
import Image from 'next/image'
import SocialBar from './SocialBar'

function Hero() {
    return (
        <div className='m-3 flex'>
            <div className='max-w-96'>
                <h1 className='text-4xl font-bold mb-4'>Hi I&apos;m Seyamack</h1>
                <p className='text-lg mb-4'>I&apos;m a software engineer based in the Minneapolis-St Paul metro</p>
                <p className='text-lg mb-4'>I have over a decade of experience working with specialty retailers and manufacturers with a focus on the outdoor industry</p>
            </div>
            <div className="flex gap-5">
                <div className='m-4'>
                    {/* portfolio image */}
                    <Image
                        src={"/static/IMG_1465437914340.jpg"}
                        alt="Seyamack's headshot/avatar"
                        width={204}
                        height={225}
                        className='mb-4'
                    />
                    <SocialBar />

                </div>

            </div>

        </div>
    )
}

export default Hero