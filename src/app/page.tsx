"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const testimonials = [
  { text: "The precision and speed at which NSH & Co. handles our audits is unmatched. They feel like an extension of our own team.", name: "Vikram Sethi, CEO of NexGen Tech" },
  { text: "Navigating GST litigation was a nightmare until we partnered with Naman and his team. Their expertise saved us months of stress.", name: "Ananya Iyer, Director of Operations" },
  { text: "Strategic, deep-thinking, and reliable. NSH & Co. helped our startup scale with perfect compliance.", name: "Karan Malhotra, Founder" }
];

const partners = [
  { name: "Hrithvik", img: "/images/hrithvik.jpg" },
  { name: "Shrey", img: "/images/shrey.jpg" },
  { name: "Naman", img: "/images/naman.jpg" },
  { name: "Bhanu", img: "/images/bhanu.jpg" }
];

export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveIdx((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', color: '#1d1d1f', overflowX: 'hidden', fontFamily: '-apple-system, sans-serif' }}>
      
      {/* SUBTLE MESH ACCENTS FOR WHITE SPACE DEPTH */}
      <div style={{ position: 'fixed', top: '10%', right: '-5%', width: '600px', height: '600px', backgroundColor: 'rgba(0, 113, 227, 0.03)', filter: 'blur(140px)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '10%', left: '-5%', width: '500px', height: '500px', backgroundColor: 'rgba(94, 92, 230, 0.02)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }} />

      {/* NAVIGATION BAR */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 1000, 
        backgroundColor: 'rgba(255,255,255,0.8)', 
        backdropFilter: 'blur(20px)', 
        borderBottom: '1px solid #f2f2f2',
        padding: '16px 24px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            {/* UPDATED LOGO PATH */}
            <img src="/images/logo.jpg" alt="NSH Logo" style={{ height: '32px', width: 'auto', borderRadius: '4px' }} />
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#000', letterSpacing: '-0.02em' }}>
              NSH & Co. <span style={{ fontWeight: '400', color: '#86868b', fontSize: '14px', marginLeft: '4px' }}>(Chartered Accountants)</span>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link href="/our-story" style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f', textDecoration: 'none' }}>Our Story</Link>
            <Link href="/expertise" style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f', textDecoration: 'none' }}>Expertise</Link>
            <Link href="/meet-the-team" style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f', textDecoration: 'none' }}>Team</Link>
            <Link href="/careers" style={{ fontSize: '14px', fontWeight: '600', color: '#0071e3', textDecoration: 'none' }}>Careers</Link>
            <Link href="/connect" style={{ fontSize: '14px', fontWeight: '700', backgroundColor: '#1d1d1f', color: 'white', padding: '8px 20px', borderRadius: '100px', textDecoration: 'none' }}>Connect</Link>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '60px', paddingLeft: '24px', paddingRight: '24px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '70%', height: '70%', backgroundColor: 'rgba(0, 113, 227, 0.06)', filter: 'blur(160px)', borderRadius: '50%' }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', position: 'relative', zIndex: 10 }}>
          <div style={{ gridColumn: 'span 8' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#0071e3', marginBottom: '32px' }}>Established Pedigree</h2>
            <h1 style={{ fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 'bold', letterSpacing: '-0.05em', lineHeight: '1.05', marginBottom: '40px' }}>
              Big 4 Expertise. <br/>
              <span style={{ color: '#0071e3', fontStyle: 'italic' }}>Uncompromising Bespoke Care.</span>
            </h1>
            <p style={{ fontSize: '22px', color: '#86868b', maxWidth: '600px', marginBottom: '48px', lineHeight: '1.5', fontWeight: '500' }}>
              Global-standard financial auditing and strategic tax advisory, delivered with the agility and personal touch of a boutique firm.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
               <Link href="/connect" style={{ backgroundColor: '#0071e3', color: 'white', padding: '16px 36px', borderRadius: '40px', fontSize: '17px', fontWeight: '600', textDecoration: 'none' }}>Start Consultation</Link>
               <Link href="/expertise" style={{ backgroundColor: '#f5f5f7', color: 'black', padding: '16px 36px', borderRadius: '40px', fontSize: '17px', fontWeight: '600', textDecoration: 'none' }}>View Services</Link>
            </div>
          </div>
          
          <div style={{ gridColumn: 'span 4', display: 'flex', alignItems: 'center' }}>
             <div style={{ padding: '32px', borderRadius: '40px', background: 'linear-gradient(180deg, #fff 0%, #f9f9fb 100%)', border: '1px solid #eee', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#0071e3', borderRadius: '50%' }} /><p style={{ fontSize: '11px', fontWeight: 'bold', color: '#86868b', letterSpacing: '0.1em' }}>DELHI-NCR HQ</p></div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#a855f7', borderRadius: '50%' }} /><p style={{ fontSize: '11px', fontWeight: 'bold', color: '#86868b', letterSpacing: '0.1em' }}>15+ PROFESSIONALS</p></div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#6366f1', borderRadius: '50%' }} /><p style={{ fontSize: '11px', fontWeight: 'bold', color: '#86868b', letterSpacing: '0.1em' }}>BIG 4 PEDIGREE</p></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TESTIMONIAL SLIDER */}
      <section style={{ padding: '80px 24px', backgroundColor: 'transparent', borderTop: '1px solid #f2f2f2', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ position: 'absolute', opacity: i === activeIdx ? 1 : 0, transition: 'opacity 0.8s ease-in-out', textAlign: 'center' }}>
              <p style={{ fontSize: '20px', fontStyle: 'italic', fontWeight: '500', color: '#444', lineHeight: '1.4' }}>"{t.text}"</p>
              <p style={{ marginTop: '20px', color: '#0071e3', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '11px' }}> — {t.name} </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: MEET THE PARTNERS */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '50px', letterSpacing: '-0.02em' }}>Meet the Partners.</h2>
        <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '20px' }}>
          {partners.map((p) => (
            <div key={p.name} style={{ minWidth: '260px', flex: 1 }}>
              <div style={{ aspectRatio: '1/1', backgroundColor: '#f5f5f7', borderRadius: '24px', overflow: 'hidden', marginBottom: '16px', border: '1px solid #eee' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>CA {p.name}</h4>
              <p style={{ color: '#86868b', fontSize: '13px', marginTop: '4px' }}>Partner, FCA</p>
            </div>
          ))}
        </div>
        <Link href="/meet-the-team" style={{ color: '#0071e3', fontWeight: '600', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>Full Profiles →</Link>
      </section>

      {/* SECTION 4: OPPORTUNITIES */}
      <section style={{ padding: '100px 24px', backgroundColor: 'rgba(251, 251, 253, 0.7)', borderTop: '1px solid #f2f2f2', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '50px', letterSpacing: '-0.02em' }}>Opportunities.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            <Link href="/careers" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ padding: '48px', backgroundColor: 'white', borderRadius: '32px', border: '1px solid #eee', height: '100%', transition: 'transform 0.2s' }}>
                <h3 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 16px 0' }}>Account Executive</h3>
                <p style={{ color: '#86868b', fontSize: '16px', lineHeight: '1.6', margin: '0 0 32px 0' }}>
                  Join our Direct & Indirect Tax wings. If you have 2+ years of experience in GST filings and TDS compliance, we want you on the front lines of client delivery.
                </p>
                <span style={{ color: '#0071e3', fontWeight: '600' }}>Apply Now →</span>
              </div>
            </Link>

            <Link href="/careers" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ padding: '48px', backgroundColor: '#1d1d1f', color: 'white', borderRadius: '32px', height: '100%', transition: 'transform 0.2s' }}>
                <h3 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 16px 0' }}>CA Articleship (2026)</h3>
                <p style={{ color: '#a1a1a6', fontSize: '16px', lineHeight: '1.6', margin: '0 0 32px 0' }}>
                  Start your career where the standards are highest. Get direct exposure to Statutory Audits and International Taxation alongside partners with Big 4 foundations.
                </p>
                <span style={{ color: '#0071e3', fontWeight: '600' }}>Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ padding: '60px 24px', textAlign: 'center', color: '#86868b', fontSize: '12px', borderTop: '1px solid #f2f2f2', position: 'relative', zIndex: 1 }}>
        © 2026 NSH & CO. [ Chartered Accountants ] • Delhi • Gurgaon
      </footer>
    </main>
  );
}