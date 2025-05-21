import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Resources from "./components/Resources";
import CommunitySupport from "./components/CommunitySupport";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Resources />
      <CommunitySupport />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}
