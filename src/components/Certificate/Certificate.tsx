"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  image: string
}

const certificates: Certificate[] = [
  { id: 1, title: "Web Development", issuer: "Codecademy", date: "2023", image: "/Images/postman certificate.png" },
  { id: 2, title: "UX Design", issuer: "Google", date: "2022", image: "/Images/postman certificate.png" },
  { id: 3, title: "Data Science", issuer: "DataCamp", date: "2023", image: "/Images/postman certificate.png" },
  { id: 4, title: "Machine Learning", issuer: "Coursera", date: "2022", image: "/Images/postman certificate.png" },
  { id: 5, title: "Cloud Computing", issuer: "AWS", date: "2023", image: "/Images/postman certificate.png" },
  { id: 6, title: "Cybersecurity", issuer: "CompTIA", date: "2022", image: "/Images/postman certificate.png" },
]

export default function CertificateSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-b from-white to-[#eed6da] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-headcolor sm:text-4xl text-center mb-2">
          Certifications
        </h2>
        <p className="text-xl text-gray-500 text-center mb-12">
          Showcasing commitment to continuous learning 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredId(cert.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Image 
                src={cert.image} 
                alt={`${cert.title} certificate`} 
                width={300}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-headcolor mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-1">Issued by: {cert.issuer}</p>
                <p className="text-gray-500 text-sm">Date: {cert.date}</p>
              </div>
              {hoveredId === cert.id && (
                <motion.div 
                  className="absolute shadow-lg inset-0  flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium">
                    View Details
                  </button> */}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}