from typing import Dict, Any
from pydantic import BaseModel


class DispatchResult(BaseModel):
    action_id: str
    description: str
    travel_time_minutes: float
    hospital_load_change: Dict[str, float]
    risk_score: float
    secondary_hazard: str
    risk_diff: float  # Difference from current risk


class ConsequenceEngine:
    """Deterministic consequence evaluation model for emergency dispatch decisions"""
    
    def __init__(self, current_risk: float = 74):
        self.current_risk = current_risk
    
    def calculate_risk(
        self,
        transit_delay: float,
        hospital_overload: float,
        population_exposure: float,
        secondary_congestion: float
    ) -> float:
        """
        Overall Risk = (0.30 * TransitDelay) + (0.25 * HospitalOverload) + 
                      (0.25 * PopulationExposure) + (0.20 * SecondaryCongestion)
        """
        return (
            0.30 * transit_delay +
            0.25 * hospital_overload +
            0.25 * population_exposure +
            0.20 * secondary_congestion
        )
    
    def simulate_dispatch(self, action_id: str) -> DispatchResult:
        """
        Evaluate tactical dispatch choices and return projected consequences.
        
        Available actions:
        - ACTION_A: Dispatch Amb-01 via Direct Arterial Route 1 to Hospital H1
        - ACTION_B: Reroute Amb-01 via Perimeter Bypass Route 3 to Hospital H2
        - ACTION_C: Hold transit 10 mins & deploy traffic police to clear Corridor B
        """
        actions = {
            "ACTION_A": {
                "description": "Dispatch Amb-01 via Direct Arterial Route 1 to Hospital H1",
                "travel_time_minutes": 22.0,
                "hospital_load_change": {"H1": 28.0},
                "transit_delay": 85.0,
                "hospital_overload": 90.0,
                "population_exposure": 60.0,
                "secondary_congestion": 75.0,
                "secondary_hazard": "Critical ambulance delay & triage overload"
            },
            "ACTION_B": {
                "description": "Reroute Amb-01 via Perimeter Bypass Route 3 to Hospital H2",
                "travel_time_minutes": 13.0,
                "hospital_load_change": {"H2": 11.0},
                "transit_delay": 44.0,
                "hospital_overload": 35.0,
                "population_exposure": 30.0,
                "secondary_congestion": 25.0,
                "secondary_hazard": "Low"
            },
            "ACTION_C": {
                "description": "Hold transit 10 mins & deploy traffic police to clear Corridor B",
                "travel_time_minutes": 29.0,
                "hospital_load_change": {},
                "transit_delay": 95.0,
                "hospital_overload": 75.0,
                "population_exposure": 80.0,
                "secondary_congestion": 85.0,
                "secondary_hazard": "Patient condition deterioration during wait"
            }
        }
        
        if action_id not in actions:
            raise ValueError(f"Unknown action_id: {action_id}. Must be one of {list(actions.keys())}")
        
        action = actions[action_id]
        
        # Calculate risk score using the deterministic model
        risk_score = self.calculate_risk(
            transit_delay=action["transit_delay"],
            hospital_overload=action["hospital_overload"],
            population_exposure=action["population_exposure"],
            secondary_congestion=action["secondary_congestion"]
        )
        
        # Round to integer as specified in requirements
        risk_score = round(risk_score)
        
        # Calculate risk difference from current risk
        risk_diff = risk_score - self.current_risk
        
        return DispatchResult(
            action_id=action_id,
            description=action["description"],
            travel_time_minutes=action["travel_time_minutes"],
            hospital_load_change=action["hospital_load_change"],
            risk_score=risk_score,
            secondary_hazard=action["secondary_hazard"],
            risk_diff=risk_diff
        )
