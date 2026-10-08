'use client';

import { AlertTriangle, Users, Clock, Building2 } from 'lucide-react';

export default function RightPanel() {
  return (
    <div className="h-full bg-[#1C2128] border-l border-[#30363D] flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-[#30363D]">
        <h2 className="text-lg font-semibold text-[#F0F6FC]">Decision Center</h2>
      </div>

      {/* Baseline Metrics */}
      <div className="p-4 border-b border-[#30363D]">
        <h3 className="text-sm font-medium text-[#8B949E] mb-3 uppercase tracking-wide">Baseline Metrics</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D]">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-4 h-4 text-[#D97706]" />
              <span className="text-xs text-[#8B949E]">Risk Score</span>
            </div>
            <div className="text-2xl font-bold text-[#D97706]">74<span className="text-sm text-[#8B949E] font-normal">/100</span></div>
          </div>
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D]">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-[#C53030]" />
              <span className="text-xs text-[#8B949E]">People at Risk</span>
            </div>
            <div className="text-2xl font-bold text-[#F0F6FC]">2,481</div>
          </div>
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D]">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-[#D97706]" />
              <span className="text-xs text-[#8B949E]">Fleet Delayed</span>
            </div>
            <div className="text-2xl font-bold text-[#D97706]">2<span className="text-sm text-[#8B949E] font-normal"> Units</span></div>
          </div>
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D]">
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-[#C53030]" />
              <span className="text-xs text-[#8B949E]">Overloaded</span>
            </div>
            <div className="text-2xl font-bold text-[#C53030]">1<span className="text-sm text-[#8B949E] font-normal"> Hospital</span></div>
          </div>
        </div>
      </div>

      {/* Candidate Actions */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h3 className="text-sm font-medium text-[#8B949E] mb-3 uppercase tracking-wide">Candidate Actions</h3>
        <div className="space-y-3">
          {/* Option A */}
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D] hover:border-[#C53030] cursor-pointer transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#F0F6FC]">Option A</span>
              <span className="px-2 py-1 text-xs bg-[#C53030] text-[#F0F6FC] rounded font-semibold">RISK 78</span>
            </div>
            <div className="text-xs text-[#8B949E] mb-2">Direct arterial route to Hospital H1</div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-[#8B949E]">Travel Time:</span>
                <span className="text-[#F0F6FC]">22 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B949E]">H1 Load Change:</span>
                <span className="text-[#C53030]">+28%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B949E]">Risk Diff:</span>
                <span className="text-[#C53030]">+4</span>
              </div>
            </div>
          </div>

          {/* Option B - RECOMMENDED */}
          <div className="p-3 bg-[#161B22] rounded border-2 border-[#2E856E] cursor-pointer transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#F0F6FC]">Option B</span>
              <span className="px-2 py-1 text-xs bg-[#2E856E] text-[#F0F6FC] rounded font-semibold">RISK 34</span>
            </div>
            <div className="text-xs text-[#2E856E] mb-2 font-semibold">LOWEST RISK - RECOMMENDED</div>
            <div className="text-xs text-[#8B949E] mb-2">Perimeter bypass to Hospital H2</div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-[#8B949E]">Travel Time:</span>
                <span className="text-[#F0F6FC]">13 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B949E]">H2 Load Change:</span>
                <span className="text-[#2E856E]">+11%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B949E]">Risk Diff:</span>
                <span className="text-[#2E856E]">-40</span>
              </div>
            </div>
          </div>

          {/* Option C */}
          <div className="p-3 bg-[#161B22] rounded border border-[#30363D] hover:border-[#C53030] cursor-pointer transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#F0F6FC]">Option C</span>
              <span className="px-2 py-1 text-xs bg-[#C53030] text-[#F0F6FC] rounded font-semibold">RISK 84</span>
            </div>
            <div className="text-xs text-[#8B949E] mb-2">Hold 10 min & deploy traffic police</div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-[#8B949E]">Travel Time:</span>
                <span className="text-[#F0F6FC]">29 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B949E]">Hospital Load:</span>
                <span className="text-[#8B949E]">No change</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B949E]">Risk Diff:</span>
                <span className="text-[#C53030]">+10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
