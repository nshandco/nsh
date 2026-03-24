"use client";
export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Careers Hero */}
      <section className="pt-40 pb-20 px-6 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Build your future <br/>with NSH & Co.</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">We are looking for exceptional talent to join our Saket-based practice. Explore our current openings below.</p>
        </div>
      </section>

      {/* Split Screen Postings */}
      <section className="flex flex-col md:flex-row min-h-screen border-t border-gray-100">
        
        {/* Left Side: Account Executive */}
        <div className="md:w-1/2 p-12 md:p-24 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Professional Role</span>
          <h2 className="text-4xl font-bold mt-4 mb-8">Account Executive</h2>
          <div className="prose prose-gray leading-relaxed text-gray-600 space-y-6">
            <p>We are seeking a dedicated Account Executive for immediate hiring at our Saket office. This role requires a professional capable of handling assignments independently with high precision.</p>
            <div>
              <h4 className="font-bold text-black underline decoration-blue-500 underline-offset-4">Key Responsibilities</h4>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Maintenance of Books of Accounts and Ledger Scrutiny.</li>
                <li>GST Return Filing (GSTR-1, 3B, Reconciliation).</li>
                <li>TDS Working, Return Filing, and Bank Reconciliations.</li>
                <li>Assisting in the finalisation of annual accounts.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black">Requirements</h4>
              <p>B.Com / M.Com (CA Inter Pass preferred) with minimum 2 years of relevant experience. Expert knowledge of Tally and MS Excel is essential.</p>
            </div>
          </div>
          <a href="mailto:support@nshca.com?subject=Application for Account Executive" className="inline-block mt-12 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all">Apply for this Position</a>
        </div>

        {/* Right Side: CA Articleship */}
        <div className="md:w-1/2 p-12 md:p-24 bg-[#1d1d1f] text-white hover:bg-black transition-colors">
          <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Training Opportunity</span>
          <h2 className="text-4xl font-bold mt-4 mb-8">CA Articleship</h2>
          <div className="prose prose-invert leading-relaxed text-gray-400 space-y-6">
            <p>Join our 2026 cohort for a rigorous and rewarding Articleship. We offer three positions for enthusiastic students eager for real-world exposure.</p>
            <div>
              <h4 className="font-bold text-white underline decoration-blue-400 underline-offset-4">Comprehensive Exposure</h4>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Statutory and Tax Audit engagements.</li>
                <li>GST, Income Tax Compliance, and ROC matters.</li>
                <li>Specialised Advisory Assignments and Company Law.</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-white mb-2">Stipend Details</h4>
              <p className="text-sm">Year 1: ₹10,000 per month</p>
              <p className="text-sm">Year 2: ₹12,000 per month</p>
            </div>
          </div>
          <a href="mailto:support@nshca.com?subject=Application for CA Articleship" className="inline-block mt-12 bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all">Apply for Articleship</a>
        </div>
      </section>
    </main>
  );
}