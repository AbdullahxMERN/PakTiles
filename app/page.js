import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionSection from "@/components/CollectionSection";
import LocationMapSection from "@/components/LocationMapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f5f3] text-[#111827]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CollectionSection />
        <LocationMapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
