import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#3d93c6] mb-12">Get In Touch</h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Form */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text text-slate-400">Name</span></label>
                <input type="text" placeholder="Your Name" className="input input-bordered bg-slate-800 border-slate-700 text-white focus:border-[#3d93c6]" />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text text-slate-400">Email</span></label>
                <input type="email" placeholder="email@example.com" className="input input-bordered bg-slate-800 border-slate-700 text-white focus:border-[#3d93c6]" />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text text-slate-400">Message</span></label>
                <textarea className="textarea textarea-bordered bg-slate-800 border-slate-700 text-white h-32 focus:border-[#3d93c6]" placeholder="How can we help?"></textarea>
              </div>
              <button className="btn bg-[#415a7b] hover:bg-[#3d93c6] text-white w-full mt-4 border-none">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#51342e] p-3 rounded-lg text-white">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Our Office</h3>
                <p className="text-slate-400">123 Innovation Blvd, Tech City, TC 90210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#51342e] p-3 rounded-lg text-white">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#51342e] p-3 rounded-lg text-white">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-slate-400">contact@brandui.com</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 mt-6">
              <span className="text-slate-500">Map Integration Placeholder</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
