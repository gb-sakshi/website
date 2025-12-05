import React from 'react';
import { FaRocket, FaShieldAlt, FaCogs } from 'react-icons/fa';

export default function Home({ setPage }) {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Build <span className="text-[#3d93c6]">Faster</span>, Scale <span className="text-[#efae30]">Better</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            We provide modern solutions for complex problems. Elevate your digital presence with our cutting-edge technology stack.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setPage('Contact')}
              className="btn bg-[#3d93c6] hover:bg-[#415a7b] text-white border-none px-8"
            >
              Get Started
            </button>
            <button 
              onClick={() => setPage('About')}
              className="btn btn-outline text-[#efae30] hover:bg-[#efae30] hover:text-slate-900 border-[#efae30] px-8"
            >
              Learn More
            </button>
          </div>
        </div>
        {/* Background Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#415a7b] opacity-20 blur-[100px] rounded-full -z-0"></div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#efae30] mb-4">Why Choose Us?</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Our team is dedicated to delivering high-quality, scalable, and secure applications tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaRocket className="text-4xl text-[#efae30]" />}
            title="High Performance"
            desc="Optimized for speed and efficiency to ensure the best user experience."
          />
          <FeatureCard 
            icon={<FaShieldAlt className="text-4xl text-[#3d93c6]" />}
            title="Secure by Design"
            desc="Top-tier security protocols to keep your data safe and compliant."
          />
          <FeatureCard 
            icon={<FaCogs className="text-4xl text-[#51342e]" />}
            title="Custom Solutions"
            desc="Tailored architecture that fits your specific business requirements."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-[#415a7b]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
}
