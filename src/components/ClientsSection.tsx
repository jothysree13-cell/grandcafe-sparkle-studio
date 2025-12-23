import { motion } from "framer-motion";

const clientLocations = [
  { name: "Kerala, India", lat: 10.8505, lng: 76.2711 },
  { name: "Bangalore, India", lat: 12.9716, lng: 77.5946 },
  { name: "Chennai, India", lat: 13.0827, lng: 80.2707 },
  { name: "Mumbai, India", lat: 19.076, lng: 72.8777 },
  { name: "Gujarat, India", lat: 22.2587, lng: 71.1924 },
  { name: "Rajasthan, India", lat: 27.0238, lng: 74.2179 },
  { name: "Delhi, India", lat: 28.7041, lng: 77.1025 },
  { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Abu Dhabi, UAE", lat: 24.4539, lng: 54.3773 },
  { name: "Canada", lat: 56.1304, lng: -106.3468 },
];

// Convert lat/lng to SVG coordinates (simple equirectangular projection)
const latLngToXY = (lat: number, lng: number, width: number, height: number) => {
  const x = ((lng + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
};

export const ClientsSection = () => {
  const mapWidth = 800;
  const mapHeight = 400;

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-widest">Trusted By</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
            OUR CLIENTS
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Serving clients across India, Middle East, and North America
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <svg
            viewBox={`0 0 ${mapWidth} ${mapHeight}`}
            className="w-full h-auto"
            style={{ maxHeight: "500px" }}
          >
            {/* World Map Background - Simplified continents */}
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--muted))" />
                <stop offset="100%" stopColor="hsl(var(--muted)/0.5)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Ocean background */}
            <rect width={mapWidth} height={mapHeight} fill="hsl(var(--background))" rx="8" />
            
            {/* Simplified world continents */}
            {/* North America */}
            <path
              d="M50,80 Q80,60 120,70 L140,90 Q160,100 180,95 L200,100 Q220,110 210,130 L200,150 Q180,180 150,190 L120,185 Q90,175 70,150 L55,120 Q45,100 50,80"
              fill="url(#mapGradient)"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            {/* South America */}
            <path
              d="M150,200 Q170,195 180,210 L190,240 Q195,270 185,300 L170,330 Q150,350 140,340 L130,310 Q125,280 130,250 L140,220 Q145,205 150,200"
              fill="url(#mapGradient)"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            {/* Europe */}
            <path
              d="M380,70 Q400,60 420,65 L440,75 Q460,80 470,90 L475,100 Q470,110 460,115 L440,118 Q420,120 400,115 L385,105 Q375,90 380,70"
              fill="url(#mapGradient)"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            {/* Africa */}
            <path
              d="M400,140 Q420,135 440,140 L460,155 Q480,175 485,200 L490,240 Q485,280 470,310 L450,340 Q420,355 400,340 L385,310 Q375,275 380,240 L385,200 Q390,160 400,140"
              fill="url(#mapGradient)"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            {/* Asia */}
            <path
              d="M480,60 Q520,50 570,55 L620,65 Q670,75 700,90 L720,110 Q740,130 730,150 L710,170 Q680,185 640,180 L600,175 Q560,180 530,175 L500,165 Q480,150 475,130 L470,100 Q475,75 480,60"
              fill="url(#mapGradient)"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            {/* India subcontinent detail */}
            <path
              d="M540,150 Q560,145 575,155 L585,175 Q590,200 580,225 L565,250 Q545,260 530,250 L520,225 Q515,195 525,170 L540,150"
              fill="url(#mapGradient)"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            {/* Australia */}
            <path
              d="M650,260 Q680,250 710,255 L740,270 Q760,290 755,315 L740,335 Q710,350 680,345 L655,330 Q640,305 645,280 L650,260"
              fill="url(#mapGradient)"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />

            {/* Grid lines */}
            {[...Array(9)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={(i + 1) * (mapHeight / 10)}
                x2={mapWidth}
                y2={(i + 1) * (mapHeight / 10)}
                stroke="hsl(var(--border)/0.3)"
                strokeWidth="0.5"
                strokeDasharray="4,4"
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={(i + 1) * (mapWidth / 16)}
                y1="0"
                x2={(i + 1) * (mapWidth / 16)}
                y2={mapHeight}
                stroke="hsl(var(--border)/0.3)"
                strokeWidth="0.5"
                strokeDasharray="4,4"
              />
            ))}

            {/* Client location markers */}
            {clientLocations.map((location, i) => {
              const { x, y } = latLngToXY(location.lat, location.lng, mapWidth, mapHeight);
              return (
                <g key={location.name}>
                  {/* Pulse animation circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="hsl(var(--primary)/0.3)"
                    className="animate-pulse"
                  />
                  {/* Main marker */}
                  <circle
                    cx={x}
                    cy={y}
                    r="5"
                    fill="hsl(var(--destructive))"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  {/* Tooltip on hover - positioned based on location */}
                  <g className="opacity-0 hover:opacity-100 transition-opacity">
                    <rect
                      x={x - 50}
                      y={y - 30}
                      width="100"
                      height="22"
                      rx="4"
                      fill="hsl(var(--popover))"
                      stroke="hsl(var(--border))"
                    />
                    <text
                      x={x}
                      y={y - 15}
                      textAnchor="middle"
                      fill="hsl(var(--popover-foreground))"
                      fontSize="10"
                      fontFamily="var(--font-body)"
                    >
                      {location.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {clientLocations.map((location, i) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full border border-border"
              >
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <span className="text-xs font-body text-muted-foreground">{location.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
