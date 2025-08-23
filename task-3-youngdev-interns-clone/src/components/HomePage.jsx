import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyJoinSection from './WhyJoinSection ';
import WhatsIncludedSection from '../components/WhatsIncludedSection';
import FaqSection from '../components/FaqSection';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="why-join">
          <WhyJoinSection />
        </div>
        <div id="whats-included">
          <WhatsIncludedSection />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
      </main>
      
    </div>
  );
};

export default HomePage;