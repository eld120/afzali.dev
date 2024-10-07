'use client'


import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
export default function Home() {
  return (
    <>
      <header>
        {/* navbar */}
        <NavBar />
        <hr className='mb-8' />
        {/* hero section */}
        <Hero />


      </header>
      <Skills />
      <section>
        {/* My Work */}

      </section>

    </>
  )
}
