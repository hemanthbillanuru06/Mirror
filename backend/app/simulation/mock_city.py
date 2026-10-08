from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field


class Sector(BaseModel):
    id: str
    name: str
    hazard_type: str
    coordinates: List[List[float]] = Field(description="GeoJSON polygon coordinates")
    status: str
    description: str


class Hospital(BaseModel):
    id: str
    name: str
    occupancy_percent: float
    location: List[float] = Field(description="[lat, lon]")
    distance_km: float
    status: str


class Vehicle(BaseModel):
    id: str
    type: str
    location: List[float] = Field(description="[lat, lon]")
    target_incident: Optional[str] = None
    current_route: Optional[str] = None
    transit_time_minutes: Optional[float] = None
    status: str


class MockCity:
    """Multi-hazard tactical grid centered on Hyderabad [78.4867, 17.3850]"""
    
    CENTER = [78.4867, 17.3850]
    
    def __init__(self):
        self.sectors = self._init_sectors()
        self.hospitals = self._init_hospitals()
        self.vehicles = self._init_vehicles()
        self.current_risk = 74
    
    def _init_sectors(self) -> List[Sector]:
        return [
            Sector(
                id="sector_04",
                name="Sector 04",
                hazard_type="Active Urban Fire",
                coordinates=[
                    [78.4700, 17.3900],
                    [78.4800, 17.3900],
                    [78.4800, 17.3800],
                    [78.4700, 17.3800],
                    [78.4700, 17.3900]
                ],
                status="active",
                description="Requires fire tenders + hospital triage"
            ),
            Sector(
                id="sector_07",
                name="Sector 07",
                hazard_type="Waterlogging / Flash Flood",
                coordinates=[
                    [78.4900, 17.3750],
                    [78.5000, 17.3750],
                    [78.5000, 17.3650],
                    [78.4900, 17.3650],
                    [78.4900, 17.3750]
                ],
                status="active",
                description="Blocks primary arterial roads"
            ),
            Sector(
                id="sector_09",
                name="Sector 09",
                hazard_type="Choked Junction / Traffic Gridlock",
                coordinates=[
                    [78.4750, 17.3850],
                    [78.4850, 17.3850],
                    [78.4850, 17.3750],
                    [78.4750, 17.3750],
                    [78.4750, 17.3850]
                ],
                status="active",
                description="Delaying emergency transit"
            ),
            Sector(
                id="sector_11",
                name="Sector 11",
                hazard_type="Designated Safe Zone & Relief Center",
                coordinates=[
                    [78.4950, 17.3950],
                    [78.5050, 17.3950],
                    [78.5050, 17.3850],
                    [78.4950, 17.3850],
                    [78.4950, 17.3950]
                ],
                status="safe",
                description="Relief center for displaced personnel"
            )
        ]
    
    def _init_hospitals(self) -> List[Hospital]:
        return [
            Hospital(
                id="H1",
                name="Central General",
                occupancy_percent=88.0,
                location=[78.4750, 17.3880],
                distance_km=2.5,
                status="high_overload_risk"
            ),
            Hospital(
                id="H2",
                name="Apex Trauma",
                occupancy_percent=54.0,
                location=[78.5100, 17.3900],
                distance_km=3.8,
                status="optimal_capacity"
            ),
            Hospital(
                id="H3",
                name="East Memorial",
                occupancy_percent=41.0,
                location=[78.5300, 17.3700],
                distance_km=6.2,
                status="high_capacity"
            )
        ]
    
    def _init_vehicles(self) -> List[Vehicle]:
        return [
            Vehicle(
                id="Amb-01",
                type="ambulance",
                location=[78.4720, 17.3820],
                target_incident="Sector 04",
                current_route="Direct Arterial Route 1",
                transit_time_minutes=None,
                status="available"
            ),
            Vehicle(
                id="Amb-02",
                type="ambulance",
                location=[78.4850, 17.3780],
                target_incident=None,
                current_route=None,
                transit_time_minutes=None,
                status="available"
            ),
            Vehicle(
                id="Amb-03",
                type="ambulance",
                location=[78.4920, 17.3920],
                target_incident=None,
                current_route=None,
                transit_time_minutes=None,
                status="available"
            ),
            Vehicle(
                id="FE-01",
                type="fire_engine",
                location=[78.4680, 17.3850],
                target_incident="Sector 04",
                current_route="En route to Sector 04",
                transit_time_minutes=8.0,
                status="dispatched"
            )
        ]
    
    def get_state(self) -> Dict[str, Any]:
        return {
            "current_risk": self.current_risk,
            "sectors": [s.model_dump() for s in self.sectors],
            "hospitals": [h.model_dump() for h in self.hospitals],
            "vehicles": [v.model_dump() for v in self.vehicles]
        }
