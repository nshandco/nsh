"use client";

export default function CareersPage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white', 
      color: '#1d1d1f', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }}>
      
      {/* WINDOWS/NAVBAR FIX: Safety Spacer */}
      <div style={{ height: '110px', width: '100%' }}></div>

      {/* HERO SECTION */}
      <section style={{ 
        padding: '100px 24px', 
        textAlign: 'center', 
        background: 'linear-gradient(180deg, #fbfbfd 0%, #ffffff 100%)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <span style={{ color: '#0071e3', fontWeight: '800', letterSpacing: '0.4em', fontSize: '13px', textTransform: 'uppercase' }}>Join the Practice</span>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, margin: '24px 0' }}>
            Build your future <br/>with NSH & Co.
          </h1>
          <p style={{ fontSize: '22px', color: '#86868b', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            We provide a high-performance environment where technical expertise meets strategic growth. Join a team dedicated to financial integrity.
          </p>
        </div>
      </section>

      {/* ROLES SECTION */}
      <section style={{ maxWidth: '1400px', margin: '0 auto 100px', padding: '0 24px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', 
          gap: '40px' 
        }}>
          
          {/* ROLE 1: ACCOUNT EXECUTIVE (VIBRANT BLUE THEME) */}
          <div style={{ 
            padding: '80px 60px', 
            borderRadius: '60px', 
            backgroundColor: 'rgba(0, 113, 227, 0.04)', 
            border: '1px solid rgba(0, 113, 227, 0.1)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ flexGrow: 1 }}>
              <div style={{ width: '50px', height: '5px', backgroundColor: '#0071e3', borderRadius: '10px', marginBottom: '32px' }} />
              <span style={{ color: '#0071e3', fontWeight: '800', letterSpacing: '0.1em', fontSize: '13px', textTransform: 'uppercase' }}>Professional Role</span>
              <h2 style={{ fontSize: '42px', fontWeight: '800', marginTop: '16px', marginBottom: '32px', letterSpacing: '-0.02em' }}>Account Executive</h2>
              
              <div style={{ color: '#424245', fontSize: '17px', lineHeight: '1.7' }}>
                <p style={{ marginBottom: '32px', fontSize: '19px', fontWeight: '500' }}>We are seeking a dedicated professional for immediate hiring at our Saket office. This role is designed for those capable of handling end-to-end accounting with high precision.</p>
                
                <h4 style={{ fontWeight: '800', color: '#1d1d1f', marginBottom: '16px', fontSize: '20px' }}>Core Responsibilities</h4>
                <ul style={{ paddingLeft: '20px', marginBottom: '32px', color: '#515154', listStyleType: 'circle' }}>
                  <li style={{ marginBottom: '12px' }}>
                    <span style={{ fontWeight: '800', color: '#1d1d1f' }}>Financial Integrity:</span> Maintenance of Books of Accounts and comprehensive Ledger Scrutiny.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <span style={{ fontWeight: '800', color: '#1d1d1f' }}>Tax Compliance:</span> GST Return Filing (GSTR-1, 3B) and monthly Reconciliation.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <span style={{ fontWeight: '800', color: '#1d1d1f' }}>Reporting:</span> TDS Working, Return Filing, and rigorous Bank Reconciliations.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <span style={{ fontWeight: '800', color: '#1d1d1f' }}>Finalization:</span> Assisting in the preparation and finalisation of annual statutory accounts.
                  </li>
                </ul>

                <h4 style={{ fontWeight: '800', color: '#1d1d1f', marginBottom: '12px', fontSize: '20px' }}>Why Join Us?</h4>
                <p style={{ marginBottom: '40px' }}>Gain direct exposure to diverse industry portfolios and work in a tech-forward environment (Tally Prime & Excel Expert level).</p>
              </div>
            </div>

            <a href="mailto:support@nshca.com?subject=Application for Account Executive" style={{ 
              display: 'block', 
              backgroundColor: '#0071e3', 
              color: 'white', 
              padding: '24px', 
              borderRadius: '100px', 
              textDecoration: 'none', 
              fontWeight: '700',
              textAlign: 'center',
              fontSize: '18px',
              boxShadow: '0 10px 25px rgba(0,113,227,0.2)'
            }}>
              Apply for this Position
            </a>
          </div>

          {/* ROLE 2: CA ARTICLESHIP (DARK MODE THEME) */}
          <div style={{ 
            padding: '80px 60px', 
            borderRadius: '60px', 
            backgroundColor: '#1d1d1f', 
            color: 'white',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ flexGrow: 1 }}>
              <div style={{ width: '50px', height: '5px', backgroundColor: '#5e5ce6', borderRadius: '10px', marginBottom: '32px' }} />
              <span style={{ color: '#5e5ce6', fontWeight: '800', letterSpacing: '0.1em', fontSize: '13px', textTransform: 'uppercase' }}>Training Opportunity</span>
              <h2 style={{ fontSize: '42px', fontWeight: '800', marginTop: '16px', marginBottom: '32px', letterSpacing: '-0.02em' }}>CA Articleship</h2>
              
              <div style={{ color: '#d2d2d7', fontSize: '17px', lineHeight: '1.7' }}>
                <p style={{ marginBottom: '32px', fontSize: '19px', fontWeight: '500', color: '#f5f5f7' }}>Join our 2026 cohort for a rewarding Articleship where theory meets real-world professional practice.</p>
                
                <h4 style={{ fontWeight: '800', color: 'white', marginBottom: '16px', fontSize: '20px' }}>Training Areas</h4>
                <ul style={{ paddingLeft: '20px', marginBottom: '32px', listStyleType: 'circle' }}>
                  <li style={{ marginBottom: '12px' }}>
                    <span style={{ fontWeight: '800', color: 'white' }}>Auditing:</span> Hands-on exposure to Statutory, Tax, and Internal Audit engagements.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <span style={{ fontWeight: '800', color: 'white' }}>Taxation:</span> Direct and Indirect Tax compliance, including GST & Income Tax.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <span style={{ fontWeight: '800', color: 'white' }}>Advisory:</span> Corporate Law, ROC matters, and specialized advisory assignments.
                  </li>
                </ul>

                <div style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  padding: '30px', 
                  borderRadius: '35px', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  marginBottom: '40px' 
                }}>
                  <h4 style={{ fontWeight: '800', color: 'white', marginBottom: '15px', fontSize: '18px' }}>Stipend Structure</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>First Year</span>
                    <span style={{ fontWeight: '700', color: '#fff' }}>₹10,000 / month</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Second Year</span>
                    <span style={{ fontWeight: '700', color: '#fff' }}>₹12,000 / month</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="mailto:support@nshca.com?subject=Application for CA Articleship" style={{ 
              display: 'block', 
              backgroundColor: 'white', 
              color: 'black', 
              padding: '24px', 
              borderRadius: '100px', 
              textDecoration: 'none', 
              fontWeight: '700',
              textAlign: 'center',
              fontSize: '18px'
            }}>
              Join the Cohort
            </a>
          </div>

        </div>
      </section>

      <footer style={{ padding: '80px 24px', textAlign: 'center', color: '#86868b', fontSize: '14px', borderTop: '1px solid #f5f5f7' }}>
        © 2026 NSH & CO. • Chartered Accountants • Saket, New Delhi
      </footer>
    </main>
  );
}