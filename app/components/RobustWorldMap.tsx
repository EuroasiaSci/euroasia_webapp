'use client';

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

// Using a reliable TopoJSON URL
const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";


interface RobustWorldMapProps {
  onError?: () => void;
}

interface Geography {
  rsmKey?: string;
  properties?: {
    NAME_LONG?: string;
    ISO_A2?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export default function RobustWorldMap({ onError }: RobustWorldMapProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate loading time and check if component mounts
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleError = (error: Error) => {
    console.error('Map loading error:', error);
    setError(error);
    setIsLoading(false);
    if (onError) {
      onError();
    }
  };

  const handleGeographiesLoad = (geos: Geography[]) => {
    try {
      if (!geos || !Array.isArray(geos)) {
        handleError(new Error('Invalid geographies data'));
        return;
      }
      
      // Validate each geography object
      const validGeos = geos.filter(geo => geo && typeof geo === 'object' && geo.properties);
      // Note: We don't actually use the geographies state, so we can remove the setGeographies call
      console.log('Geographies loaded:', validGeos.length);
    } catch (error) {
      console.error('Error processing geographies:', error);
      handleError(new Error('Failed to process geography data'));
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="text-slate-600 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600 mx-auto mb-4"></div>
          <p>Loading world map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="text-slate-600 text-center">
          <p>Error loading map. Using fallback...</p>
          {onError && <button onClick={onError} className="mt-2 text-blue-600 hover:underline">Try Simple Map</button>}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 lg:h-[500px]">
      <ComposableMap
        projectionConfig={{
          scale: 150,
          center: [20, 0]
        }}
        style={{ 
          width: "100%", 
          height: "100%",
          background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)"
        }}
      >
        <Geographies 
          geography={geoUrl}
          onError={(error: Error) => {
            console.error('Geography loading error:', error);
            handleError(error);
          }}
        >
          {({ geographies }: { geographies: Geography[] }) => {
            try {
              handleGeographiesLoad(geographies);
              
              if (!geographies || !Array.isArray(geographies)) {
                return null;
              }
              
              return geographies.map((geo, index) => {
              // Ensure geo object exists and has required properties
              if (!geo || typeof geo !== 'object') {
                console.warn('Invalid geography object at index:', index);
                return null;
              }
              
              // Safely check for India using different property names
              const properties = geo.properties || {};
              const isIndia = properties.NAME === "India" || 
                             properties.NAME_EN === "India" || 
                             properties.ADMIN === "India" ||
                             properties.ISO_A3 === "IND" ||
                             properties.name === "India" ||
                             properties.NAME_0 === "India" ||
                             properties.NAME_LONG === "India" ||
                             properties.ISO_A2 === "IN";
              
              // Use a more reliable key
              const key = geo.rsmKey || `geo-${index}`;
              
              return (
                <Geography
                  key={key}
                  geography={geo}
                >
                  {({ path }) => (
                    <path
                      d={path}
                      fill={isIndia ? "#48009f" : "#e2e8f0"}
                      stroke={isIndia ? "#48009f" : "#cbd5e1"}
                      strokeWidth={isIndia ? 2 : 1}
                      style={{ outline: "none" }}
                      className="hover:fill-purple-800 transition-colors duration-300"
                    />
                  )}
                </Geography>
              );
            }).filter(Boolean);
            } catch (error) {
              console.error('Error rendering geographies:', error);
              return null;
            }
          }}
        </Geographies>
      </ComposableMap>
    </div>
  );
}
