import { motion } from 'motion/react';
import type { Project } from '../data/projects';
import type { Lang } from '../context/LanguageContext';
import { useLanguage } from '../context/LanguageContext';
import SmartImage from './SmartImage';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const l = lang as Lang;

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col"
    >
      <button
        onClick={() => onViewDetails(project)}
        className="block aspect-[4/3] w-full overflow-hidden rounded-md bg-surface"
        tabIndex={-1}
        aria-hidden="true"
      >
        <SmartImage
          src={project.image}
          alt={project.title[l]}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          fallback={
            <div className="flex h-full w-full items-center justify-center text-sm text-faint">
              {project.category}
            </div>
          }
        />
      </button>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-sm text-faint">{project.category}</p>
        <h3 className="mt-1.5 font-serif text-2xl leading-snug tracking-tight text-ink">
          {project.title[l]}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description[l]}</p>
        <p className="mt-4 text-sm text-faint">
          {project.technologies.slice(0, 4).join(', ')}
          {project.technologies.length > 4 && ` +${project.technologies.length - 4}`}
        </p>
        <button
          onClick={() => onViewDetails(project)}
          className="mt-5 self-start text-sm text-ink underline decoration-line decoration-1 underline-offset-[6px] transition-colors duration-200 hover:decoration-accent"
          id={`project-${project.id}-details`}
        >
          {t.projects.viewDetails}
        </button>
      </div>
    </motion.article>
  );
}
