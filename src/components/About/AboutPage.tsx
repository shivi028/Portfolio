'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import { useState } from "react"
const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <div className='min-h-[40vh] font-roboto m-6'>
        <div className="outer min-h-[40%] flex">
          <div className='w-[35%] flex flex-col gap-y-3'>
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
                <a href="https://github.com/shivi028" target='_blank'>
                    <Image src={'/Images/github.svg'} alt='github' width={40} height={40} className='text-headcolor'/>
                  </a>
                </div>
                <div>
                <a href="">
                    <Image src={'/Images/instagram.svg'} alt='github' width={40} height={40} className='text-headcolor'/>
                  </a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/shivi-tiwari-7a669b289/" target='_blank'>
                    <Image src={'/Images/linkedin-original.svg'} alt='github' width={40} height={40} className='text-headcolor'/>
                  </a>
                </div>              
              </div>
              <div className='mt-5 -ml-1 w-[35%] text-center p-2 rounded-lg bg-gradient-to-b from-white to-pink-100 text-headcolor font-extrabold text-sm hover:bg-gradient-to-b hover:from-white hover:to-pink-200 transition-all duration-75'>
              <Link href={'/resume'} className='bg-gradient from-white to-pink-50'>
                View Resume
              </Link>
            </div>

            </div>
          </div>
          <span className='border-l mr-2 -ml-3'/>
          <div className='w-[70%]  p-2 text-gray-800 font-roboto text-[1.1rem]'>
            <p>I am a self-driven, career-oriented software developer specializing in front-end development and open-source, currently pursuing a bachelors degree in computer science. My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Next.js, TypeScript and Python.</p> <br/>
            <p>I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.</p><br/>
            <p>Beyond learning, I enjoy writing blogs and articles sometimes.</p>
            <div>
              <p className='mt-10'><span className='font-bold text-headcolor'>Attention to detail:</span> I take pleasure in creating designs and UIs with careful precision, emphasizing quality over quantity.</p>
            </div>

         
            <motion.div
      className="border-l border-r rounded-lg shadow-md mt-8 w-[45%] text-headcolor font-medium overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="p-4 bg-gradient-to-br from-pink-100 to-white"
        animate={{
          background: isHovered
            ? [
                "linear-gradient(to bottom right, #fff5f7, #ffffff)",
                "linear-gradient(to bottom right, #ffe4e6, #fff5f7)",
                "linear-gradient(to bottom right, #fff5f7, #ffffff)",
              ]
            : "linear-gradient(to bottom right, #fff5f7, #ffffff)",
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      >
        <motion.p
          className="text-gray-800 font-sans text-[1rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          If you ever spot me in the wild, don&apos;t hesitate to say hello! Let&apos;s grab a drink and geek-out over the latest advancements in front-end development or discuss our favorite programming language. ⚡
        </motion.p>
      </motion.div>
      <motion.div
        className="h-1 bg-pink-300"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>

            {/* <div className='mt-10  w-[35%] text-center p-2 rounded-lg bg-gradient-to-b from-white to-pink-100 text-headcolor font-extrabold text-sm hover:bg-gradient-to-b hover:from-white hover:to-pink-200 transition-all duration-75'>
              <Link href={'/resume'} className='bg-gradient from-white to-pink-50'>
                View Resume
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
