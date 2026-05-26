"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google?: typeof google;
  }
}

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function loadMapScript() {
  return new Promise<void>((resolve, reject) => {
    // Prevent loading multiple times
    if (window.google?.maps) {
      resolve();
      return;
    }

    const existingScript = document.getElementById("google-maps-script");

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      return;
    }

    const script = document.createElement("script");

    script.id = "google-maps-script";

    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geometry`;

    script.async = true;
    script.defer = true;

    script.onload = () => resolve();

    script.onerror = () => {
      reject(new Error("Failed to load Google Maps"));
    };

    document.head.appendChild(script);
  });
}

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
}

export function MapView({
  className,
  initialCenter = { lat: -26.2041, lng: 28.0473 }, // Johannesburg
  initialZoom = 12,
  onMapReady,
}: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        await loadMapScript();

        if (!mapContainerRef.current) return;

        mapRef.current = new window.google!.maps.Map(
          mapContainerRef.current,
          {
            center: initialCenter,
            zoom: initialZoom,
            mapTypeControl: true,
            fullscreenControl: true,
            zoomControl: true,
            streetViewControl: true,
          }
        );

        onMapReady?.(mapRef.current);
      } catch (error) {
        console.error(error);
      }
    };

    initMap();
  }, [initialCenter, initialZoom, onMapReady]);

  return (
    <div
      ref={mapContainerRef}
      className={cn("w-full h-[500px] rounded-xl", className)}
    />
  );
}