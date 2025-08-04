import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500">
          &copy; {new Date().getFullYear()} Алимхан Сламбек. Все права защищены.
        </p>
      </div>
    </footer>
  );
}