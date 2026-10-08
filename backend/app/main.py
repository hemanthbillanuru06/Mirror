from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any

from app.simulation.mock_city import MockCity
from app.simulation.consequence import ConsequenceEngine


app = FastAPI(title="MIRROR - Emergency Response Decision Twin")

# Configure CORS for localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the digital twin
city = MockCity()
consequence_engine = ConsequenceEngine(current_risk=city.current_risk)


class SimulateRequest(BaseModel):
    action_id: str


@app.get("/api/twin/state")
async def get_twin_state() -> Dict[str, Any]:
    """
    Returns the full digital twin status including:
    - Current risk score
    - Hospital capacities
    - Vehicle locations
    - Active sector hazards
    """
    return city.get_state()


@app.post("/api/simulate")
async def simulate_dispatch(request: SimulateRequest) -> Dict[str, Any]:
    """
    Accepts an action_id and returns projected consequences:
    - Transit times
    - Hospital load changes
    - Risk scores and risk differences
    """
    try:
        result = consequence_engine.simulate_dispatch(request.action_id)
        return result.model_dump()
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/")
async def root():
    return {"message": "MIRROR API - Emergency Response Decision Twin"}
