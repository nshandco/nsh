"use client";

const services = [
  {
    title: "Audit & Assurance",
    desc: "Delivering statutory and internal audits that go beyond compliance to provide actionable business insights. We specialize in zero-error reporting and internal control assessments.",
    features: ["Statutory Audit", "Internal & Management Audit", "Tax Audit (44AB)"]
  },
  {
    title: "Tax & Regulatory",
    desc: "Navigating the complexities of Direct and Indirect Taxation. From GST litigation and appeals to sophisticated international tax planning for inbound investment.",
    features: ["GST Advisory & Litigation", "Income Tax Planning", "TDS/TCS Compliance"]
  },
  {
    title: "Advisory & Corporate Law",
    desc: "Strategic support for startups and corporate houses. We handle ROC filings, company formations, and secretarial audits with absolute precision.",
    features: ["Company Law (MCA) Compliance", "Startup Mentoring", "Ind AS Implementation"]
  }
];

export default function Expertise() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff', paddingTop: '100px', fontFamily: '-apple-system, sans-serif' }}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <h1 style={{ fontSize: 'clamp(44px, 7vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '60px' }}>Expertise.</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {services.map((s, i) => (
            <div key={i} style={{ padding: '48px', backgroundColor: '#fbfbfd', borderRadius: '40px', border: '1px solid #eee' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px', color: '#0071e3' }}>{s.title}</h3>
              <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#424245', marginBottom: '32px' }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {s.features.map((f, idx) => (
                  <li key={idx} style={{ fontSize: '14px', fontWeight: 600, color: '#1d1d1f', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '4px', height: '4px', backgroundColor: '#0071e3', borderRadius: '50%' }} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}