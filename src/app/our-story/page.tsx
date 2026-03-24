"use client";
import Link from 'next/link';

export default function OurStory() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', color: '#1d1d1f', fontFamily: '-apple-system, sans-serif' }}>
      
      {/* HERO SECTION */}
      <section style={{ height: '60vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
        <img 
          src="/images/office-hero.jpg" 
          alt="NSH Office"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', opacity: 0.6 }} 
        />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>Our Story.</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', marginTop: '20px', fontWeight: 500 }}>Founded on Integrity. Driven by Precision.</p>
        </div>
      </section>

      {/* NARRATIVE SECTION */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '32px', letterSpacing: '-0.02em' }}>The NSH Pedigree.</h2>
          <p style={{ fontSize: '19px', lineHeight: '1.7', color: '#424245', marginBottom: '24px' }}>
            NSH & CO. was established in the Delhi-NCR region to redefine the expectations of professional financial advisory. Our founders transitioned from **Big 4 environments (Ernst & Young)** with a singular mission: to provide the technical sophistication of a global powerhouse with the agility and "uncompromising bespoke care" of a boutique firm.
          </p>
          <p style={{ fontSize: '19px', lineHeight: '1.7', color: '#424245' }}>
            In a landscape of shifting regulations, we serve as the financial anchor for our clients. Whether navigating complex **GST litigation**, implementing **Ind AS frameworks**, or conducting forensic audits, we bring 13+ years of collective leadership to the table.
          </p>
        </div>

        {/* INDUSTRY CONTEXT - WHAT CA FIRMS DO */}
        <div style={{ padding: '60px', backgroundColor: '#f5f5f7', borderRadius: '40px', border: '1px solid #e5e5e7' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>The Backbone of Business.</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#86868b' }}>
            Modern Chartered Accountancy has evolved beyond traditional bookkeeping. Leading firms like NSH & CO. act as strategic architects—protecting brand integrity, optimizing tax structures for cross-border transactions, and ensuring that institutional transparency meets global investment standards. 
          </p>
        </div>
      </section>

      <footer style={{ padding: '60px 24px', textAlign: 'center', color: '#86868b', fontSize: '12px', borderTop: '1px solid #f2f2f2' }}>
        © 2026 NSH & CO. [ Chartered Accountants ]
      </footer>
    </main>
  );
}