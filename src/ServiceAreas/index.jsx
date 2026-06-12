import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "./Header";
import Grid from "./LocationGrid";
import Why from "./Why";
import SEO from "./SEOParagraph";
import Map from "./Map";
import Services from "../Services/ServicesGrid";
import CTA from "./CTA";

export default function ServiceAreasPage() {
    return (
        <>
            <Navbar />
            <Header />
            <Grid />
            <Why />
            <Services />
            <Map />
            <SEO />
            <CTA />
            <Footer />
        </>
    )
}

