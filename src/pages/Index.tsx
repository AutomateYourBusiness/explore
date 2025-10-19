import { useState } from "react";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { CoreSystems } from "@/components/CoreSystems";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Hero onBookAudit={() => setBookingModalOpen(true)} />
      <WhyChoose />
      <CoreSystems />
      <HowItWorks />
      <About />
      <Testimonials />
      <CallToAction onBookAudit={() => setBookingModalOpen(true)} />
      <Footer />
      <FloatingCTA onClick={() => setBookingModalOpen(true)} />
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </div>
  );
};

export default Index;
