import About from "@/components/About";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Numbers from "@/components/Numbers";
import Cases from "@/components/Cases";
import OnDemand from "@/components/OnDemand";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Numbers />
      <OnDemand />
      <Cases />
      <ContactForm />
      <Footer />
    </>
  );
}
