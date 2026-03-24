"use client";
export default function OurStory() {
  return (
    <main className="min-h-screen bg-white">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-purple-100/50 blur-[120px] rounded-full" />
      <section className="pt-48 pb-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold tracking-tighter mb-12">Our Story.</h1>
          <div className="space-y-12 text-2xl text-gray-700 leading-relaxed">
            <p>
              NSH & Co. was founded with a singular vision: to bring the discipline of a <span className="font-bold text-black">Big 4 professional environment</span> to a boutique firm that actually listens.
            </p>
            <p>
              With over <span className="font-bold text-blue-600">13 years of leadership</span> across the Delhi-NCR region, our team of <span className="font-bold text-black">15+ specialists</span> has mastered the art of "thinking out of the box" while protecting the brand integrity of our clients.
            </p>
            <div className="p-12 rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl">
              <h3 className="text-4xl font-bold mb-6">"That's a hell of a product."</h3>
              <p className="text-white/80">We don't just deliver audits; we deliver certainty. We plan, prepare, and pursue every task to accomplish it before deadlines, ensuring that your trust in us is never misplaced.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}