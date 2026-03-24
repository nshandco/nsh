"use client";

export default function Connect() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', paddingTop: '120px', paddingBottom: '80px' }}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontSize: '64px', fontWeight: 800, marginBottom: '60px', letterSpacing: '-2px' }}>Connect.</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          {/* COLUMN 1: THE CONTACT FORM */}
          <div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input 
                placeholder="Full Name" 
                style={{ padding: '20px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f5f5f7', fontSize: '16px' }} 
              />
              <input 
                placeholder="Phone Number" 
                style={{ padding: '20px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f5f5f7', fontSize: '16px' }} 
              />
              <input 
                placeholder="Company (Optional)" 
                style={{ padding: '20px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f5f5f7', fontSize: '16px' }} 
              />
              <textarea 
                placeholder="Your Message" 
                rows={5} 
                style={{ padding: '20px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f5f5f7', fontSize: '16px', resize: 'none' }} 
              />
              <button 
                type="button"
                style={{ padding: '20px', borderRadius: '40px', backgroundColor: '#000', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '18px' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* COLUMN 2: MAP & OFFICE INFO */}
          <div>
            <div style={{ borderRadius: '40px', overflow: 'hidden', height: '350px', backgroundColor: '#f5f5f7', marginBottom: '30px', border: '1px solid #eee' }}>
              {/* THE PIN FIX: Using a search query forces the red pin onto your registered business */}
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                src="https://www.google.com/maps?q=NSH+%26+CO.+Chartered+accountants+New+Delhi&output=embed"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1d1d1f' }}>NSH & CO. Headquarters</h3>
            
            <p style={{ color: '#666', marginTop: '15px', lineHeight: '1.6', fontSize: '17px' }}>
              1st Floor, Plot No 3b, Lane No 02,<br />
              Kehar Singh Estate, Saiyad Ul Ajaib Extension,<br />
              Sainik Farm, New Delhi, Delhi 110030
            </p>

            <div style={{ marginTop: '30px' }}>
              <a 
                href="mailto:support@nshca.com" 
                style={{ color: '#0071e3', fontWeight: '600', textDecoration: 'none', fontSize: '18px' }}
              >
                support@nshca.com
              </a>
            </div>

            <div style={{ marginTop: '20px' }}>
              <a 
                href="https://share.google/7t4cMJRCmPViJRwvm" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '12px 25px',
                  borderRadius: '25px',
                  border: '1px solid #000',
                  color: '#000',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}