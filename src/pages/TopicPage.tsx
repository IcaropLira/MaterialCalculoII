import { useParams } from 'react-router-dom';
import DocPage from './DocPage';
import ExercisesPage from './ExercisesPage';
import NotFound from './NotFound';
import { getTopic } from '../lib/content';

export function TopicTheory() {
  const t = getTopic(useParams().slug);
  if (!t || t.status !== 'available') return <NotFound />;
  return (
    <DocPage
      doc={t.theory}
      active="/#topicos"
      sub={`Guia de estudo — ${t.title.toLowerCase()}`}
      foot="Parte da série de tópicos de Cálculo II."
      back={{ to: '/#topicos', label: 'voltar para tópicos' }}
      actions={t.exercises ? [{ label: `${t.exerciseCount} exercícios`, to: `/topicos/${t.slug}/exercicios`, primary: true }] : undefined}
      related={{ title: t.title, links: t.exercises ? [{ label: 'Exercícios', to: `/topicos/${t.slug}/exercicios` }] : [] }}
    />
  );
}

export function TopicExercises() {
  const t = getTopic(useParams().slug);
  if (!t || !t.exercises || t.status !== 'available') return <NotFound />;
  return <ExercisesPage topic={t} />;
}
