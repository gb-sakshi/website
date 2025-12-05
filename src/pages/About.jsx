import React from 'react';

export default function About() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 py-16">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#3d93c6] mb-4">About Our Company</h1>
          <div className="h-1 w-20 bg-[#efae30] mx-auto rounded"></div>
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              We are a forward-thinking technology firm specializing in digital transformation. 
              Founded on the principles of innovation and integrity, we help businesses navigate 
              the complexities of the modern digital landscape.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our diverse team of experts brings together decades of experience in software engineering, 
              design, and strategy.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border-l-4 border-[#51342e]">
            <h3 className="text-xl font-bold text-[#efae30] mb-2">Our Mission</h3>
            <p className="text-slate-300 italic">
              "To empower organizations through technology, creating sustainable value and driving growth in an ever-evolving world."
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-slate-900 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-center text-[#415a7b] mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Innovation', 'Integrity', 'Excellence', 'Collaboration'].map((val, idx) => (
              <div key={idx} className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <h3 className="font-bold text-[#3d93c6]">{val}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
