// pages/index.tsx
"use client";
import Map from "@/app/components/Map";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h1>הכנס כתובת למפה</h1>
      <Map />
    </div>
  );
};

export default Home;
