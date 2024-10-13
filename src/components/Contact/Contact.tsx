"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FancyContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const res = await axios.post("/api/mail/send-email", formData);
      const res = await axios.post("/api/mail", formData);


      if (res.status === 200) {
        toast.success("Email sent successfully!", {
        });
      } else {
        toast.error("Failed to send email.", {
        });
      }
    } catch (error) {
      toast.error("Error occurred while sending the email.", {
      });
    }

    // Optionally reset form data
    // setFormData({
    //   name: "",
    //   email: "",
    //   message: "",
    // });
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-white to-[#f9ccd4] flex items-center justify-center p-4 font-roboto">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute right-1/3 top-1/3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 bottom-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f9a1af] to-headcolor"
            >
              Let's build something amazing together!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600"
            >
              Any Questions? Connect through social media.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center space-x-4"
            >
              <a href="https://github.com/shivi028" target="_blank">
                <Image
                  src={"/Images/github.svg"}
                  alt="github"
                  width={40}
                  height={40}
                  className="text-headcolor"
                />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a href="">
                <Image
                  src={"/Images/instagram.svg"}
                  alt="github"
                  width={30}
                  height={30}
                  className="text-headcolor"
                />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Email:
              </h2>
              <a
                href="mailto:tiwarishivi028+web@gmail.com"
                className="text-headcolor text-[1.1rem] flex items-center hover:underline"
              >
                <Mail className="mr-2" size={18} />
                tiwarishivi028@gmail.com
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Contact form:
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-gray-700"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-gray-700"
                >
                  Email address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] w-full focus:outline-none focus:ring-2"
                />
              </div>
              <Button
                type="submit"
                className="w-full border border-white bg-gradient-to-r from-[#f4a5b3] to-headcolor hover:text-headcolor hover:border hover:border-headcolor hover:bg-gradient-to-r hover:from-white hover:to-white  transition-all duration-100 ease-in hover:ease-out text-white"
              >
                <Send className="mr-2" size={18} />
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    
      <ToastContainer />
    </div>
  );
}
