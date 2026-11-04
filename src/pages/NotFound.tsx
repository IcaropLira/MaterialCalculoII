import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';

export default function NotFound() {
  return (
    <PageShell title="Página não encontrada">
      <main>
        <div className="empty-state">
          <h1 style={{ fontSize: 48, marginBottom: 12 }}>404</h1>
          <p style={{ margin: '0 auto 24px' }}>Essa página não existe (ou o conteúdo ainda está “em breve”).</p>
          <Link className="btn-primary" to="/">Voltar ao início</Link>
        </div>
      </main>
    </PageShell>
  );
}
