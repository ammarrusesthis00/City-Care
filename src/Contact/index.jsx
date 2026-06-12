import Footer from "../components/Footer";
import Hero from "./Header";
import Methods from "./ContactMethods";
import Form  from "./ContactForm";
import Map from "./Map";
import Emergency from "./EmergencyBox";
import CTA from "../Home/ContactCTA";
import Navbar from "../components/Navbar";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Methods />
            <Emergency />
            <Form />
            <Map />
            <CTA />
            <Footer />
        </>
    )
}