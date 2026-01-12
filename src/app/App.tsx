import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { CoreServices } from './components/CoreServices';
import { HowWeWork } from './components/HowWeWork';
import { WhyDatawave } from './components/WhyDatawave';
import { Leadership } from './components/Leadership';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatWeDo />
      <CoreServices />
      <HowWeWork />
      <WhyDatawave />
      <Leadership />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
}
