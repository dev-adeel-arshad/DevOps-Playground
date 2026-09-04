import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LearningJourney from './components/LearningJourney';
import CurrentMission from './components/CurrentMission';
import ArchitectureVisualization from './components/ArchitectureVisualization';
import TechnologyStack from './components/TechnologyStack';
import DevOpsTimeline from './components/DevOpsTimeline';
import ProjectStatistics from './components/ProjectStatistics';
import RepositoryHighlights from './components/RepositoryHighlights';
import FutureRoadmap from './components/FutureRoadmap';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <HeroSection />
      <AboutSection />
      <LearningJourney />
      <CurrentMission />
      <ArchitectureVisualization />
      <TechnologyStack />
      <DevOpsTimeline />
      <ProjectStatistics />
      <RepositoryHighlights />
      <FutureRoadmap />
      <Footer />
    </main>
  );
}

export default App;