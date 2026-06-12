import Navbar from "../components/Navbar";
import Intro from "./Intro";
import Who from "./Who";
import Experience from "./Experience";
import Mission from "./Mission";
import CTA from "./CTA";
import Team from "./Team";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <Intro />
            <Who />
            <Mission />
            <Team />
            <Experience />
            <CTA />
            <Footer />
        </>
    )
}