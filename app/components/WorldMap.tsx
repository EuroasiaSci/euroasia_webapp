'use client';

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

// Using a reliable TopoJSON URL from Natural Earth
const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";


export default function WorldMap() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate loading time and check if component mounts
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading world map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500">
        <div className="text-white text-center">
          <p>Error loading map. Please refresh the page.</p>
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
          background: "linear-gradient(135deg, #f8fafc, #e2e8f0)"
        }}
      >
        <Geographies 
          geography={geoUrl}
          onError={(error) => {
            console.error('Map loading error:', error);
            setError(error);
          }}
        >
          {({ geographies }) => {
            if (!geographies || !Array.isArray(geographies)) {
              console.log('Geographies not loaded or invalid');
              return null;
            }
            
            console.log('Geographies loaded:', geographies.length);
            return geographies.map((geo) => {
              // Safely check for India using different property names
              const properties = geo.properties || {};
              const isIndia = properties.NAME === "India" || 
                             properties.NAME_EN === "India" || 
                             properties.ADMIN === "India" ||
                             properties.ISO_A3 === "IND" ||
                             properties.name === "India" ||
                             properties.NAME_0 === "India";
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                >
                  {({ path }) => (
                    <path
                      d={path}
                      fill={isIndia ? "#48009f" : "#e2e8f0"}
                      stroke={isIndia ? "#48009f" : "#cbd5e1"}
                      strokeWidth={isIndia ? 2 : 0.5}
                      style={{ outline: "none" }}
                      className="hover:fill-purple-800 transition-colors duration-300"
                    />
                  )}
                </Geography>
              );
            });
          }}
        </Geographies>
      </ComposableMap>
    </div>
  );
}
