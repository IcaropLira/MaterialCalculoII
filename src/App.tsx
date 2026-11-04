import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { TopicExercises, TopicTheory } from './pages/TopicPage';
import { ListaSolutions, ListaStatement } from './pages/ListaPage';
import ProvaPage from './pages/ProvaPage';
import NotFound from './pages/NotFound';

/** Rola até o #âncora ao navegar (ou volta ao topo). */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topicos/:slug" element={<TopicTheory />} />
        <Route path="/topicos/:slug/exercicios" element={<TopicExercises />} />
        <Route path="/listas/:slug" element={<ListaStatement />} />
        <Route path="/listas/:slug/resolucoes" element={<ListaSolutions />} />
        <Route path="/provas/:slug" element={<ProvaPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
