import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, sans-serif' }}>
        <nav style={{ 
          position: 'fixed', top: 0, width: '100%', zIndex: 100, 
          backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', 
          borderBottom: '1px solid rgba(0,0,0,0.05)', height: '70px', display: 'flex', alignItems: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img src="/images/logo.jpg" alt="NSH Logo" style={{ height: '36px', width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#1d1d1f', letterSpacing: '-0.5px' }}>NSH & CO.</span>
                <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#86868b', textTransform: 'uppercase', letterSpacing: '1px' }}>[ Chartered Accountants ]</span>
              </div>
            </Link>
            
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              <Link href="/our-story" style={{ fontSize: '13px', fontWeight: '500', color: '#515154', textDecoration: 'none' }}>Our Story</Link>
              <Link href="/expertise" style={{ fontSize: '13px', fontWeight: '500', color: '#515154', textDecoration: 'none' }}>Expertise</Link>
              <Link href="/meet-the-team" style={{ fontSize: '13px', fontWeight: '500', color: '#515154', textDecoration: 'none' }}>Meet the Team</Link>
              <Link href="/connect" style={{ backgroundColor: 'black', color: 'white', padding: '8px 20px', borderRadius: '20px', fontSize: '13px', fontWeight: '500', textDecoration: 'none' }}>Connect</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}