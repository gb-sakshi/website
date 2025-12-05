import React from 'react';
import { FaCode, FaMobileAlt, FaCloud, FaChartLine, FaDatabase, FaLock } from 'react-icons/fa';

export default function Services() {
  const services = [
    { icon: <FaCode />, title: "Web Development", desc: "Modern, responsive websites built with React and Tailwind." },
    { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "Native and cross-platform mobile applications." },
    { icon: <FaCloud />, title: "Cloud Solutions", desc: "Scalable cloud infrastructure and migration services." },
    { icon: <FaChartLine />, title: "Digital Strategy", desc: "Data-driven strategies to grow your business online." },
    { icon: <FaDatabase />, title: "Data Analytics", desc: "Turn your data into actionable insights." },
    { icon: <FaLock />, title: "Cybersecurity", desc: "Protect your digital assets with advanced security." },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#efae30] mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card bg-slate-900 shadow-xl border border-slate-800 hover:border-[#3d93c6] transition-colors">
              <div className="card-body">
                <div className="text-3xl text-[#3d93c6] mb-2">
                  {service.icon}
                </div>
                <h2 className="card-title text-white">{service.title}</h2>
                <p className="text-slate-400">{service.desc}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost text-[#efae30]">Details &rarr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
