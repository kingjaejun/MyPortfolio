import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import '../App.css';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ProjectSection />
            <ContactBanner />
            <Footer />
        </div>
    )
}

