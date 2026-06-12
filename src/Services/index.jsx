import Navbar from "../components/Navbar";
import PageHeader from "./PageHeader";
import ServicesGrid from "./ServicesGrid";
import EmergencyBlock from "./EmergencyBlock";
import WhyMatters from "./WhyMatters";
import FAQ from "./FAQs";
import CTA from "./CTA";
import Footer from "../components/Footer";

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <PageHeader />
            <ServicesGrid />
            <EmergencyBlock />
            {/* Individual services page */}
            <WhyMatters />
            <FAQ />
            <CTA />
            <Footer />
        </>
    )
}