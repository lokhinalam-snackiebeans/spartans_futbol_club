import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamInfo from './components/TeamInfo';
import Community from './components/Community';
import MatchInfo from './components/MatchInfo';
import Leagues from './components/Leagues';
import Programs from './components/Programs';
import Training from './components/Training';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import NationalChampionship from './pages/NationalChampionship';
import YouthAcademy from './pages/YouthAcademy';
import StateCompetition from './pages/StateCompetition';
import RegionalCompetition from './pages/RegionalCompetition';
import NationalCompetition from './pages/NationalCompetition';
import Media from './pages/Media';
import About from './pages/About';
import Sponsor from './pages/Sponsor';
import ContactUs from './pages/ContactUs';
import Placements from './pages/Placements';
import UsysE64 from './pages/UsysE64';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/nationalchampionship') {
      setCurrentPage('national-championship');
    } else if (path === '/youthacademy') {
      setCurrentPage('youth-academy');
    } else if (path === '/statecompetition') {
      setCurrentPage('state-competition');
    } else if (path === '/regionalcompetition') {
      setCurrentPage('regional-competition');
    } else if (path === '/nationalcompetition') {
      setCurrentPage('national-competition');
    } else if (path === '/media') {
      setCurrentPage('media');
    } else if (path === '/about') {
      setCurrentPage('about');
    } else if (path === '/sponsor') {
      setCurrentPage('sponsor');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/placements') {
      setCurrentPage('placements');
    } else if (path === '/usys-e64') {
      setCurrentPage('usys-e64');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const handleNavigate = (page: string) => {
    const routes: { [key: string]: string } = {
      'national-championship': '/nationalchampionship',
      'youth-academy': '/youthacademy',
      'state-competition': '/statecompetition',
      'regional-competition': '/regionalcompetition',
      'national-competition': '/nationalcompetition',
      'media': '/media',
      'about': '/about',
      'sponsor': '/sponsor',
      'contact': '/contact',
      'placements': '/placements',
      'usys-e64': '/usys-e64',
      'home': '/'
    };
    
    const url = routes[page] || '/';
    window.history.pushState({}, '', url);
    
    if (page === 'state-competition') {
      setCurrentPage('state-competition');
    } else if (page === 'regionalcompetition') {
      setCurrentPage('regional-competition');
    } else if (page === 'nationalcompetition') {
      setCurrentPage('national-competition');
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Leagues />
          <Programs />
          <Training />
          <Sponsors />
          <Footer />
        </>
      ) : currentPage === 'national-championship' ? (
        <>
          <NationalChampionship onNavigate={handleNavigate} />
          <Footer />
        </>
      ) : currentPage === 'youth-academy' ? (
        <>
          <YouthAcademy />
          <Footer />
        </>
      ) : currentPage === 'state-competition' ? (
        <>
          <StateCompetition />
          <Footer />
        </>
      ) : currentPage === 'regional-competition' ? (
        <>
          <RegionalCompetition />
          <Footer />
        </>
      ) : currentPage === 'national-competition' ? (
        <>
          <NationalCompetition />
          <Footer />
        </>
      ) : currentPage === 'media' ? (
        <>
          <Media />
          <Footer />
        </>
      ) : currentPage === 'about' ? (
        <>
          <About />
          <Footer />
        </>
      ) : currentPage === 'sponsor' ? (
        <>
          <Sponsor />
          <Footer />
        </>
      ) : currentPage === 'contact' ? (
        <>
          <ContactUs />
          <Footer />
        </>
      ) : currentPage === 'placements' ? (
        <>
          <Placements />
          <Footer />
        </>
      ) : currentPage === 'usys-e64' ? (
        <>
          <UsysE64 />
          <Footer />
        </>
      ) : null}
    </div>
  );
}
