import React from 'react'
import Image from 'next/image';
import { BackgroundLines } from "@/components/ui/background-lines";
const AboutPage = () => {
  return (
    <>
      <div className='min-h-[60vh] font-roboto m-6  '>
        <div className="outer flex ">
          <div className='w-[35%] flex flex-col gap-y-3 border'>
            <div className='text-[4rem] font-semibold font-roboto tracking-tight '>
            I’m <span className='text-headcolor'>Shivi Tiwari.</span> Nice to meet you.
            </div>
            <div className='mt-4'>
              <p className='font-medium text-xl'>Email : </p>
              <a href="mailto:tiwarishivi028+web@gmail.com" >
                <p className='text-headcolor text-[1.1rem]'>tiwarishivi028@gmail.com</p>
              </a>
              
            </div>
            <div className='flex flex-col mt-4'>
              <p className='font-medium text-xl'>Say Hello!!</p>
              <div className='social-media flex gap-x-3 mt-2'>
                <div>
                  <a href="">
                    <Image src={'/Images/twitter.svg'} alt='github' width={40} height={40} className='text-headcolor'/>
                  </a>
                </div>
                <div>
                <a href="">
                    <Image src={'/Images/github.svg'} alt='github' width={40} height={40} className='text-headcolor'/>
                  </a>
                </div>
                <div>
                <a href="">
                    <Image src={'/Images/instagram.svg'} alt='github' width={40} height={40} className='text-headcolor'/>
                  </a>
                </div>
                <div>
                <a href="">
                    <Image src={'/Images/linkedin-original.svg'} alt='github' width={40} height={40} className='text-headcolor'/>
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className='w-[70%] border p-2 text-gray-800 font-roboto text-[1.1rem]'>
            <p>I am a self-driven, career-oriented software developer specializing in front-end development and open-source, currently pursuing a bachelors degree in computer science. My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Next.js, TypeScript and Python.</p> <br/>
            <p>I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.</p><br/>
            <p>Beyond learning, I enjoy writing blogs and articles sometimes.</p>

            <div className='border-l border-r rounded shadow-lg shadow-headcolor mt-8 w-[45%] h-[13%] text-headcolor font-medium bg-gradient from-white to-pink-50'>
            <BackgroundLines className='relative'>
            <p className=' z-20 flex justify-center items-center bg-gradient-to-b from-white to-pink-50 p-2'>
            If you ever spot me in the wild, don't hesitate to say hello! Let's grab a drink and geek-out over the latest advancements in front-end development or discuss our favorite programming language. ⚡
            </p>
            </BackgroundLines>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
