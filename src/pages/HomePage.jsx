import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const pageVariants = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.5 } }, exit: { opacity: 0, transition: { duration: 0.5 } } };
const itemVariants = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="min-h-screen flex items-center px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={{ animate: { transition: { staggerChildren: 0.1 } } }} initial="initial" animate="animate" className="text-center">
            <motion.p variants={itemVariants} className="text-xl text-sky-400">{t('hero.greeting')}</motion.p>
            <motion.h1 variants={itemVariants} className="mt-3 text-5xl md:text-7xl font-extrabold tracking-tight text-white">{t('hero.name')}</motion.h1>
            <motion.h2 variants={itemVariants} className="mt-4 text-3xl md:text-5xl font-bold text-slate-400">{t('hero.title')}</motion.h2>
            <motion.p variants={itemVariants} className="mt-8 text-lg text-slate-400 max-w-3xl mx-auto">{t('hero.subtitle')}</motion.p>
          </motion.div>
        </div>
      </section>
      
      <section id="projects" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">{t('projects.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/project/savoa"><div className="h-full rounded-2xl bg-slate-800/50 p-8 backdrop-blur-lg ring-1 ring-white/10 hover:ring-sky-400 transition-all"><h3 className="text-2xl font-bold text-white">{t('project_pages.savoa.title')}</h3><p className="mt-4 text-slate-400">{t('project_pages.savoa.description')}</p><div className="mt-6 font-semibold text-sky-400">{t('projects.details_cta')}</div></div></Link>
            <Link to="/project/freelance"><div className="h-full rounded-2xl bg-slate-800/50 p-8 backdrop-blur-lg ring-1 ring-white/10 hover:ring-sky-400 transition-all"><h3 className="text-2xl font-bold text-white">{t('project_pages.freelance.title')}</h3><p className="mt-4 text-slate-400">{t('project_pages.freelance.description')}</p><div className="mt-6 font-semibold text-sky-400">{t('projects.details_cta')}</div></div></Link>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white">{t('contact.title')}</h2>
          <p className="mt-5 text-lg text-slate-400">{t('contact.subtitle')}</p>
          <div className="mt-10 flex justify-center space-x-8">
            <a href="https://github.com/vlimkv" aria-label="GitHub" className="text-slate-400 hover:text-sky-400 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/alimkhan-slambek-903412332/" aria-label="LinkedIn" className="text-slate-400 hover:text-sky-400 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center px-6 py-12">
        <p className="text-slate-500">{t('footer.copyright')}</p>
      </footer>
    </motion.div>
  );
}