import SolutionsPage from "./solutions/page";
import ProjectsPage from "./projects/page";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { About, Hero, Solutions } from "@/components/Home";


export default function Home() {
  return <div>
      <Navbar />

    <Hero />
    <About />
    <Solutions />
    
    <Footer />
  </div>;
}