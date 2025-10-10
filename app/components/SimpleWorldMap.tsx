'use client';

import React from "react";

export default function SimpleWorldMap() {
  return (
    <div className="w-full h-96 lg:h-[500px] relative bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        {/* Simplified World Map */}
        {/* Europe */}
        <path 
          d="M150 150 Q200 120 250 140 Q300 160 280 200 Q250 220 200 200 Q150 180 150 150 Z" 
          fill="#e2e8f0" 
          stroke="#cbd5e1" 
          strokeWidth="1"
        />
        
        {/* Asia */}
        <path 
          d="M250 140 Q400 120 500 140 Q550 160 520 200 Q480 220 400 200 Q320 180 280 160 Q250 140 250 140 Z" 
          fill="#e2e8f0" 
          stroke="#cbd5e1" 
          strokeWidth="1"
        />
        
        {/* India - Highlighted */}
        <path 
          d="M320 180 Q380 170 400 200 Q420 230 380 240 Q340 230 320 200 Q320 180 320 180 Z" 
          fill="#48009f" 
          stroke="#48009f" 
          strokeWidth="2"
        />
        
        {/* Southeast Asia */}
        <path 
          d="M400 200 Q450 190 480 220 Q460 250 420 240 Q400 220 400 200 Z" 
          fill="#e2e8f0" 
          stroke="#cbd5e1" 
          strokeWidth="1"
        />
        
        {/* Africa */}
        <path 
          d="M200 200 Q250 180 280 220 Q300 280 250 300 Q200 280 180 240 Q200 200 200 200 Z" 
          fill="#e2e8f0" 
          stroke="#cbd5e1" 
          strokeWidth="1"
        />
        
        {/* North America */}
        <path 
          d="M50 120 Q100 100 150 140 Q120 200 80 220 Q50 200 50 120 Z" 
          fill="#e2e8f0" 
          stroke="#cbd5e1" 
          strokeWidth="1"
        />
        
        {/* South America */}
        <path 
          d="M150 250 Q200 230 220 280 Q200 320 160 330 Q140 300 150 250 Z" 
          fill="#e2e8f0" 
          stroke="#cbd5e1" 
          strokeWidth="1"
        />
        
        {/* Australia */}
        <path 
          d="M500 280 Q550 270 580 300 Q560 330 520 320 Q500 300 500 280 Z" 
          fill="#e2e8f0" 
          stroke="#cbd5e1" 
          strokeWidth="1"
        />

        {/* Location Pins */}
        {/* India Locations */}
        <g>
          <circle cx="340" cy="200" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="350" y="195" fill="#1e293b" fontSize="11" fontWeight="600" >Gurugram</text>
        </g>
        
        <g>
          <circle cx="360" cy="210" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="370" y="205" fill="#1e293b" fontSize="11" fontWeight="600" >Mumbai</text>
        </g>
        
        <g>
          <circle cx="380" cy="220" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="390" y="215" fill="#1e293b" fontSize="11" fontWeight="600" >Tirupur</text>
        </g>
        
        <g>
          <circle cx="400" cy="230" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="410" y="225" fill="#1e293b" fontSize="11" fontWeight="600" >Kolkata</text>
        </g>

        {/* International Locations */}
        <g>
          <circle cx="200" cy="170" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="210" y="165" fill="#1e293b" fontSize="11" fontWeight="600" >France</text>
        </g>
        
        <g>
          <circle cx="230" cy="175" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="240" y="170" fill="#1e293b" fontSize="11" fontWeight="600" >Italy</text>
        </g>
        
        <g>
          <circle cx="450" cy="160" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="460" y="155" fill="#1e293b" fontSize="11" fontWeight="600" >China</text>
        </g>
        
        <g>
          <circle cx="480" cy="180" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="490" y="175" fill="#1e293b" fontSize="11" fontWeight="600" >Hong Kong</text>
        </g>
        
        <g>
          <circle cx="420" cy="240" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="430" y="235" fill="#1e293b" fontSize="11" fontWeight="600" >Bangladesh</text>
        </g>
        
        <g>
          <circle cx="460" cy="250" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="470" y="245" fill="#1e293b" fontSize="11" fontWeight="600" >Vietnam</text>
        </g>
        
        <g>
          <circle cx="380" cy="260" r="5" fill="#ab21a1" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <text x="390" y="255" fill="#1e293b" fontSize="11" fontWeight="600" >Sri Lanka</text>
        </g>
        
        {/* Fallback indicator */}
        <text x="400" y="380" fill="#64748b" fontSize="10" textAnchor="middle" opacity="0.7">
          Simplified World Map
        </text>
      </svg>
    </div>
  );
}
