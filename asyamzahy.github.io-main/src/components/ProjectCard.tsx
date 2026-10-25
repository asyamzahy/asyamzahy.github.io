import { motion } from 'motion/react';
import type { Project } from '../data/projects';
import { getYoutubeId } from '../data/projects';
import type { Lang } from '../context/LanguageContext';
import { useLanguage } from '../context/LanguageContext';
import SmartImage from './SmartImage';
import VideoThumb from './VideoThumb';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const linkClass =
  'text-sm text-ink underline decoration-line decoration-1 underline-offset-[6px] transition-colors duration-200 hover:decoration-accent';

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const l = lang as Lang;
  const videoId = getYoutubeId(project.videoUrl);

  const placeholder = (
    <div className="flex aspect-video w-full items-center justify-center bg-surface text-sm text-faint">
      {project.category}
    </div>
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col transition-[translate] duration-300 ease-out hover:-translate-y-1"
    >
      <div className="overflow-hidden rounded-md">
        {videoId ? (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.projects.watchVideo}: ${project.title[l]}`}
            className="block"
          >
            <VideoThumb videoId={videoId} alt={project.title[l]} />
          </a>
        ) : (
          <button
            onClick={() => onViewDetails(project)}
            className="block aspect-video w-full overflow-hidden bg-surface"
            tabIndex={-1}
            aria-hidden="true"
          >
            <SmartImage
              src={project.image}
              alt={project.title[l]}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              fallback={placeholder}
            />
          </button>
        )}
      </div>

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
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          <button onClick={() => onViewDetails(project)} className={linkClass} id={`project-${project.id}-details`}>
            {t.projects.viewDetails}
          </button>
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              id={`project-${project.id}-video`}
            >
              {t.projects.watchVideo}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
