"use client";

export default function OurStory() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white', 
      color: '#1d1d1f', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }}>
      
      {/* WINDOWS/NAVBAR FIX: Ensures content starts below the fixed header */}
      <div style={{ height: '100px', width: '100%' }}></div>

      {/* 1. PROFESSIONAL HERO SECTION - Updated with Padding for Scaling */}
      <section style={{ 
        padding: '120px 24px', 
        textAlign: 'center', 
        backgroundColor: '#f5f5f7', 
        borderBottom: '1px solid #e5e5e7' 
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', margin: 0 }}>Our Journey.</h1>
          <p style={{ fontSize: '22px', color: '#86868b', marginTop: '16px', fontWeight: 500 }}>A Legacy of Precision and Trust.</p>
        </div>
      </section>

      {/* 2. MAIN CONTENT CONTAINER */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        
        {/* FIRM STATS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '100px' }}>
          {[
            { label: "Offices in India", value: "2", color: "rgba(0, 113, 227, 0.04)" },
            { label: "Partners", value: "4", color: "rgba(94, 92, 230, 0.04)" },
            { label: "Expert Team Members", value: "15+", color: "rgba(175, 82, 222, 0.04)" }
          ].map((stat, i) => (
            <div key={i} style={{ padding: '48px 20px', borderRadius: '32px', backgroundColor: stat.color, border: '1px solid rgba(0,0,0,0.02)', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#1d1d1f', letterSpacing: '-0.02em' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#86868b', textTransform: 'uppercase', marginTop: '12px', letterSpacing: '0.2em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FIRM NARRATIVE */}
        <div style={{ lineHeight: '1.8', fontSize: '20px', color: '#424245' }}>
          <p style={{ marginBottom: '40px' }}>
            NSH & CO. comprises a dedicated and expert team, duly assisted by qualified Chartered Accountants possessing the requisite technical depth and sectoral experience. Our firm is built on the pillars of **Statutory and Internal Audit, Strategic Taxation, and Management Consultation.**
          </p>

          {/* THE QUOTE BOX */}
          <blockquote style={{ padding: '56px', borderRadius: '40px', backgroundColor: '#f5f5f7', borderLeft: '10px solid #0071e3', margin: '80px 0' }}>
            <p style={{ fontSize: '26px', fontWeight: '600', fontStyle: 'italic', color: '#1d1d1f', margin: 0, lineHeight: '1.4' }}>
              "We prioritize the proactive protection of Brand Integrity, ensuring every engagement is pursued with a deadline-first philosophy."
            </p>
          </blockquote>

          {/* 3. MISSION & VISION SECTION */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '100px' }}>
            <div style={{ padding: '64px 48px', borderRadius: '40px', backgroundColor: '#ffffff', border: '1px solid #e5e5e7', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#0071e3', marginBottom: '24px' }}>Our Vision</h3>
              <p style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.5', color: '#1d1d1f', margin: 0 }}>To be the gold standard of professional integrity, recognized globally as the architects of financial transparency.</p>
            </div>
            <div style={{ padding: '64px 48px', borderRadius: '40px', backgroundColor: '#ffffff', border: '1px solid #e5e5e7', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#0071e3', marginBottom: '24px' }}>Our Mission</h3>
              <p style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.5', color: '#1d1d1f', margin: 0 }}>To deliver high-fidelity professional services that empower our clients to navigate complex regulatory landscapes.</p>
            </div>
          </div>

          {/* 4. ETHICAL FRAMEWORK SECTION */}
          <div style={{ marginTop: '120px', borderTop: '1px solid #eee', paddingTop: '100px', paddingBottom: '120px' }}>
            <div style={{ marginBottom: '64px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#0071e3', marginBottom: '16px' }}>Corporate Philosophy</h3>
              <h2 style={{ fontSize: '52px', fontWeight: '800', letterSpacing: '-0.03em', color: '#1d1d1f', margin: 0 }}>Our Ethical Framework</h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: '#0071e3', margin: '32px auto 0', borderRadius: '2px' }} />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {[
                { 
                  text: "Unwavering Professional Integrity", 
                  desc: "Beyond mere compliance, we uphold a moral compass that ensures every audit is a reflection of absolute truth.",
                  color: "rgba(0, 113, 227, 0.035)" 
                },
                { 
                  text: "Absolute Statutory Independence", 
                  desc: "We maintain a strict objective distance, providing an unbiased lens that stakeholders can rely on without hesitation.",
                  color: "rgba(94, 92, 230, 0.035)" 
                },
                { 
                  text: "Rigorous Ethical Compliance", 
                  desc: "Adhering to the highest global standards, we navigate regulatory complexities with discipline and local expertise.",
                  color: "rgba(175, 82, 222, 0.035)" 
                },
                { 
                  text: "Fiduciary Confidentiality", 
                  desc: "Your data is protected by a fortress of professional secrecy, ensuring trust is built on a foundation of total security.",
                  color: "rgba(0, 113, 227, 0.035)" 
                },
                { 
                  text: "Mutual Professional Respect", 
                  desc: "We foster an environment where technical excellence and human dignity coexist, driving better results for our clients.",
                  color: "rgba(94, 92, 230, 0.035)" 
                },
                { 
                  text: "Sustained Client Relations", 
                  desc: "We don't just close files; we open long-term partnerships, growing alongside the businesses we advise.",
                  color: "rgba(175, 82, 222, 0.035)" 
                }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  padding: '56px 40px', 
                  borderRadius: '40px', 
                  backgroundColor: item.color, 
                  border: '1px solid rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '280px'
                }}>
                  <div style={{ width: '36px', height: '3px', backgroundColor: '#0071e3', marginBottom: '28px' }} />
                  <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#1d1d1f', margin: '0 0 16px 0', lineHeight: '1.2' }}>
                    {item.text}
                  </h4>
                  <p style={{ fontSize: '15px', color: '#636366', margin: 0, lineHeight: '1.6', fontWeight: '500' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '80px 24px', textAlign: 'center', color: '#86868b', fontSize: '13px', backgroundColor: '#f5f5f7', borderTop: '1px solid #e5e5e7' }}>
        © 2026 NSH & CO. [ Chartered Accountants ] • Precision in Audit • Strategic Tax Advisory
      </footer>
    </main>
  );
}