import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import type { Project } from '../data/projects';
import { getYoutubeId } from '../data/projects';
import type { Lang } from '../context/LanguageContext';
import { useLanguage } from '../context/LanguageContext';
import SmartImage from './SmartImage';
import VideoThumb from './VideoThumb';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { lang, t } = useLanguage();
  const l = lang as Lang;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/40 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title[l]}
          id="project-detail-modal"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="relative my-6 w-full max-w-2xl rounded-lg bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 px-6 pb-6 pt-8 sm:px-10 sm:pt-10">
              <div>
                <p className="text-sm text-faint">{project.category}</p>
                <h2 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                  {project.title[l]}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="-mr-2 -mt-1 shrink-0 p-2 text-faint transition-colors hover:text-ink"
                aria-label={t.projects.close}
                id="project-detail-close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {getYoutubeId(project.videoUrl) ? (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.projects.watchVideo}: ${project.title[l]}`}
                className="group block"
              >
                <VideoThumb videoId={getYoutubeId(project.videoUrl)!} alt={project.title[l]} />
              </a>
            ) : (
              <SmartImage
                src={project.image}
                alt={project.title[l]}
                className="aspect-[16/9] w-full object-cover"
              />
            )}

            <div className="space-y-8 px-6 py-8 sm:px-10 sm:py-10">
              <Block title={t.projects.overview}>{project.overview[l]}</Block>
              <Block title={t.projects.problem}>{project.problem[l]}</Block>
              <Block title={t.projects.solution}>{project.solution[l]}</Block>
              <Block title={t.projects.contribution}>{project.contribution[l]}</Block>
              <Block title={t.projects.implementation}>{project.implementation[l]}</Block>
              <Block title={t.projects.techUsed}>{project.technologies.join(', ')}</Block>
              <Block title={t.projects.status}>{project.status[l]}</Block>
            </div>

            {(project.githubUrl || project.liveUrl || project.videoUrl) && (
              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line px-6 py-6 sm:px-10">
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink underline decoration-line underline-offset-[6px] hover:decoration-accent"
                  >
                    {t.projects.watchVideo}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink underline decoration-line underline-offset-[6px] hover:decoration-accent"
                  >
                    {t.projects.github}
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink underline decoration-line underline-offset-[6px] hover:decoration-accent"
                  >
                    {t.projects.liveDemo}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <h3 className="text-sm text-faint">{title}</h3>
      <p className="leading-relaxed text-muted">{children}</p>
    </div>
  );
}
