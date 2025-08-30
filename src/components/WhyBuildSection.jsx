import React from 'react';

export default function WhyBuildSection() {
  return (
    <section id="why" className=" text-white py-20 px-4 text-center">
      <h2 className="text-4xl font-light mt-5 mb-10">
        Why <span className="font-semibold  tracking-widest">BUILD</span>
        <span className="font-light tracking-wide">ora</span> ?
        </h2>

      <div className="max-w-5xl mx-auto text-4xl md:text-base leading-relaxed text-gray-100 space-y-2">
        <p className='text-2xl'>Like any great build, it starts with a strong foundation.</p>
        <p className='text-2xl'>We design with intention, code with structure, and launch with confidence.</p>
        <p className='text-2xl'>From first sketch to final deploy — we’re your build team.</p>
      </div>
    </section>
  );
}
