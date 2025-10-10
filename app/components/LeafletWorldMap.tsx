'use client';

import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix for marker icons not displaying correctly in Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
}

// Custom purple marker icon
const createCustomIcon = (color: string = '#ab21a1') => {
  if (typeof window === 'undefined') return null;
  
  return L.divIcon({
    html: `<div style="
      background-color: ${color};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    "></div>`,
    className: 'custom-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

interface Location {
  name: string;
  coords: [number, number];
  type: "headquarters" | "lab" | "service-network";
}

// EuroAsia locations
const locations: Location[] = [
  { name: "Gurugram", coords: [28.4595, 77.0266], type: "headquarters" },
  { name: "Mumbai", coords: [19.0760, 72.8777], type: "lab" },
  { name: "Tirupur", coords: [11.1085, 77.3344], type: "lab" },
  { name: "Kolkata", coords: [22.5726, 88.3639], type: "lab" },
  { name: "Sri Lanka", coords: [7.8731, 80.7718], type: "service-network" },
  { name: "Bangladesh", coords: [23.6850, 90.3563], type: "service-network" },
  { name: "Vietnam", coords: [14.0583, 108.2772], type: "service-network" },
  { name: "France", coords: [46.2276, 2.2137], type: "service-network" },
  { name: "Italy", coords: [41.8719, 12.5674], type: "service-network" },
  { name: "Hong Kong", coords: [22.3193, 114.1694], type: "service-network" },
  { name: "China", coords: [35.8719, 104.1954], type: "service-network" },
];

interface MapContainerProps {
  center: [number, number];
  zoom: number;
  style: React.CSSProperties;
  scrollWheelZoom: boolean;
  zoomControl: boolean;
  key: string;
  children: React.ReactNode;
}

interface TileLayerProps {
  attribution: string;
  url: string;
  maxZoom: number;
  subdomains: string;
}

interface MarkerProps {
  position: [number, number];
  icon: L.DivIcon;
  children: React.ReactNode;
}

interface PopupProps {
  children: React.ReactNode;
}

interface MapComponents {
  MapContainer: React.ComponentType<MapContainerProps>;
  TileLayer: React.ComponentType<TileLayerProps>;
  Marker: React.ComponentType<MarkerProps>;
  Popup: React.ComponentType<PopupProps>;
}

export default function LeafletWorldMap() {
  const [isClient, setIsClient] = useState(false);
  const [MapComponents, setMapComponents] = useState<MapComponents | null>(null);

  useEffect(() => {
    // Only load Leaflet components on client side
    if (typeof window !== 'undefined') {
      setIsClient(true);
      
      // Dynamically import and set components after client-side hydration
      const loadMapComponents = async () => {
        try {
          const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
          setMapComponents({ MapContainer, TileLayer, Marker, Popup });
        } catch (error) {
          console.error('Failed to load map components:', error);
        }
      };
      
      loadMapComponents();
    }
  }, []);

  if (!isClient || !MapComponents) {
    return (
      <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-large border border-slate-200 flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="text-slate-600 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600 mx-auto mb-4"></div>
          <p>Loading interactive map...</p>
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;

  return (
    <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-large border border-slate-200">
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        zoomControl={true}
        key="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          maxZoom={20}
          subdomains="abcd"
        />
        
        {locations.map((location, index) => {
          // Different colors based on location type
          let markerColor = '#ab21a1'; // Default for laboratories
          let markerType = 'Laboratory';
          
          if (location.type === 'service-network') {
            markerColor = '#48009f'; // Service networks
            markerType = 'Service Network';
          } else if (location.type === 'lab') {
            markerColor = '#ab21a1'; // Laboratories
            markerType = 'Laboratory';
          }
          
          const icon = createCustomIcon(markerColor);
          if (!icon) return null;
          
          return (
            <Marker 
              key={index} 
              position={location.coords}
              icon={icon}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    {location.type === 'headquarters' ? 'Headquarters' : 
                     location.type === 'lab' ? 'Laboratory' : 'Service Network'}
                  </p>
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: markerColor }}
                    ></div>
                    <span className="text-xs text-neutral-500">
                      {markerType}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
