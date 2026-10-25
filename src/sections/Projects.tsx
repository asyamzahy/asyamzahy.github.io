import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import { projects, projectCategories } from '../data/projects';
import type { Project, ProjectCategory } from '../data/projects';

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Hanya tampilkan kategori yang memang punya proyek
  const categories = projectCategories.filter((c) => projects.some((p) => p.category === c));

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="mb-12 flex flex-wrap gap-x-6 gap-y-2" role="group">
        <FilterBtn active={activeFilter === 'all'} onClick={() => setActiveFilter('all')} id="filter-all">
          {t.projects.filterAll}
        </FilterBtn>
        {categories.map((cat) => (
          <FilterBtn
            key={cat}
            active={activeFilter === cat}
            onClick={() => setActiveFilter(cat)}
            id={`filter-${cat.toLowerCase().replace('/', '-')}`}
          >
            {cat}
          </FilterBtn>
        ))}
      </div>

      <motion.div layout className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={setSelectedProject} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}

function FilterBtn({
  active,
  onClick,
  id,
  children,
}: {
  active: boolean;
  onClick: () => void;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`border-b pb-1 text-sm transition-colors duration-200 ${
        active ? 'border-ink text-ink' : 'border-transparent text-faint hover:text-ink'
      }`}
      id={id}
    >
      {children}
    </button>
  );
}
