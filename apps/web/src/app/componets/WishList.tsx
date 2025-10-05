"use client";
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { useState } from 'react'

export default function  WaitlistForm(){
    const [form, setForm] = useState({name: "", role: "", email: ""});
    
    
     const handleInputChange = (e:any) => {
        setForm({...form, [e.target.name]: e.target.value});
    };


    const handleSubmit = async (e:any) => {
        e.preventDefault();

        console.log(form)


    }

    return(
        <div className='flex flex-col md:flex-row  justify-between items-center gap-12 '>
            {/* rigt */}

            <div className='flex justify-center '>
        <div className=''>
            <img width={600}  src="/banner.png" alt="" />
        </div>
       </div>


        <div className='flex flex-col text-black p-6  justify-center min-h-screen items-center mx-auto'>

            <h2 className="text-2xl font-bold  mb-4">Join the Waitlist 🚀</h2>
         
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative ">
                  <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

         

               <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <div className="relative ">
                  <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.role}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Choose you're role"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>


            <img src="" alt="" />



        </div>

        {/* left */}
     

        </div>
    
    );
}