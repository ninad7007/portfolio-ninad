"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, CheckCircle, Clock, Server } from "lucide-react";

interface SystemStatus {
  name: string;
  status: "operational" | "degraded" | "down";
  latency: number;
  uptime: string;
}

export default function SystemHealth() {
  const [systems, setSystems] = useState<SystemStatus[]>([
    { name: "Portfolio API", status: "operational", latency: 42, uptime: "99.99%" },
    { name: "GitHub Repos", status: "operational", latency: 156, uptime: "99.95%" },
    { name: "LinkedIn Feed", status: "operational", latency: 203, uptime: "99.90%" },
  ]);

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Update time
    const updateTime = () => {
      setCurrentTime(new Date().toISOString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Simulate slight latency variations
    const latencyInterval = setInterval(() => {
      setSystems((prev) =>
        prev.map((system) => ({
          ...system,
          latency: system.latency + Math.floor(Math.random() * 20) - 10,
        }))
      );
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(latencyInterval);
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "#00ff88";
      case "degraded":
        return "#ffd93d";
      case "down":
        return "#ff6b6b";
      default:
        return "#888";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-6 right-6 z-40 hidden lg:block"
    >
      <div className="p-4 bg-[#111]/95 backdrop-blur-sm border border-[#222] rounded-xl shadow-2xl w-72">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-[#00ff88]" />
            <span className="text-sm font-mono font-bold">System Health</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#888]">
            <Clock size={12} />
            <span className="font-mono">
              {currentTime.split("T")[1]?.split(".")[0] || "00:00:00"}
            </span>
          </div>
        </div>

        {/* Systems */}
        <div className="space-y-3">
          {systems.map((system, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-[#0a0a0a] rounded-lg"
            >
              <div className="flex items-center gap-2">
                <Server size={14} className="text-[#888]" />
                <span className="text-xs font-medium">{system.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#888] font-mono">
                  {Math.max(10, system.latency)}ms
                </span>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: getStatusColor(system.status) }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Overall Status */}
        <div className="mt-4 pt-4 border-t border-[#222]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#00ff88]" />
              <span className="text-xs text-[#888]">All Systems Operational</span>
            </div>
            <span className="text-xs text-[#00ff88] font-mono font-bold">
              99.9% SLA
            </span>
          </div>
        </div>

        {/* Engineer Badge */}
        <div className="mt-3 text-center">
          <span className="text-[10px] text-[#666] font-mono">
            Built with engineering excellence
          </span>
        </div>
      </div>
    </motion.div>
  );
}
