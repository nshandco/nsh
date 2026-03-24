"use client";
import { useRouter } from 'next/navigation';

export default function Expertise() {
  const router = useRouter();

  const majorServices = [
    {
      title: "Audit & Assurance",
      mainDesc: "Delivering independent, high-fidelity audits that ensure statutory compliance and build stakeholder trust.",
      subServices: ["Statutory & Tax Audit", "Internal & Management Audit", "Stock & Receivables Audit"],
      color: "rgba(0, 113, 227, 0.05)",
      accent: "#0071e3"
    },
    {
      title: "Taxation & Regulatory",
      mainDesc: "Navigating complex fiscal landscapes through strategic planning and rigorous compliance management.",
      subServices: ["Direct & Indirect Tax", "GST Advisory & Filing", "International Taxation"],
      color: "rgba(94, 92, 230, 0.05)",
      accent: "#5e5ce6"
    },
    {
      title: "Corporate Advisory",
      mainDesc: "Providing the technical depth required for structural growth, mergers, and financial restructuring.",
      subServices: ["Company Law Matters", "Project Financing", "Transaction Advisory"],
      color: "rgba(175, 82, 222, 0.05)",
      accent: "#af52de"
    },
    {
      title: "Management Consultancy",
      mainDesc: "Proactive business solutions designed to optimize operational efficiency and financial health.",
      subServices: ["Business Valuation", "MIS & Internal Controls", "Risk Management"],
      color: "rgba(0, 113, 227, 0.05)",
      accent: "#0071e3"
    },
    {
      title: "Startup & FDI Support",
      mainDesc: "Comprehensive support for new ventures and foreign entities entering the Indian market.",
      subServices: ["Entity Incorporation", "FEMA Compliance", "Startup India Registration"],
      color: "rgba(94, 92, 230, 0.05)",
      accent: "#5e5ce6"
    },
    {
      title: "Accounting & Outsourcing",
      mainDesc: "Streamlined financial reporting and back-office support to let you focus on core business growth.",
      subServices: ["Bookkeeping Services", "Payroll Management", "Financial Statement Prep"],
      color: "rgba(175, 82, 222, 0.05)",
      accent: "#af52de"
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', color: '#1d1d1f', fontFamily: '-apple-system, sans-serif' }}>
      
      {/* WINDOWS FIX: Spacer to prevent hero text from being cut off by the header */}
      <div style={{ height: '100px', width: '100%' }}></div>

      {/* VIBRANT GRADIENT HERO SECTION */}
      <section style={{ 
        height: '55vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'linear-gradient(135deg, #001d3d 0%, #003566 50%, #0071e3 100%)', 
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ textAlign: 'center', padding: '0 24px', zIndex: 2 }}>
          <h3 style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Expertise & Practices</h3>
          <h1 style={{ fontSize: 'clamp(48px, 9vw, 84px)', fontWeight: 800, letterSpacing: '-0.04em', margin: 0 }}>Our Expertise.</h1>
          <p style={{ 
            fontSize: '24px', 
            color: 'rgba(255,255,255,0.9)', 
            marginTop: '32px', 
            maxWidth: '850px', 
            margin: '32px auto 0',
            lineHeight: '1.5',
            fontWeight: 400 
          }}>
            Precision in Audit. Strategy in Tax. Excellence in Advisory.
          </p>
        </div>
      </section>

      {/* STRUCTURED UNIFORM GRID */}
      <section style={{ maxWidth: '1250px', margin: '-80px auto 100px', padding: '0 24px', position: 'relative', zIndex: 3 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '32px' }}>
          {majorServices.map((service, i) => (
            <div key={i} style={{ 
              padding: '60px 48px', 
              borderRadius: '40px', 
              backgroundColor: '#ffffff', 
              border: '1px solid #e5e5e7',
              boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '520px' 
            }}>
              <div style={{ width: '48px', height: '4px', backgroundColor: service.accent, borderRadius: '2px', marginBottom: '32px' }} />
              
              <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.03em', color: '#1d1d1f', lineHeight: '1.1' }}>
                {service.title}
              </h3>
              
              <p style={{ fontSize: '18px', color: '#636366', lineHeight: '1.6', marginBottom: '48px', fontWeight: '400' }}>
                {service.mainDesc}
              </p>

              {/* SPACED LIST ITEMS WITH FRONT BULLETS */}
              <div style={{ marginTop: 'auto', borderTop: '1px solid #f5f5f7', paddingTop: '40px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.subServices.map((sub, idx) => (
                    <li key={idx} style={{ 
                      fontSize: '18px', 
                      color: '#1d1d1f', 
                      padding: '12px 0', 
                      display: 'flex', 
                      alignItems: 'center',
                      fontWeight: '600',
                      letterSpacing: '-0.01em'
                    }}>
                      <span style={{ color: service.accent, marginRight: '12px', fontSize: '20px' }}>•</span>{sub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ textAlign: 'center', padding: '120px 24px', backgroundColor: '#f5f5f7', borderRadius: '60px', margin: '0 24px 100px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '20px' }}>Ready to engage?</h2>
        <p style={{ color: '#86868b', fontSize: '22px', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>Connect with our qualified partners for a technical consultation.</p>
        <button 
          onClick={() => router.push('/connect')}
          style={{ 
            backgroundColor: '#0071e3', 
            color: 'white', 
            padding: '20px 48px', 
            borderRadius: '100px', 
            border: 'none', 
            fontWeight: '700', 
            fontSize: '18px',
            cursor: 'pointer' 
          }}
        >
          Contact Our Firm
        </button>
      </section>

      <footer style={{ padding: '80px 24px', textAlign: 'center', color: '#86868b', fontSize: '14px', borderTop: '1px solid #e5e5e7' }}>
        © 2026 NSH & CO. [ Chartered Accountants ] • Accuracy • Integrity • Confidentiality
      </footer>
    </main>
  );
}