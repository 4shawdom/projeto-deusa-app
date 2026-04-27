import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { IdentificationSection } from "@/components/landing/IdentificationSection";
import { EnemySection } from "@/components/landing/EnemySection";
import { BigIdeaSection } from "@/components/landing/BigIdeaSection";
import { ProductIntroSection } from "@/components/landing/ProductIntroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { BeforeAfterSection } from "@/components/landing/BeforeAfterSection";
import { TransformationTimelineSection } from "@/components/landing/TransformationTimelineSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { FutureVisionSection } from "@/components/landing/FutureVisionSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("error=")) {
      navigate("/login" + hash, { replace: true });
      return;
    }
    if (hash.includes("type=invite") && user) {
      navigate("/app/perfil", { replace: true });
      return;
    }
    if (!loading && user) navigate("/app/dashboard", { replace: true });
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <IdentificationSection />
      <EnemySection />
      <BigIdeaSection />
      <ProductIntroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <TransformationTimelineSection />
      <OfferSection />
      <FutureVisionSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
