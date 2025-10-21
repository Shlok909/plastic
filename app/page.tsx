import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import ImpactStats from '@/components/ImpactStats';
import SustainabilityForm from '@/components/SustainabilityForm';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <ProductShowcase />
      <ImpactStats />
      <SustainabilityForm />
      <ContactForm />
      <Footer />
    </main>
  );
}
