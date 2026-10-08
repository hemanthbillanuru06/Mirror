'use client';

import { useEffect, useState } from 'react';
import { Clock, Shield, Truck, Radar } from 'lucide-react';
import LeftPanel from './components/panels/LeftPanel';
import RightPanel from './components/panels/RightPanel';
import MapContainer from './components/map/MapContainer';

export default function Home() {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().split(' ')[4]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#11141A] flex flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="h-12 bg-[#161B22] border-b border-[#30363D] flex items-center justify-between px-5 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Radar className="w-5 h-5 text-[#2E856E]" />
            <h1 className="text-base font-bold text-[#F0F6FC] tracking-wide">MIRROR</h1>
          </div>
          <div className="h-4 w-px bg-[#30363D]"></div>
          <span className="text-xs text-[#8B949E]">Emergency Response Decision Twin</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8B949E]" />
            <span className="text-sm text-[#F0F6FC] font-mono">{utcTime} UTC</span>
          </div>
          <div className="h-4 w-px bg-[#30363D]"></div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#2E856E]" />
            <span className="text-sm text-[#F0F6FC]">Active: 3</span>
          </div>
          <div className="h-4 w-px bg-[#30363D]"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#D97706]" />
            <span className="text-sm text-[#D97706] font-semibold">THREAT: HIGH</span>
          </div>
        </div>
      </div>

      {/* Main Content - 3 Panel Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - 20% */}
        <div className="w-[20%] min-w-[280px] max-w-[320px] shrink-0">
          <LeftPanel />
        </div>

        {/* Center Panel - 55% */}
        <div className="flex-1 min-w-0 flex flex-col">
          <MapContainer />
        </div>

        {/* Right Panel - 25% */}
        <div className="w-[25%] min-w-[320px] max-w-[400px] shrink-0">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
