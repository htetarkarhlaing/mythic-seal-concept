import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UpcomingMatch from "@/components/UpcomingMatch";
import RosterSection from "@/components/RosterSection";
import NewsSection from "@/components/NewsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { HomeModals } from "@/components/HomeModals";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060a1a] text-white selection:bg-[#FFC107] selection:text-black">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <ErrorBoundary fallbackTitle="HERO ARENA UNAVAILABLE">
        <HeroSection />
      </ErrorBoundary>

      {/* 3. Upcoming Match Banner */}
      <ErrorBoundary fallbackTitle="MATCH DATA UNAVAILABLE">
        <UpcomingMatch />
      </ErrorBoundary>

      {/* 4. Roster Section */}
      <ErrorBoundary fallbackTitle="ROSTER LINEUP UNAVAILABLE">
        <RosterSection />
      </ErrorBoundary>

      {/* 5. Latest News Section */}
      <ErrorBoundary fallbackTitle="NEWS DISPATCHES UNAVAILABLE">
        <NewsSection />
      </ErrorBoundary>

      {/* 6. Partners Section */}
      <ErrorBoundary fallbackTitle="PARTNERS UNAVAILABLE">
        <PartnersSection />
      </ErrorBoundary>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Client Modals Island */}
      <HomeModals />
    </main>
  );
}
