"use client";
export default function Connect() {
  return (
    <main className="min-h-screen pt-[150px] pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl font-bold mb-10 tracking-tight">Let's Connect.</h1>
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Direct Lines</h4>
              <p className="text-2xl font-bold text-gray-900">CA Shrey Gupta: +91 8078662941</p>
              <p className="text-2xl font-bold text-gray-900">CA Naman Jain: +91 8377839857</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Official Support</h4>
              <p className="text-2xl font-bold text-gray-900">Support@nshca.com</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Visit Us</h4>
              <p className="text-xl font-medium leading-relaxed text-gray-600">
                Plot No. 3B, Lane 2, Westend Marg, Saidulajab,<br/>
                Saket Metro Station Gate 2, New Delhi 110030
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[4rem] bg-gray-100 overflow-hidden border border-gray-100 shadow-inner flex items-center justify-center min-h-[500px]">
           <p className="text-gray-400 font-bold uppercase tracking-widest text-sm italic text-center">
             Google Maps Interface<br/>
             <span className="text-[10px] opacity-50">[ Saidulajab, New Delhi ]</span>
           </p>
        </div>
      </div>
    </main>
  );
}