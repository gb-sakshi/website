import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home setPage={setCurrentPage} />;
      case 'About': return <About />;
      case 'Services': return <Services />;
      case 'Contact': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      <Navbar setPage={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <footer className="bg-slate-900 py-6 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} BrandUI. All rights reserved.</p>
      </footer>
    </div>
  );
}