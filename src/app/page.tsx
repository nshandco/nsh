"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const testimonials = [
  { text: "The precision and speed at which NSH & Co. handles our audits is unmatched. They feel like an extension of our own team.", name: "Vikram Sethi, CEO of NexGen Tech" },
  { text: "Navigating GST litigation was a nightmare until we partnered with Naman and his team. Their expertise saved us months of stress.", name: "Ananya Iyer, Director of Operations" },
  { text: "Strategic, deep-thinking, and reliable. NSH & Co. helped our startup scale from seed to Series A with perfect compliance.", name: "Karan Malhotra, Founder" }
];

export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveIdx((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', color: '#1d1d1f', overflowX: 'hidden', fontFamily: '-apple-system, sans-serif' }}>
      
      {/* HERO SECTION */}
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '100px', paddingLeft: '24px', paddingRight: '24px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        {/* Mesh Gradients */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '70%', height: '70%', backgroundColor: 'rgba(59, 130, 246, 0.08)', filter: 'blur(160px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '60%', height: '60%', backgroundColor: 'rgba(129, 140, 248, 0.08)', filter: 'blur(160px)', borderRadius: '50%' }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', position: 'relative', zIndex: 10 }}>
          <div style={{ gridColumn: 'span 8' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#0071e3', marginBottom: '32px' }}>Established Pedigree</h2>
            <h1 style={{ fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 'bold', letterSpacing: '-0.05em', lineHeight: '1.05', marginBottom: '40px' }}>
              Big 4 Expertise. <br/>
              <span style={{ color: '#0071e3', fontStyle: 'italic' }}>Uncompromising Bespoke Care.</span>
            </h1>
            <p style={{ fontSize: '24px', color: '#86868b', maxWidth: '640px', marginBottom: '48px', lineHeight: '1.5', fontWeight: '500' }}>
              Global-standard financial auditing and strategic tax advisory, delivered with the agility and personal touch of a boutique firm.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
               <Link href="/connect" style={{ backgroundColor: '#0071e3', color: 'white', padding: '16px 40px', borderRadius: '40px', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>Start Consultation</Link>
               <Link href="/expertise" style={{ backgroundColor: '#f5f5f7', color: 'black', padding: '16px 40px', borderRadius: '40px', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>View Services</Link>
            </div>
          </div>

          {/* Right Side Info Card */}
          <div style={{ gridColumn: 'span 4', display: 'flex', alignItems: 'center' }}>
             <div style={{ padding: '32px', borderRadius: '48px', background: 'linear-gradient(180deg, #fff 0%, #f9f9fb 100%)', border: '1px solid #eee', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }} /><p style={{ fontSize: '12px', fontWeight: 'bold', color: '#86868b', letterSpacing: '0.1em' }}>DELHI-NCR HQ</p></div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#a855f7', borderRadius: '50%' }} /><p style={{ fontSize: '12px', fontWeight: 'bold', color: '#86868b', letterSpacing: '0.1em' }}>15+ PROFESSIONALS</p></div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><div style={{ width: '8px', height: '8px', backgroundColor: '#6366f1', borderRadius: '50%' }} /><p style={{ fontSize: '12px', fontWeight: 'bold', color: '#86868b', letterSpacing: '0.1em' }}>BIG 4 PEDIGREE</p></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC TESTIMONIAL SLIDER */}
      <section style={{ padding: '96px 24px', backgroundColor: 'white', borderTop: '1px solid #f2f2f2', borderBottom: '1px solid #f2f2f2' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ 
              position: 'absolute', opacity: i === activeIdx ? 1 : 0, 
              transition: 'opacity 0.8s ease-in-out', textAlign: 'center'
            }}>
              <p style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: '500', color: '#333', lineHeight: '1.4' }}>"{t.text}"</p>
              <p style={{ marginTop: '32px', color: '#0071e3', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '12px' }}> {t.name} </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}