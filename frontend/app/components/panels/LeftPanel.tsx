'use client';

import { Activity, Ambulance, Truck, Building2, AlertTriangle } from 'lucide-react';

export default function LeftPanel() {
  return (
    <div className="h-full bg-[#1C2128] border-r border-[#30363D] flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#30363D] bg-[#161B22]">
        <h2 className="text-sm font-semibold text-[#F0F6FC] tracking-tight">INCIDENT & FLEET</h2>
      </div>

      {/* Active Incidents */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-3 border-b border-[#30363D]">
          <h3 className="text-xs font-medium text-[#8B949E] mb-3 uppercase tracking-wider">Active Incidents</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3 p-3 bg-[#161B22] rounded border border-[#30363D] hover:border-[#C53030] transition-colors">
              <div className="mt-0.5">
                <Activity className="w-4 h-4 text-[#C53030]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[#F0F6FC] truncate">Sector 04 Fire</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-[#C53030] font-semibold">CRITICAL</span>
                  <span className="text-xs text-[#8B949E]">Fire tenders + triage required</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#161B22] rounded border border-[#30363D] hover:border-[#1D4E89] transition-colors">
              <div className="mt-0.5">
                <Activity className="w-4 h-4 text-[#1D4E89]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[#F0F6FC] truncate">Sector 07 Flood</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-[#D97706] font-semibold">HIGH</span>
                  <span className="text-xs text-[#8B949E]">Arterial roads blocked</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#161B22] rounded border border-[#30363D] hover:border-[#D97706] transition-colors">
              <div className="mt-0.5">
                <Activity className="w-4 h-4 text-[#D97706]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[#F0F6FC] truncate">Sector 09 Gridlock</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-[#D97706] font-semibold">HIGH</span>
                  <span className="text-xs text-[#8B949E]">Emergency transit delayed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Units */}
        <div className="px-4 py-3 border-b border-[#30363D]">
          <h3 className="text-xs font-medium text-[#8B949E] mb-3 uppercase tracking-wider">Emergency Units</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-[#161B22] rounded border border-[#30363D]">
              <Ambulance className="w-4 h-4 text-[#F0F6FC]" />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#F0F6FC]">Amb-01</div>
                <div className="text-xs text-[#2E856E]">Transit to Sector 04</div>
              </div>
              <span className="px-2 py-0.5 text-xs bg-[#2E856E]/20 text-[#2E856E] rounded font-medium">ACTIVE</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#161B22] rounded border border-[#30363D]">
              <Ambulance className="w-4 h-4 text-[#F0F6FC]" />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#F0F6FC]">Amb-02</div>
                <div className="text-xs text-[#8B949E]">Standby</div>
              </div>
              <span className="px-2 py-0.5 text-xs bg-[#30363D] text-[#8B949E] rounded font-medium">READY</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#161B22] rounded border border-[#30363D]">
              <Ambulance className="w-4 h-4 text-[#F0F6FC]" />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#F0F6FC]">Amb-03</div>
                <div className="text-xs text-[#8B949E]">Standby</div>
              </div>
              <span className="px-2 py-0.5 text-xs bg-[#30363D] text-[#8B949E] rounded font-medium">READY</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#161B22] rounded border border-[#30363D]">
              <Truck className="w-4 h-4 text-[#C53030]" />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#F0F6FC]">FE-01</div>
                <div className="text-xs text-[#C53030]">En route to Sector 04</div>
              </div>
              <span className="px-2 py-0.5 text-xs bg-[#C53030]/20 text-[#C53030] rounded font-medium">DISPATCHED</span>
            </div>
          </div>
        </div>

        {/* Hospital Occupancy */}
        <div className="px-4 py-3">
          <h3 className="text-xs font-medium text-[#8B949E] mb-3 uppercase tracking-wider">Hospital Capacity</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center gap-2">
                  <Building2 className="w-3 h-3 text-[#8B949E]" />
                  <span className="text-xs text-[#F0F6FC]">H1: Central General</span>
                </div>
                <span className="text-xs text-[#C53030] font-semibold">88%</span>
              </div>
              <div className="h-1.5 bg-[#30363D] rounded-full overflow-hidden">
                <div className="h-full bg-[#C53030] rounded-full transition-all" style={{ width: '88%' }}></div>
              </div>
              <div className="text-xs text-[#8B949E] mt-1">High overload risk</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center gap-2">
                  <Building2 className="w-3 h-3 text-[#8B949E]" />
                  <span className="text-xs text-[#F0F6FC]">H2: Apex Trauma</span>
                </div>
                <span className="text-xs text-[#2E856E] font-semibold">54%</span>
              </div>
              <div className="h-1.5 bg-[#30363D] rounded-full overflow-hidden">
                <div className="h-full bg-[#2E856E] rounded-full transition-all" style={{ width: '54%' }}></div>
              </div>
              <div className="text-xs text-[#8B949E] mt-1">Optimal capacity</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center gap-2">
                  <Building2 className="w-3 h-3 text-[#8B949E]" />
                  <span className="text-xs text-[#F0F6FC]">H3: East Memorial</span>
                </div>
                <span className="text-xs text-[#2E856E] font-semibold">41%</span>
              </div>
              <div className="h-1.5 bg-[#30363D] rounded-full overflow-hidden">
                <div className="h-full bg-[#2E856E] rounded-full transition-all" style={{ width: '41%' }}></div>
              </div>
              <div className="text-xs text-[#8B949E] mt-1">High capacity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
