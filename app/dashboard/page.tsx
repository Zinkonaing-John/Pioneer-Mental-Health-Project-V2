"use client";

import Sidebar from "../components/Sidebar";
import WeeklyActivities from "../components/WeeklyActivities";
import MoodLog from "../components/MoodLog";
import MoodHistory from "../components/MoodHistory";
import TherapyOverview from "../components/TherapyOverview";
import { useState } from "react";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  return (
    <div className="flex min-h-screen bg-[#e6f7f9] text-gray-800">
      <Sidebar activePage={activePage} />

      <main className="flex-1 p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Welcome Back Htoi Bu!</h1>
          <p className="text-sm text-gray-500">Progress, not perfection</p>
        </div>

        <WeeklyActivities />
        <MoodLog />
        <MoodHistory />
        <TherapyOverview />
      </main>
    </div>
  );
}
