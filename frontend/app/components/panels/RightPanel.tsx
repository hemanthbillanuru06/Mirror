'use client';

import { AlertTriangle, Users, Clock, Building2, Shield } from 'lucide-react';

export default function RightPanel() {
  return (
    <div className="h-full bg-[#1C2128] border-l border-[#30363D] flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#30363D] bg-[#161B22]">
        <h2 className="text-sm font-semibold text-[#F0F6FC] tracking-tight">DECISION CENTER</h2>
      </div>

      {/* Baseline Metrics */}
      <div className="p-4 border-b border-[#30363D]">
        <h3 className="text-xs font-medium text-[#8B949E] mb-3 uppercase tracking-wider">Baseline Metrics</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D]">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="text-xs text-[#8B949E]">Risk Score</span>
            </div>
            <div className="text-xl font-bold text-[#D97706]">74<span className="text-xs text-[#8B949E] font-normal ml-1">/100</span></div>
          </div>
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D]">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-3.5 h-3.5 text-[#C53030]" />
              <span className="text-xs text-[#8B949E]">At Risk</span>
            </div>
            <div className="text-xl font-bold text-[#F0F6FC]">2,481</div>
          </div>
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D]">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="text-xs text-[#8B949E]">Delayed</span>
            </div>
            <div className="text-xl font-bold text-[#D97706]">2<span className="text-xs text-[#8B949E] font-normal ml-1">Units</span></div>
          </div>
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D]">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-3.5 h-3.5 text-[#C53030]" />
              <span className="text-xs text-[#8B949E]">Overload</span>
            </div>
            <div className="text-xl font-bold text-[#C53030]">1<span className="text-xs text-[#8B949E] font-normal ml-1">Hospital</span></div>
          </div>
        </div>
      </div>

      {/* Candidate Actions */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-xs font-medium text-[#8B949E] mb-3 uppercase tracking-wider">Dispatch Options</h3>
        <div className="space-y-3">
          {/* Option A */}
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D] hover:border-[#C53030] cursor-pointer transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#F0F6FC]">Option A</span>
              <span className="px-2 py-0.5 text-xs bg-[#C53030]/20 text-[#C53030] rounded font-semibold">RISK 78</span>
            </div>
            <div className="text-xs text-[#8B949E] mb-3">Direct arterial route to Hospital H1</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <div className="text-[#8B949E] mb-0.5">Time</div>
                <div className="text-[#F0F6FC] font-medium">22 min</div>
              </div>
              <div>
                <div className="text-[#8B949E] mb-0.5">H1 Load</div>
                <div className="text-[#C53030] font-medium">+28%</div>
              </div>
              <div>
                <div className="text-[#8B949E] mb-0.5">Risk Δ</div>
                <div className="text-[#C53030] font-medium">+4</div>
              </div>
            </div>
          </div>

          {/* Option B - RECOMMENDED */}
          <div className="p-3 bg-[#161B22] rounded border-2 border-[#2E856E] cursor-pointer relative">
            <div className="absolute -top-2 right-2">
              <span className="px-2 py-0.5 text-xs bg-[#2E856E] text-[#F0F6FC] rounded font-semibold flex items-center gap-1">
                <Shield className="w-3 h-3" />
                RECOMMENDED
              </span>
            </div>
            <div className="flex items-center justify-between mb-2 mt-1">
              <span className="text-sm font-semibold text-[#F0F6FC]">Option B</span>
              <span className="px-2 py-0.5 text-xs bg-[#2E856E]/20 text-[#2E856E] rounded font-semibold">RISK 34</span>
            </div>
            <div className="text-xs text-[#2E856E] mb-3 font-semibold">Lowest projected risk</div>
            <div className="text-xs text-[#8B949E] mb-3">Perimeter bypass to Hospital H2</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <div className="text-[#8B949E] mb-0.5">Time</div>
                <div className="text-[#F0F6FC] font-medium">13 min</div>
              </div>
              <div>
                <div className="text-[#8B949E] mb-0.5">H2 Load</div>
                <div className="text-[#2E856E] font-medium">+11%</div>
              </div>
              <div>
                <div className="text-[#8B949E] mb-0.5">Risk Δ</div>
                <div className="text-[#2E856E] font-medium">-40</div>
              </div>
            </div>
          </div>

          {/* Option C */}
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D] hover:border-[#C53030] cursor-pointer transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#F0F6FC]">Option C</span>
              <span className="px-2 py-0.5 text-xs bg-[#C53030]/20 text-[#C53030] rounded font-semibold">RISK 84</span>
            </div>
            <div className="text-xs text-[#8B949E] mb-3">Hold 10 min & deploy traffic police</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <div className="text-[#8B949E] mb-0.5">Time</div>
                <div className="text-[#F0F6FC] font-medium">29 min</div>
              </div>
              <div>
                <div className="text-[#8B949E] mb-0.5">Hospital</div>
                <div className="text-[#8B949E] font-medium">No change</div>
              </div>
              <div>
                <div className="text-[#8B949E] mb-0.5">Risk Δ</div>
                <div className="text-[#C53030] font-medium">+10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
