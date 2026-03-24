"use client";
export default function Connect() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', paddingTop: '120px' }}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontSize: '64px', fontWeight: 800, marginBottom: '60px' }}>Connect.</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          {/* COLUMN 1: THE FORM */}
          <div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input placeholder="Full Name" style={{ padding: '20px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f5f5f7' }} />
              <input placeholder="Phone Number" style={{ padding: '20px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f5f5f7' }} />
              <input placeholder="Company (Optional)" style={{ padding: '20px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f5f5f7' }} />
              <textarea placeholder="Your Message" rows={5} style={{ padding: '20px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f5f5f7' }} />
              <button style={{ padding: '20px', borderRadius: '40px', backgroundColor: '#0071e3', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Send Message</button>
            </form>
          </div>

          {/* COLUMN 2: MAP & INFO */}
          <div>
            <div style={{ borderRadius: '40px', overflow: 'hidden', height: '300px', backgroundColor: '#eee', marginBottom: '30px' }}>
              {/* Replace with actual Google Maps Embed link */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562064115312!2d77.2273!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTMnMzguMyJF!5e0!3m2!1sen!2sin!4v1620000000000" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
              />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '700' }}>HQ: Delhi-NCR</h3>
            <p style={{ color: '#666', marginTop: '10px' }}>123 Professional Suite, New Delhi, India</p>
            <p style={{ color: '#0071e3', fontWeight: 'bold', marginTop: '20px' }}>contact@nshco.in</p>
          </div>
        </div>
      </section>
    </main>
  );
}