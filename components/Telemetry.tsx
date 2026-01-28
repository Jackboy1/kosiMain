
import React, { useState, useEffect } from 'react';

export const Telemetry: React.FC = () => {
  const [latency, setLatency] = useState(24);
  const [load, setLoad] = useState(12.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (42 - 18) + 18));
      setLoad((Math.random() * (15 - 10) + 10).toFixed(1) as any);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-[60] hidden xl:flex flex-col items-end gap-1 font-mono text-[8px] tracking-[0.2em] text-zinc-600 uppercase">
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span>
        NETWORK LATENCY: <span className="text-zinc-400">{latency}MS</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
        CORE LOAD: <span className="text-zinc-400">{load}%</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        GEO: <span className="text-zinc-500">SECURE_NODE_03</span>
      </div>
    </div>
  );
};
