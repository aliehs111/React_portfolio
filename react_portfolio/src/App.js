import './App.css';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Project from './components/Project';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    switch (currentPage) {
      case '':
        return <About />;
      case 'portfolio':
        return <Project />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  }
  const updatePage = (page) => setCurrentPage(page);
  

  return (
    <div className="App">
      <Header updatePage={updatePage}/>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
