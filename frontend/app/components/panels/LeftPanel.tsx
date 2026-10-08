'use client';

import { Activity, Ambulance, Truck, Building2 } from 'lucide-react';

export default function LeftPanel() {
  return (
    <div className="h-full bg-[#1C2128] border-r border-[#30363D] flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-[#30363D]">
        <h2 className="text-lg font-semibold text-[#F0F6FC]">Incident & Fleet Telemetry</h2>
      </div>

      {/* Active Incidents */}
      <div className="p-4 border-b border-[#30363D]">
        <h3 className="text-sm font-medium text-[#8B949E] mb-3 uppercase tracking-wide">Active Incidents</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 bg-[#161B22] rounded border border-[#30363D]">
            <Activity className="w-4 h-4 text-[#C53030]" />
            <div className="flex-1">
              <div className="text-sm font-medium text-[#F0F6FC]">Sector 04 Fire</div>
              <div className="text-xs text-[#C53030] font-semibold">CRITICAL</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#161B22] rounded border border-[#30363D]">
            <Activity className="w-4 h-4 text-[#1D4E89]" />
            <div className="flex-1">
              <div className="text-sm font-medium text-[#F0F6FC]">Sector 07 Flood</div>
              <div className="text-xs text-[#D97706] font-semibold">HIGH</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#161B22] rounded border border-[#30363D]">
            <Activity className="w-4 h-4 text-[#D97706]" />
            <div className="flex-1">
              <div className="text-sm font-medium text-[#F0F6FC]">Sector 09 Gridlock</div>
              <div className="text-xs text-[#D97706] font-semibold">HIGH</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Units */}
      <div className="p-4 border-b border-[#30363D] flex-1 overflow-y-auto">
        <h3 className="text-sm font-medium text-[#8B949E] mb-3 uppercase tracking-wide">Emergency Units</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 bg-[#161B22] rounded border border-[#30363D]">
            <Ambulance className="w-4 h-4 text-[#F0F6FC]" />
            <div className="flex-1">
              <div className="text-sm font-medium text-[#F0F6FC]">Amb-01</div>
              <div className="text-xs text-[#2E856E]">Transit to Sector 04</div>
            </div>
            <span className="px-2 py-1 text-xs bg-[#2E856E] text-[#F0F6FC] rounded">ACTIVE</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#161B22] rounded border border-[#30363D]">
            <Ambulance className="w-4 h-4 text-[#F0F6FC]" />
            <div className="flex-1">
              <div className="text-sm font-medium text-[#F0F6FC]">Amb-02</div>
              <div className="text-xs text-[#8B949E]">Standby</div>
            </div>
            <span className="px-2 py-1 text-xs bg-[#30363D] text-[#8B949E] rounded">READY</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#161B22] rounded border border-[#30363D]">
            <Ambulance className="w-4 h-4 text-[#F0F6FC]" />
            <div className="flex-1">
              <div className="text-sm font-medium text-[#F0F6FC]">Amb-03</div>
              <div className="text-xs text-[#8B949E]">Standby</div>
            </div>
            <span className="px-2 py-1 text-xs bg-[#30363D] text-[#8B949E] rounded">READY</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#161B22] rounded border border-[#30363D]">
            <Truck className="w-4 h-4 text-[#C53030]" />
            <div className="flex-1">
              <div className="text-sm font-medium text-[#F0F6FC]">FE-01</div>
              <div className="text-xs text-[#C53030]">En route to Sector 04</div>
            </div>
            <span className="px-2 py-1 text-xs bg-[#C53030] text-[#F0F6FC] rounded">DISPATCHED</span>
          </div>
        </div>
      </div>

      {/* Hospital Occupancy */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-[#8B949E] mb-3 uppercase tracking-wide">Hospital Occupancy</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#F0F6FC]">H1: Central General</span>
              <span className="text-[#C53030] font-semibold">88%</span>
            </div>
            <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
              <div className="h-full bg-[#C53030] rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#F0F6FC]">H2: Apex Trauma</span>
              <span className="text-[#2E856E] font-semibold">54%</span>
            </div>
            <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
              <div className="h-full bg-[#2E856E] rounded-full" style={{ width: '54%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#F0F6FC]">H3: East Memorial</span>
              <span className="text-[#2E856E] font-semibold">41%</span>
            </div>
            <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
              <div className="h-full bg-[#2E856E] rounded-full" style={{ width: '41%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
