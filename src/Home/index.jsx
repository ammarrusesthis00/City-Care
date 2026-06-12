import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Footer from "../components/Footer";
import ServicesGrid from "./ServicesGrid";
import EmergencyCall from "./EmergencyCall";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import ServiceAreas from "./ServiceAreasPreview";
import FAQ from "./FAQ";
import FinalCTA from "./ContactCTA";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <ServicesGrid />
            <EmergencyCall />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ServiceAreas />
            <FAQ />
            <FinalCTA />
            <Footer />
        </>
    )
}