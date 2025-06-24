import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DayTabs from "@/components/DayTabs";
import ActivityCard from "@/components/ActivityCard";
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";
import { staticActivities } from "@/data/staticData";

export default function StaticHome() {
  const [selectedDay, setSelectedDay] = useState(1);

  // Filter activities based on selected day only
  const filteredActivities = staticActivities.filter(activity => activity.day === selectedDay);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DayTabs selectedDay={selectedDay} onDayChange={setSelectedDay} />
        
        <div id="actividades">
          <div className="space-y-6">
            {filteredActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </main>

      <InfoCards />
      <Footer />
    </div>
  );
}