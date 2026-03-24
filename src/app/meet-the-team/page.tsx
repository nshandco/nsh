"use client";

const partners = [
  { 
    name: "CA Hrithvik Raj", 
    qual: "FCA", // Removed DISA (ICAI)
    bio: "A veteran in Forensic Accounting and Risk Assurance with 13+ years of experience. Hrithvik specialises in institutional integrity and complex audit frameworks.", 
    img: "/images/hrithvik.jpg" 
  },
  { 
    name: "CA Shrey Gupta", 
    qual: "FCA", 
    bio: "Startup and MSME specialist with 7+ years in Tax Planning. Shrey bridges the gap between regulatory compliance and scalable business strategy.", 
    img: "/images/shrey.jpg" 
  },
  { 
    name: "CA Naman Jain", 
    qual: "FCA", // Removed CMA (Rankholder)
    bio: "Ex-EY (Assurance) with 9+ years of experience. A specialist in GST Advisory, Appeals, and Litigation. Serves as an Independent Director at Sona Machinery.", // Updated Company name
    img: "/images/naman.jpg" 
  },
  { 
    name: "CA Bhanu Mukhija", 
    qual: "FCA", 
    bio: "9 Years of expertise in Ind AS and IFRS implementation. Bhanu ensures global transparency standards for complex corporate financial reporting.", 
    img: "/images/bhanu.jpg" 
  }
];

export default function MeetTheTeam() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* WINDOWS FIX: This spacer ensures the hero isn't cut off by the Nav bar */}
      <div style={{ height: '100px', backgroundColor: 'white' }}></div>

      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'linear-gradient(to bottom right, #f8faff, #f0f4ff)' }}>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: '24px' }}>Meet the Team.</h1>
        <p style={{ fontSize: '22px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>Led by dynamic partners with Big 4 foundations and a shared vision for financial excellence.</p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '48px' }}>
           {partners.map((p, i) => (
             <div key={i} style={{ 
               padding: '40px', 
               borderRadius: '64px', 
               backgroundColor: 'white', 
               border: '1px solid #eee', 
               boxShadow: '0 10px 30px rgba(0,0,0,0.03)', 
               display: 'flex', 
               gap: '32px', 
               alignItems: 'center' 
             }}>
                <img src={p.img} alt={p.name} style={{ width: '180px', height: '180px', borderRadius: '48px', objectFit: 'cover', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
                <div>
                  <h3 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{p.name}</h3>
                  <p style={{ color: '#0071e3', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '8px', marginBottom: '16px' }}>{p.qual}</p>
                  <p style={{ color: '#666', lineHeight: '1.6', fontSize: '15px' }}>{p.bio}</p>
                </div>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}