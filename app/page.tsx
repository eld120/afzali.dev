'use client'

import Image from 'next/image'
import SocialBar from './components/SocialBar'

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <header>
        {/* navbar */}
        <nav className=' h-12'>
          <ul className='flex justify-end'>
            <li className='m-3'>About</li>
            <li className='m-3'>My Work</li>
            <li className='m-3'>Contact</li>
            <li className='m-3'></li>
          </ul>
        </nav>
        <hr />
        {/* hero section */}
        <div className='m-3'>
          <h1 className='text-6xl font-bold'>Hi I'm Seyamack</h1>
          <p className='text-xl'>I'm a freelance software engineer based in the Minneapolis-St Paul metro</p>
          <p>13 years of experience working with specialty retailers and small-medium sized manufacturers with a focus on the outdoor industry</p>
          <div className="flex gap-5">
            <div >
              {/* portfolio image */}
              <Image
                src={"/static/IMG_1465437914340.jpg"}
                alt="Seyamack's headshot/avatar"
                width={204}
                height={225}

              />
              <SocialBar />
            </div>

          </div>

        </div>


      </header>
      <section>
        {/* skills */}
        <div>
          <h4>Development</h4>
          <ul>
            <li>Django/Python</li>
            <li>React/Next</li>
            <li>Vue/Nuxt</li>
            <li>Shopify</li>
            <li>Docker/DevOps</li>
          </ul>
        </div>
        <div>
          <h4>Project Management</h4>

        </div>

      </section>
      <section>
        {/* My Work */}

      </section>

    </>
  )
}
