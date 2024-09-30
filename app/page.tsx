import Image from 'next/image'

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
        <div>
          <h2>Hi I'm Seyamack</h2>

          <h4>How can I help?</h4>
          {/* email */}
          {/* linkedin */}
          {   /* github */}
          {/* <Link></Link> */}
        </div>
        <div>
          {/* portfolio image */}
          {/* <Image ></Image> */}
        </div>

      </header>
      <section>
        {/* skills */}
        <table>
          <thead>Development</thead>
          <tr><td>React/NextJS</td></tr>
        </table>
        <table>
          <thead>Project Management</thead>

        </table>

      </section>
      <section>
        {/* My Work */}

      </section>

    </>
  )
}
