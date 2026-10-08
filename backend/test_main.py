import pytest
from fastapi.testclient import TestClient
from app.main import app


client = TestClient(app)


def test_get_twin_state():
    """Test GET /api/twin/state returns valid numerical structures"""
    response = client.get("/api/twin/state")
    
    assert response.status_code == 200
    
    data = response.json()
    
    # Verify current risk is a number
    assert "current_risk" in data
    assert isinstance(data["current_risk"], (int, float))
    assert data["current_risk"] == 74
    
    # Verify sectors exist and have required fields
    assert "sectors" in data
    assert isinstance(data["sectors"], list)
    assert len(data["sectors"]) == 4
    
    for sector in data["sectors"]:
        assert "id" in sector
        assert "name" in sector
        assert "hazard_type" in sector
        assert "status" in sector
    
    # Verify hospitals exist and have occupancy as number
    assert "hospitals" in data
    assert isinstance(data["hospitals"], list)
    assert len(data["hospitals"]) == 3
    
    for hospital in data["hospitals"]:
        assert "id" in hospital
        assert "name" in hospital
        assert "occupancy_percent" in hospital
        assert isinstance(hospital["occupancy_percent"], (int, float))
    
    # Verify vehicles exist
    assert "vehicles" in data
    assert isinstance(data["vehicles"], list)
    assert len(data["vehicles"]) == 4
    
    for vehicle in data["vehicles"]:
        assert "id" in vehicle
        assert "type" in vehicle
        assert "location" in vehicle


def test_simulate_dispatch_action_a():
    """Test POST /api/simulate with ACTION_A"""
    response = client.post("/api/simulate", json={"action_id": "ACTION_A"})
    
    assert response.status_code == 200
    
    data = response.json()
    
    # Verify response structure
    assert data["action_id"] == "ACTION_A"
    assert "travel_time_minutes" in data
    assert isinstance(data["travel_time_minutes"], (int, float))
    assert data["travel_time_minutes"] == 22.0
    
    assert "hospital_load_change" in data
    assert isinstance(data["hospital_load_change"], dict)
    assert "H1" in data["hospital_load_change"]
    assert data["hospital_load_change"]["H1"] == 28.0
    
    assert "risk_score" in data
    assert isinstance(data["risk_score"], (int, float))
    assert data["risk_score"] == 78
    
    assert "secondary_hazard" in data
    assert "risk_diff" in data
    assert isinstance(data["risk_diff"], (int, float))


def test_simulate_dispatch_action_b():
    """Test POST /api/simulate with ACTION_B (lowest risk)"""
    response = client.post("/api/simulate", json={"action_id": "ACTION_B"})
    
    assert response.status_code == 200
    
    data = response.json()
    
    assert data["action_id"] == "ACTION_B"
    assert data["travel_time_minutes"] == 13.0
    assert data["hospital_load_change"]["H2"] == 11.0
    assert data["risk_score"] == 34
    assert data["secondary_hazard"] == "Low"
    assert data["risk_diff"] == -40  # 34 - 74


def test_simulate_dispatch_action_c():
    """Test POST /api/simulate with ACTION_C"""
    response = client.post("/api/simulate", json={"action_id": "ACTION_C"})
    
    assert response.status_code == 200
    
    data = response.json()
    
    assert data["action_id"] == "ACTION_C"
    assert data["travel_time_minutes"] == 29.0
    assert data["risk_score"] == 84
    assert "deterioration" in data["secondary_hazard"].lower()


def test_simulate_dispatch_invalid_action():
    """Test POST /api/simulate with invalid action_id"""
    response = client.post("/api/simulate", json={"action_id": "INVALID_ACTION"})
    
    # Should return 400 for invalid action
    assert response.status_code == 400


def test_root_endpoint():
    """Test root endpoint"""
    response = client.get("/")
    
    assert response.status_code == 200
    assert "message" in response.json()
