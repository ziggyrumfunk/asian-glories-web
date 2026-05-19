import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: '100vh',
          background: '#0b2d23',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'var(--pad)',
        }}
      >
        <p
          style={{
            fontSize: 10,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#fced88',
            marginBottom: 18,
          }}
        >
          404
        </p>
        <h1 style={{ color: '#fff', marginBottom: 24 }}>
          Pagina niet <em>gevonden</em>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 40, maxWidth: 480 }}>
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#114032',
            background: '#fced88',
            padding: '17px 38px',
            borderRadius: 1,
          }}
        >
          Terug naar home
        </Link>
      </main>
      <Footer />
    </>
  );
}
