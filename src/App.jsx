import React from 'react';

// Вспомогательный компонент для иконок, чтобы не дублировать код
const IconLink = ({ href, ariaLabel, children }) => (
  <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

function App() {
  // CSS для анимаций и кастомных эффектов.
  const styles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    .animate-delay-1 { animation-delay: 0.1s; }
    .animate-delay-2 { animation-delay: 0.2s; }
    .animate-delay-3 { animation-delay: 0.3s; }
    .animate-delay-4 { animation-delay: 0.4s; }

    .radial-gradient-bg {
      background-image: radial-gradient(circle at top, #1e293b, #0f172a, #020617);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="radial-gradient-bg min-h-screen font-sans text-gray-300 antialiased">
        <main className="container mx-auto max-w-5xl px-6 py-12 md:py-20">

          {/* --- Секция Hero --- */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 md:mb-28">
            <div className="relative animate-fadeInUp animate-delay-1">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 ring-4 ring-slate-700/50 flex items-center justify-center">
                {/* ЗАМЕНИ ССЫЛКУ НА СВОЕ ФОТО */}
                <img 
                  src="https://www.gravatar.com/avatar/?d=mp" 
                  alt="Alimkhan Slambek" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white border-4 border-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M9.5 2.5a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V3.25a.75.75 0 01.75-.75zM5.336 7.632a.75.75 0 01.23-1.042l3.25-1.75a.75.75 0 011.042.23l3.25 5.5a.75.75 0 01-1.272.75L12 10.03v2.72a.75.75 0 01-1.5 0V9.53l-2.022 1.082a.75.75 0 01-1.042-.23l-1.6-2.75z" clipRule="evenodd" /></svg>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white animate-fadeInUp animate-delay-2">Alimkhan Slambek</h1>
              <p className="mt-2 text-xl lg:text-2xl text-sky-400 animate-fadeInUp animate-delay-3">Fullstack Developer</p>
              <p className="mt-4 max-w-xl text-lg text-slate-400 animate-fadeInUp animate-delay-4">
                Создаю production-ready продукты, фокусируясь на масштабируемости, качестве и реальном пользовательском опыте.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-5 animate-fadeInUp animate-delay-4">
                <IconLink href="#" ariaLabel="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                </IconLink>
                <IconLink href="#" ariaLabel="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </IconLink>
                <IconLink href="#" ariaLabel="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                </IconLink>
              </div>
            </div>
          </section>

          {/* --- Секция Проекты --- */}
          <section className="animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Ключевые проекты</h2>
            <div className="space-y-12">

              {/* Project Card 1 */}
              <div className="group grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d1469c13?q=80&w=800&auto=format&fit=crop" alt="savoa.kz" className="w-full h-full object-cover"/>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-white">Co-Founder & Fullstack Developer @ savoa.kz</h3>
                  <p className="mt-2 text-slate-400">
                    Разработал с нуля и запустил за 2 месяца production-ready платформу для мероприятий, включая сайт, админ-панель, QR-систему регистрации и интеграцию платежей.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-slate-800 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">Next.js</span>
                    <span className="bg-slate-800 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">Node.js</span>
                    <span className="bg-slate-800 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">Supabase</span>
                    <span className="bg-slate-800 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
                  </div>
                   <div className="mt-6 flex items-center space-x-4">
                      <a href="#" className="font-semibold text-white bg-sky-600 hover:bg-sky-500 px-5 py-2.5 rounded-lg transition-colors duration-300 flex items-center gap-2">
                         <span>Live Demo</span>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                      </a>
                   </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                 <div className="md:col-span-3 md:order-2">
                  <h3 className="text-xl font-bold text-white">Freelance Full Stack Engineer</h3>
                  <p className="mt-2 text-slate-400">
                    Создавал производительные веб-сайты и дашборды для клиентов. Основной фокус — на отзывчивом дизайне, производительности и чистом UI/UX.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-slate-800 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">React</span>
                    <span className="bg-slate-800 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">TypeScript</span>
                    <span className="bg-slate-800 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">Node.js</span>
                    <span className="bg-slate-800 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">Python</span>
                  </div>
                  <div className="mt-6 flex items-center space-x-4">
                     <a href="#" className="font-semibold text-white bg-slate-700 hover:bg-slate-600 px-5 py-2.5 rounded-lg transition-colors duration-300 flex items-center gap-2">
                        <span>GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                     </a>
                  </div>
                </div>
                <div className="md:col-span-2 md:order-1 rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                  <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop" alt="Freelance" className="w-full h-full object-cover"/>
                </div>
              </div>

            </div>
          </section>

          {/* --- Footer --- */}
          <footer className="text-center mt-28 pt-8 border-t border-slate-800">
            <p className="text-slate-500">&copy; {new Date().getFullYear()} Alimkhan Slambek. Астана, Казахстан.</p>
          </footer>

        </main>
      </div>
    </>
  );
}

export default App;