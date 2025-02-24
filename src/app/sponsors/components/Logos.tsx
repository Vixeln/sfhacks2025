"use client";

import "./styles.css";
import { Atlas } from "@/lib/atlasLoader";
import type { Property } from "csstype";
import { useState } from "react";

interface LogoRowProps {
  atlasData: Atlas;
  animationDirection: Property.AnimationDirection;
}

export function LogoRow({
  atlasData: { atlasFilePath, height, width, sprites },
  animationDirection = "unset",
}: LogoRowProps) {
  return (
    <div
      className="logoRow"
      style={{
        // overflow: "scroll hidden",
        backgroundImage: `url(${atlasFilePath})`,
        backgroundSize: "auto 100px",
        animationDuration: `${(width / height) * 15}s`,
        animationDirection: animationDirection,
        backgroundPositionX: `${width}px`,
      }}
    >
    </div>
  );
}

interface LogoComponentProps {}

function LogoComponent() {
	// return (
	// );
}
