import AboutUs from "@/ui/Homepage/AboutUs";
import Footer from "@/ui/Homepage/Footer";
import Form from "@/ui/Homepage/Form";
import Main from "@/ui/Homepage/Main";
import Navbar from "@/ui/Homepage/Navbar";
import OurProcess from "@/ui/Homepage/OurProcess";
import Projects from "@/ui/Homepage/Projects";
import Services from "@/ui/Homepage/Services";
import Testimonials from "@/ui/Homepage/Testimonials";
import Video from "@/ui/Homepage/Video";
import WhyJayabheri from "@/ui/Homepage/WhyJayabheri";

export default function Home() {
  return (
    <main className="max-w-[1920px] w-full">
      <Video />
      <Navbar />
      <Main />
      <AboutUs />
      <Services />
      <OurProcess />
      <Testimonials />
      <Projects />
      <WhyJayabheri />
      <Form />
      <Footer />
    </main>
  );
}
