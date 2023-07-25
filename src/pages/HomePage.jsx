import { Fragment } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ArticlesSection from "../components/ArticlesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
