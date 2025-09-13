'use client';

import { StreamerGrid } from "@/app/(dashboard)/streamers/components/streamer-grid"
import { StreamerFilters } from "@/app/(dashboard)/streamers/components/streamer-filters"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { AddStreamer } from "./components/add-streamer"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StreamersPage() {
  const [showAddStreamer, setShowAddStreamer] = useState(false);
  const handleAddStreamer = () => {
    setShowAddStreamer(!showAddStreamer);
  };
  const closeAddStreamer = () => {
    setShowAddStreamer(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar label="Streamers" />
      <main className="ml-64 mt-20 p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex w-full justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Streamers</h1>
                <p className="text-muted-foreground mt-1">Manage and monitor all streamers on your platform</p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer" onClick={handleAddStreamer}>
                Add Streamer
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {showAddStreamer && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <AddStreamer cancelFunction={closeAddStreamer} />
              </motion.div>
            )}
          </AnimatePresence>
          <StreamerFilters />
          <StreamerGrid />
        </div>
      </main>
    </div>
  )
}