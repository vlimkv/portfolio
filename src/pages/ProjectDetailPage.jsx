import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const pageVariants = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }, exit: { opacity: 0, y: -20, transition: { duration: 0.5 } } };

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const { t } = useTranslation();
  const project = t(`project_pages.${projectId}`, { returnObjects: true });
  const images = [ '/savoa.png', 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800' ];

  if (!project || typeof project !== 'object') return <div>Проект не найден</div>;

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-24 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="text-sky-400 hover:text-sky-300 mb-12 inline-block">&larr; {t('project_pages.back_link')}</Link>
        <h1 className="text-5xl font-extrabold text-white mb-4">{project.title}</h1>
        <p className="text-xl text-slate-400 mb-12">{project.full_description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {images.map((img, i) => <img key={i} src={img} alt="" className="rounded-xl w-full h-auto object-cover" />)}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">{t('project_pages.tech_title')}</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map(tech => <span key={tech} className="bg-slate-800 text-sky-300 font-medium px-4 py-1.5 rounded-full">{tech}</span>)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}