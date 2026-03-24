"use client";
export default function Expertise() {
  const services = [
    { title: "Statutory & Internal Audit", desc: "Rigorous assessment of financial statements and internal controls ensuring absolute compliance with Indian Accounting Standards." },
    { title: "Direct & Indirect Taxation", desc: "Specialised GST Advisory, Litigation support, Income Tax planning, and seamless return filing for corporations and individuals." },
    { title: "ROC & Corporate Law", desc: "End-to-end management of MCA filings, secretarial audits, and company law compliance for startups and established firms." },
    { title: "Management Consultation", desc: "Strategic advisory on business restructuring, IFRS/Ind AS implementation, and forensic financial investigations." }
  ];

  return (
    <main className="min-h-screen bg-[#1d1d1f] text-white">
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12">Expertise.</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
             {services.map((s, i) => (
               <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <h3 className="text-3xl font-bold mb-6 text-blue-400">{s.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">{s.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}