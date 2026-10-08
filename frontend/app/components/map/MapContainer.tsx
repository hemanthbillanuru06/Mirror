'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapContainerProps {
  className?: string;
}

export default function MapContainer({ className = '' }: MapContainerProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [tokenDebug, setTokenDebug] = useState<string>('Checking...');

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    setTokenDebug(token ? `Token: ${token.substring(0, 10)}... (length: ${token.length})` : 'NO TOKEN FOUND');
    
    if (!token) {
      setError('Mapbox token is missing. Please add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local');
      setLoading(false);
      return;
    }

    if (!mapContainer.current || mapRef.current) return;

    try {
      mapboxgl.accessToken = token;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [78.4867, 17.3850],
        pitch: 60,
        bearing: -17,
        zoom: 15.2,
      });

      mapRef.current = map;

      map.on('load', () => {
        setLoading(false);
        
        try {
          // Add 3D building extrusions
          if (map.getSource('composite')) {
            map.addLayer({
              id: '3d-buildings',
              source: 'composite',
              'source-layer': 'building',
              filter: ['==', 'extrude', 'true'],
              type: 'fill-extrusion',
              minzoom: 15,
              paint: {
                'fill-extrusion-color': '#252A36',
                'fill-extrusion-height': ['get', 'height'],
                'fill-extrusion-base': ['get', 'min_height'],
                'fill-extrusion-opacity': 0.8,
              },
            });
          }

          // Add Sector 04 - Fire (Crimson)
          map.addSource('sector-04', {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [78.4700, 17.3900],
                    [78.4800, 17.3900],
                    [78.4800, 17.3800],
                    [78.4700, 17.3800],
                    [78.4700, 17.3900],
                  ],
                ],
              },
            },
          });

          map.addLayer({
            id: 'sector-04-fill',
            type: 'fill',
            source: 'sector-04',
            paint: {
              'fill-color': '#C53030',
              'fill-opacity': 0.4,
            },
          });

          map.addLayer({
            id: 'sector-04-border',
            type: 'line',
            source: 'sector-04',
            paint: {
              'line-color': '#C53030',
              'line-width': 2,
            },
          });

          // Add Sector 07 - Flood (Blue with height)
          map.addSource('sector-07', {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [78.4900, 17.3750],
                    [78.5000, 17.3750],
                    [78.5000, 17.3650],
                    [78.4900, 17.3650],
                    [78.4900, 17.3750],
                  ],
                ],
              },
            },
          });

          map.addLayer({
            id: 'sector-07-fill',
            type: 'fill-extrusion',
            source: 'sector-07',
            paint: {
              'fill-extrusion-color': '#1D4E89',
              'fill-extrusion-height': 3.5,
              'fill-extrusion-base': 0,
              'fill-extrusion-opacity': 0.6,
            },
          });

          // Add Sector 09 - Gridlock
          map.addSource('sector-09', {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [78.4750, 17.3850],
                    [78.4850, 17.3850],
                    [78.4850, 17.3750],
                    [78.4750, 17.3750],
                    [78.4750, 17.3850],
                  ],
                ],
              },
            },
          });

          map.addLayer({
            id: 'sector-09-fill',
            type: 'fill',
            source: 'sector-09',
            paint: {
              'fill-color': '#D97706',
              'fill-opacity': 0.3,
            },
          });

          map.addLayer({
            id: 'sector-09-border',
            type: 'line',
            source: 'sector-09',
            paint: {
              'line-color': '#D97706',
              'line-width': 2,
              'line-dasharray': [4, 4],
            },
          });

          // Add Hospital H1
          new mapboxgl.Marker({ color: '#2E856E' })
            .setLngLat([78.4750, 17.3880])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<strong>H1: Central General</strong><br>Occupancy: 88%'))
            .addTo(map);

          // Add Hospital H2
          new mapboxgl.Marker({ color: '#2E856E' })
            .setLngLat([78.5100, 17.3900])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<strong>H2: Apex Trauma</strong><br>Occupancy: 54%'))
            .addTo(map);

          // Add Hospital H3
          new mapboxgl.Marker({ color: '#2E856E' })
            .setLngLat([78.5300, 17.3700])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<strong>H3: East Memorial</strong><br>Occupancy: 41%'))
            .addTo(map);

          // Add Ambulance Amb-01
          new mapboxgl.Marker({ color: '#F0F6FC' })
            .setLngLat([78.4720, 17.3820])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<strong>Amb-01</strong><br>Status: Available<br>Target: Sector 04'))
            .addTo(map);

          // Add Ambulance Amb-02
          new mapboxgl.Marker({ color: '#F0F6FC' })
            .setLngLat([78.4850, 17.3780])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<strong>Amb-02</strong><br>Status: Available'))
            .addTo(map);

          // Add Ambulance Amb-03
          new mapboxgl.Marker({ color: '#F0F6FC' })
            .setLngLat([78.4920, 17.3920])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<strong>Amb-03</strong><br>Status: Available'))
            .addTo(map);

          // Add Fire Engine FE-01
          new mapboxgl.Marker({ color: '#C53030' })
            .setLngLat([78.4680, 17.3850])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<strong>FE-01</strong><br>Status: Dispatched<br>Target: Sector 04'))
            .addTo(map);
        } catch (layerError) {
          setError('Failed to load map layers');
        }
      });

      map.on('error', (e) => {
        setError('Map failed to load');
        setLoading(false);
      });

    } catch (initError) {
      setError('Failed to initialize map');
      setLoading(false);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Direct check without useEffect
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const directTokenDebug = token ? `TOKEN: ${token.substring(0, 8)}... (len: ${token.length})` : 'NO TOKEN';

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#161B22] border border-[#30363D]">
        <div className="text-center p-6">
          <div className="text-[#C53030] text-sm mb-2">Map Error</div>
          <div className="text-[#8B949E] text-xs">{error}</div>
          <div className="text-[#D97706] text-xs mt-2">{directTokenDebug}</div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#161B22]">
        <div className="text-[#8B949E] text-sm mb-2">Loading map...</div>
        <div className="text-[#D97706] text-xs">{directTokenDebug}</div>
      </div>
    );
  }

  return <div ref={mapContainer} className={`w-full h-full ${className}`} style={{ minHeight: '400px' }} />;
}
