// import React from 'react'
// import Image from 'next/image'

// const Resume = () => {
//   return (
//     <>
//      <div className='min-h-[90vh] font-roboto bg-gradient-to-b from-white to-pink-100 border'>

//       <div className='mx-6 border border-red-500'>

//         <div className="resume_card w-[60%] mx-auto border border-red-700 flex flex-col">
//           <div className='flex gap-x-2 items-center'>
//             <Image src={''} alt='' width={50} height={50} className='rounded-full bg-black'/>
//             <div className="name text-xl font-bold">
//               Shivi Tiwari
//             </div>
//             </div>
//             <hr className='m-2'/>
//             <div>
//               <p>Experienced frontend developer passionate about learning and building open-source software that is beneficial to developers and the world at large.</p>
//             </div>
//             <hr className='m-2'/>
//             <div>
//               <h1>Contact Information</h1>
//               <div className='mt'></div>
//             </div>
//         </div>

//       </div>
//       </div> 
//     </>
//   )
// }

// export default Resume



'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Globe, MapPin } from "lucide-react"
import Image from "next/image"

export default function Resume() {
  return (
      <>
      <div className="h-full bg-gradient-to-b from-white to-[#eed6da] ">
      <div className="m-6 font-roboto p-8">
    <Card className="w-full max-w-3xl bg-slate-800 text-white mx-auto rounded-lg">
      <CardHeader className="flex flex-row items-center gap-4 ">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Victor Eke" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-3xl  font-bold text-[#f2bdc5]">Shivi Tiwari</CardTitle>
          {/* <p className="text-sm text-gray-500">Created 1 year ago • Updated 3 months ago</p> */}
        </div>
      </CardHeader>
      <hr className='mx-4'/>
      <CardContent className="grid gap-6 mt-2">
        <div>
          <h2 className="font-semibold mb-2 text-[#f2bdc5]">About</h2>
          <p className="text-sm">
            Experienced frontend developer passionate about learning and building open-source software that is beneficial to developers and the world at large.
          </p>
        </div>
        <hr className='mx-4'/>
        <div>
          <h2 className="font-semibold mb-2 text-[#f2bdc5]">Contact Information</h2>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:tiwarishivi028+web@gmail.com" className="text-[#5ccef7] hover:underline">tiwarishivi028@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a href="https://www.linkedin.com/in/shivi-tiwari-7a669b289/" target="_blank" className="text-[#5ccef7]  hover:underline">Shivi Tiwari</a>
            </div>
            <div className="flex items-center gap-2">
            {/* <Image src={'/Images/github.svg'} alt='github' width={23} height={23}/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <a href="https://github.com/shivi028" target="_blank" className="text-[#5ccef7]  hover:underline">shivi028</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Remote, India</span>
            </div>
          </div>
        </div>
        <hr className='mx-4'/>
        <div>
          <h2 className="font-semibold mb-2 text-[#f2bdc5]">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "HTML5", "CSS3", "React", "Node.js", "Next.js", "Tailwind CSS", "Express.js", "Python", "Java", "WebSocket", "Styled-Components"].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-pink-100 text-slate-800">{skill}</Badge>
            ))}
          </div>
        </div>
        <hr className='mx-4'/>
        <div>
          <h2 className="font-semibold mb-2 text-[#f2bdc5]">Other Skills</h2>
          <p className="text-sm">
            Communication, team-leading, documentation, collaboration, responsive web design, accessibility, cross-browser compatibility
          </p>
        </div>
        <hr className='mx-4'/>
        {/* <div>
          <h2 className="font-semibold mb-2 text-headcolor">Experience</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="font-medium">Frontend Developer — Weaverify</h3>
              <p className="text-sm text-gray-500">Aug 2022 — Jul 2023, Lagos, Nigeria</p>
              <p className="text-sm mt-1">
                At Weaverify, I was tasked to manage and develop a responsive and performant frontend application that improves the way customers order products in Nigeria.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Contract Frontend developer — Agora Inc</h3>
              <p className="text-sm text-gray-500">Oct 2022 — Jan 2023, Texas, USA</p>
              <p className="text-sm mt-1">
                At Agora Inc, I worked closely with the product manager and backend developer to refactor and build new features of Agora's Angular-based service, which is used across thousands of clients across the USA monitor their farm activity.
              </p>
            </div>
          </div>
        </div> */}
        <div>
          <h2 className="font-semibold mb-2 text-[#f2bdc5]">Education</h2>
          <div className="grid gap-2">
            <div>
              <h3 className="font-medium"> Shri Cloth Market Vaishnav Bal Mandir
              Girls Higher Secondary School, Indore</h3>
              <p className="text-[0.800rem] text-gray-400"> 2019 - 2020 [10TH GRADE]</p>
            </div>
            <div>
              <h3 className="font-medium"> The New Era Public School, Indore</h3>
              <p className="text-[0.800rem] text-gray-400"> 2021 - 2022 [12TH GRADE]</p>
            </div>
            <div>
              <h3 className="font-medium">  International Institute of Professional
              Studies, Indore</h3>
              <p className="text-[0.800rem] text-gray-400"> 2022 - 2027 [GRADUATION]</p>
            </div>
            <div>
              <h3 className="font-medium">Complete PYTHON Programming for Beginners Course — Udemy</h3>
              <p className="text-sm text-gray-500">Certificate Issued date — Dec 2023</p>
            </div>
            <div>
              <h3 className="font-medium">Leraned Advanced Python Programming — Udemy</h3>
              <p className="text-sm text-gray-500">Certificate Issued date — Aug 2024</p>
            </div>
          </div>
        </div>
        <hr className='mx-4'/>
        <div>
          <h2 className="font-semibold mb-2 text-[#f2bdc5]">Projects</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><a href="#" className="text-[#5ccef7]  hover:underline">Music_Accertinity: Music Course Web.</a></li>
            <li><a href="#" className="text-[#5ccef7]  hover:underline">Cloudinary_SASS: A SASS product to change your frame of photo.</a></li>
            <li><a href="#" className="text-[#5ccef7]  hover:underline">Authentication: Basic Authentication Web.</a></li>
            <li><a href="#" className="text-[#5ccef7]  hover:underline">Dolphine: A E-Commerce Web.</a></li>
          </ul>
        </div>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
  )
}
