"use client";

import type {
  GeoJSONSource,
  MapOptions,
  StyleSpecification,
} from "maplibre-gl";
import { LngLat, Map as MaplibreMap, Marker, Popup } from "maplibre-gl";
import { createPortal } from "react-dom";

import "maplibre-gl/dist/maplibre-gl.css";

import { cn } from "cn";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

// ============================================================================
// Custom Styles to Override MapLibre Defaults
// ============================================================================

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    /* Remove default MapLibre popup styles */
    .maplibregl-popup-content {
      background: transparent !important;
      padding: 0 !important;
      box-shadow: none !important;
      border-radius: 0 !important;
    }

    .maplibregl-popup-tip {
      display: none !important;
    }

    .maplibregl-popup-close-button {
      color: hsl(var(--foreground)) !important;
      font-size: 20px !important;
      padding: 0 4px !important;
      right: 4px !important;
      top: 4px !important;
    }
  `;
  if (!document.head.querySelector("[data-map-styles]")) {
    style.setAttribute("data-map-styles", "");
    document.head.appendChild(style);
  }
}

const MapContext = createContext<{
  map: MaplibreMap | null;
  isLoaded: boolean;
}>({
  map: null,
  isLoaded: false,
});

function getTheme() {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

function useMap() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a Map component");
  }
  return context;
}

// ============================================================================
// Map Component (Root)
// ============================================================================

// OpenFreeMap - Free, open-source map tiles with no API key required
// https://openfreemap.org - MIT License: https://github.com/hyperknot/openfreemap/blob/main/LICENSE.md
const DEFAULT_LIGHT_STYLE = "https://tiles.openfreemap.org/styles/positron";
const DEFAULT_DARK_STYLE = "https://tiles.openfreemap.org/styles/dark";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
function MapComponent({
  children,
  className,
  center = [-122.4194, 37.7749], // San Francisco
  zoom = 12,
  minZoom = 0,
  maxZoom = 22,
  styles,
  fontFace = "/fonts/Able_5.ttf",
  ...props
}: Omit<MapOptions, "container" | "style"> & {
  children?: ReactNode;
  className?: string;
  center?: [number, number];
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  styles?: {
    light?: string | StyleSpecification;
    dark?: string | StyleSpecification;
  };
  fontFace?: string,
}) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<MaplibreMap | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapStyles, setMapStyles] = useState<StyleSpecification|undefined>(undefined);

  const fetchStyles = useCallback(async function fetchStyles() {
    const theme = getTheme();
    const baseStyleUrl =
      theme === "dark"
        ? DEFAULT_DARK_STYLE
        : DEFAULT_LIGHT_STYLE;
    const overrides =
      theme === "dark"
        ? styles?.dark
        : styles?.light;

    const res = await fetch(baseStyleUrl);

    const baseStyles: StyleSpecification = await res.json();

    let overrideStyles: Partial<StyleSpecification> = {}
    if (typeof overrides === "string") {
      const res = await fetch(overrides);
      overrideStyles = await res.json();
    }


    if (fontFace) {
      for (const layer of baseStyles.layers) {
        if (layer.layout && "text-font" in layer.layout) {
          layer.layout["text-font"] = ["Pixel Font"];
        }
      }

      baseStyles["font-faces"] = {
        "Pixel Font": [
          {
            "url": fontFace
          }
        ]
      };
    }

    setMapStyles({
      ...baseStyles,
      ...overrideStyles
    })
  }, [styles, fontFace]);

  useEffect(() => {
    fetchStyles();
  }, [fetchStyles]);
  

  // Initialize map
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;
    if (!mapStyles) return;

    mapInstance.current = new MaplibreMap({
      container: mapContainer.current,
      style: mapStyles,
      center,
      zoom,
      minZoom,
      maxZoom,
      attributionControl: false,
      ...props,
    });

    mapInstance.current.on("load", () => {
      setIsLoaded(true);
    });

    return () => {
      if (mapInstance.current) {
        try {
          mapInstance.current.remove();
        } catch (error) {
          // Suppress abort errors during cleanup
          if (error instanceof Error && !error.message.includes("aborted")) {
            console.error("Error removing map:", error);
          }
        } finally {
          mapInstance.current = null;
          setIsLoaded(false);
        }
      }
    };
  }, [mapStyles]);

  // Handle theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      fetchStyles();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [fetchStyles]);

  return (
    <MapContext.Provider value={{ map: mapInstance.current, isLoaded }}>
      <div
        ref={mapContainer}
        data-slot="map"
        className={cn("relative h-full w-full", className)}
      >
        {isLoaded && children}
      </div>
    </MapContext.Provider>
  );
}

// ============================================================================
// MapMarker Components
// ============================================================================

interface MarkerContextValue {
  marker: Marker | null;
  markerElement: HTMLDivElement | null;
}

const MarkerContext = createContext<MarkerContextValue | null>(null);

function MapMarker({
  longitude,
  latitude,
  children,
  draggable = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onDragStart,
  onDrag,
  onDragEnd,
}: {
  longitude: number;
  latitude: number;
  children?: ReactNode;
  draggable?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onDragStart?: (lngLat: LngLat) => void;
  onDrag?: (lngLat: LngLat) => void;
  onDragEnd?: (lngLat: LngLat) => void;
}) {
  const { map, isLoaded } = useMap();
  const markerRef = useRef<Marker | null>(null);
  const markerElementRef = useRef<HTMLDivElement | null>(null);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (!map || !isLoaded) return;

    // Create marker element container
    const el = document.createElement("div");
    el.style.cursor = "pointer";
    markerElementRef.current = el;

    // Create marker
    markerRef.current = new Marker({
      element: el,
      draggable,
    })
      .setLngLat([longitude, latitude])
      .addTo(map);

    // Event handlers
    if (onClick) {
      el.addEventListener("click", onClick);
    }
    if (onMouseEnter) {
      el.addEventListener("mouseenter", onMouseEnter);
    }
    if (onMouseLeave) {
      el.addEventListener("mouseleave", onMouseLeave);
    }

    // Drag handlers
    if (onDragStart) {
      markerRef.current.on("dragstart", () => {
        onDragStart(markerRef.current!.getLngLat());
      });
    }
    if (onDrag) {
      markerRef.current.on("drag", () => {
        onDrag(markerRef.current!.getLngLat());
      });
    }
    if (onDragEnd) {
      markerRef.current.on("dragend", () => {
        onDragEnd(markerRef.current!.getLngLat());
      });
    }

    forceUpdate();

    return () => {
      if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
      markerElementRef.current = null;
    };
  }, [
    map,
    isLoaded,
    longitude,
    latitude,
    draggable,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onDragStart,
    onDrag,
    onDragEnd,
  ]);

  // Update position when coordinates change
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLngLat([longitude, latitude]);
    }
  }, [longitude, latitude]);

  if (!isLoaded || !markerElementRef.current) return null;

  return (
    <MarkerContext.Provider
      value={{
        marker: markerRef.current,
        markerElement: markerElementRef.current,
      }}
    >
      {children}
    </MarkerContext.Provider>
  );
}

function MarkerContent({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const context = useContext(MarkerContext);

  if (!context?.markerElement) return null;

  return createPortal(
    <div data-slot="marker-content" className={cn(className)}>
      {children || (
        <div className="bg-primary size-4 rounded-full border-2 border-white shadow-lg" />
      )}
    </div>,
    context.markerElement,
  );
}

function MarkerPopup({
  children,
  className,
  closeButton = false,
  closeOnClick = true,
}: {
  children?: ReactNode;
  className?: string;
  closeButton?: boolean;
  closeOnClick?: boolean;
}) {
  const context = useContext(MarkerContext);
  const { map } = useMap();
  const popupRef = useRef<Popup | null>(null);
  const popupContainerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  if (!context) {
    throw new Error("MarkerPopup must be used within a MapMarker");
  }

  const { marker, markerElement } = context;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!map || !marker || !markerElement) return;

    // Create popup container (plain, no styling)
    const popupEl = document.createElement("div");
    popupContainerRef.current = popupEl;

    popupRef.current = new Popup({
      closeButton,
      closeOnClick,
      offset: 25,
    })
      .setMaxWidth("none")
      .setDOMContent(popupEl);

    // Toggle popup on marker click
    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (!popupRef.current || !marker) return;

      if (isOpen) {
        popupRef.current.remove();
        setIsOpen(false);
      } else {
        popupRef.current.setLngLat(marker.getLngLat()).addTo(map);
        setIsOpen(true);
      }
    };

    markerElement.addEventListener("click", handleClick);

    // Handle close
    popupRef.current.on("close", () => {
      setIsOpen(false);
    });

    return () => {
      markerElement.removeEventListener("click", handleClick);
      if (popupRef.current) {
        popupRef.current.remove();
        popupRef.current = null;
      }
      popupContainerRef.current = null;
    };
  }, [map, marker, markerElement, closeButton, closeOnClick]);

  if (!popupContainerRef.current) return null;

  return createPortal(
    <div
      className={cn(
        "animate-in fade-in-0 zoom-in-95 bg-popover text-popover-foreground border-border rounded-lg border p-3 text-sm shadow-lg",
        className,
      )}
    >
      {children}
    </div>,
    popupContainerRef.current,
  );
}

function MarkerTooltip({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const context = useContext(MarkerContext);
  const { map } = useMap();
  const tooltipRef = useRef<Popup | null>(null);
  const tooltipContainerRef = useRef<HTMLDivElement | null>(null);

  if (!context) {
    throw new Error("MarkerTooltip must be used within a MapMarker");
  }

  const { marker, markerElement } = context;

  useEffect(() => {
    if (!map || !marker || !markerElement) return;

    // Create tooltip container (plain, no styling)
    const tooltipEl = document.createElement("div");
    tooltipContainerRef.current = tooltipEl;

    tooltipRef.current = new Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 15,
    })
      .setMaxWidth("none")
      .setDOMContent(tooltipEl);

    const handleMouseEnter = () => {
      if (tooltipRef.current && marker) {
        tooltipRef.current.setLngLat(marker.getLngLat()).addTo(map);
      }
    };

    const handleMouseLeave = () => {
      if (tooltipRef.current) {
        tooltipRef.current.remove();
      }
    };

    markerElement.addEventListener("mouseenter", handleMouseEnter);
    markerElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      markerElement.removeEventListener("mouseenter", handleMouseEnter);
      markerElement.removeEventListener("mouseleave", handleMouseLeave);
      if (tooltipRef.current) {
        tooltipRef.current.remove();
        tooltipRef.current = null;
      }
      tooltipContainerRef.current = null;
    };
  }, [map, marker, markerElement]);

  if (!tooltipContainerRef.current) return null;

  return createPortal(
    <div
      className={cn(
        "animate-in fade-in-0 zoom-in-95 bg-foreground text-background rounded-md px-2 py-1 text-xs shadow-md",
        className,
      )}
    >
      {children}
    </div>,
    tooltipContainerRef.current,
  );
}

function MarkerLabel({
  children,
  className,
  position = "top",
}: {
  children?: ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}) {
  const context = useContext(MarkerContext);

  if (!context?.markerElement) return null;

  const positionClasses = {
    top: "-top-8 left-1/2 -translate-x-1/2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return createPortal(
    <div
      data-slot="marker-label"
      className={cn(
        "bg-background text-foreground border-border pointer-events-none absolute rounded-md border px-2 py-1 text-xs font-medium whitespace-nowrap shadow-sm",
        positionClasses[position],
        className,
      )}
    >
      {children}
    </div>,
    context.markerElement,
  );
}

// ============================================================================
// MapControls Component
// ============================================================================

function MapControls({
  position = "bottom-right",
  showZoom = true,
  showCompass = false,
  showLocate = false,
  showFullscreen = false,
  onLocate,
  className,
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  showZoom?: boolean;
  showCompass?: boolean;
  showLocate?: boolean;
  showFullscreen?: boolean;
  onLocate?: (coords: { lng: number; lat: number }) => void;
  className?: string;
}) {
  const { map } = useMap();

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  const handleZoomIn = () => {
    if (map) map.zoomIn();
  };

  const handleZoomOut = () => {
    if (map) map.zoomOut();
  };

  const handleResetNorth = () => {
    if (map) map.resetNorth();
  };

  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lng: position.coords.longitude,
            lat: position.coords.latitude,
          };

          if (map) {
            map.flyTo({ center: [coords.lng, coords.lat], zoom: 14 });
          }

          if (onLocate) {
            onLocate(coords);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    }
  };

  const handleFullscreen = () => {
    const container = map?.getContainer();
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      data-slot="map-controls"
      className={cn(
        "absolute z-10 flex flex-col gap-2",
        positionClasses[position],
        className,
      )}
    >
      {showZoom && (
        <div className="bg-background border-border flex flex-col overflow-hidden rounded-lg border shadow-md">
          <button
            type="button"
            onClick={handleZoomIn}
            className="hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center border-b transition-colors"
            aria-label="Zoom in"
          >
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            className="hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center transition-colors"
            aria-label="Zoom out"
          >
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 11h16v2H4z" />
            </svg>
          </button>
        </div>
      )}

      {showCompass && (
        <button
          type="button"
          onClick={handleResetNorth}
          className="bg-background border-border hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center rounded-lg border shadow-md transition-colors"
          aria-label="Reset north"
        >
          <svg
            className="size-4 -scale-x-100"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 6H8v12h2v2H6V4h4v2Zm2 12h-2v-2h2v2Zm6-2h-6v-2h4v-2h2v4Zm-2-4h-2v-2h2v2Zm-2-2h-2V8h2v2Zm-2-2h-2V6h2v2Z" />
          </svg>
        </button>
      )}

      {showLocate && (
        <button
          type="button"
          onClick={handleLocate}
          className="bg-background border-border hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center rounded-lg border shadow-md transition-colors"
          aria-label="Locate me"
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15 19h-2v4h-2v-4H9v-2h6v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 15H5v-2H1v-2h4V9h2v6Zm6 0h-2v-2h2v2Zm6-4h4v2h-4v2h-2V9h2v2Zm-8 2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2V9h2v2ZM9 9H7V7h2v2Zm8 0h-2V7h2v2Zm-4-4h2v2H9V5h2V1h2v4Z" />
          </svg>
        </button>
      )}

      {showFullscreen && (
        <button
          type="button"
          onClick={handleFullscreen}
          className="bg-background border-border hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center rounded-lg border shadow-md transition-colors"
          aria-label="Toggle fullscreen"
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 22H4v-2h4v2Zm12 0h-4v-2h4v2ZM4 20H2v-4h2v4Zm18 0h-2v-4h2v4Zm-6-3H8v-2h8v2Zm-8-2H6V9h2v6Zm10 0h-2V9h2v6Zm-2-6H8V7h8v2ZM4 8H2V4h2v4Zm18 0h-2V4h2v4ZM8 4H4V2h4v2Zm12 0h-4V2h4v2Z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}

// ============================================================================
// MapPopup Component (Standalone)
// ============================================================================

function MapPopup({
  longitude,
  latitude,
  children,
  className,
  closeButton = true,
  onClose,
}: {
  longitude: number;
  latitude: number;
  children?: ReactNode;
  className?: string;
  closeButton?: boolean;
  onClose?: () => void;
}) {
  const { map, isLoaded } = useMap();
  const popupRef = useRef<Popup | null>(null);
  const popupContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!map || !isLoaded) return;

    const popupEl = document.createElement("div");
    popupContainerRef.current = popupEl;

    popupRef.current = new Popup({
      closeButton,
      closeOnClick: true,
    })
      .setMaxWidth("none")
      .setLngLat([longitude, latitude])
      .setDOMContent(popupEl)
      .addTo(map);

    if (onClose) {
      popupRef.current.on("close", onClose);
    }

    return () => {
      if (popupRef.current) {
        popupRef.current.remove();
        popupRef.current = null;
      }
      popupContainerRef.current = null;
    };
  }, [map, isLoaded, longitude, latitude, closeButton, onClose]);

  if (!popupContainerRef.current) return null;

  return createPortal(
    <div
      className={cn(
        "animate-in fade-in-0 zoom-in-95 bg-popover text-popover-foreground border-border rounded-lg border p-3 text-sm shadow-lg",
        className,
      )}
    >
      {children}
    </div>,
    popupContainerRef.current,
  );
}

// ============================================================================
// MapRoute Component
// ============================================================================

function MapRoute({
  id,
  coordinates,
  color = "#3b82f6",
  width = 3,
  opacity = 1,
  dashArray,
  interactive = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  coordinates: [number, number][];
  color?: string;
  width?: number;
  opacity?: number;
  dashArray?: number[];
  interactive?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;

    const sourceId = `route-${id}`;
    const layerId = `route-layer-${id}`;

    // Add source
    if (!map.getSource(sourceId)) {
      map.addSource(sourceId, {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      });
    }

    // Add layer
    if (!map.getLayer(layerId)) {
      map.addLayer({
        id: layerId,
        type: "line",
        source: sourceId,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": color,
          "line-width": width,
          "line-opacity": opacity,
          ...(dashArray && { "line-dasharray": dashArray }),
        },
      });
    }

    // Event handlers
    if (interactive) {
      if (onClick) {
        map.on("click", layerId, onClick);
      }
      if (onMouseEnter) {
        map.on("mouseenter", layerId, () => {
          map.getCanvas().style.cursor = "pointer";
          onMouseEnter();
        });
      }
      if (onMouseLeave) {
        map.on("mouseleave", layerId, () => {
          map.getCanvas().style.cursor = "";
          onMouseLeave();
        });
      }
    }

    return () => {
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
      }
      if (map.getSource(sourceId)) {
        map.removeSource(sourceId);
      }
    };
  }, [
    map,
    isLoaded,
    id,
    coordinates,
    color,
    width,
    opacity,
    dashArray,
    interactive,
    onClick,
    onMouseEnter,
    onMouseLeave,
  ]);

  return null;
}

// ============================================================================
// MapClusterLayer Component
// ============================================================================

function MapClusterLayer<T = unknown>({
  data,
  clusterRadius = 50,
  clusterMaxZoom = 14,
  clusterColors = ["#51bbd6", "#f1f075", "#f28cb1"],
  clusterThresholds = [100, 750],
  pointColor = "#3b82f6",
  onPointClick,
  onClusterClick,
}: {
  data: GeoJSON.FeatureCollection<GeoJSON.Point, T> | string;
  clusterRadius?: number;
  clusterMaxZoom?: number;
  clusterColors?: [string, string, string];
  clusterThresholds?: [number, number];
  pointColor?: string;
  onPointClick?: (
    feature: GeoJSON.Feature<GeoJSON.Point, T>,
    lngLat: LngLat,
  ) => void;
  onClusterClick?: (clusterId: number, lngLat: LngLat) => void;
}) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;

    const sourceId = "clusters";
    const clusterLayerId = "clusters-layer";
    const clusterCountLayerId = "cluster-count";
    const pointLayerId = "unclustered-point";

    // Add source
    map.addSource(sourceId, {
      type: "geojson",
      data:
        typeof data === "string" ? data : (data as GeoJSON.FeatureCollection),
      cluster: true,
      clusterMaxZoom,
      clusterRadius,
    });

    // Add cluster circles
    map.addLayer({
      id: clusterLayerId,
      type: "circle",
      source: sourceId,
      filter: ["has", "point_count"],
      paint: {
        "circle-color": [
          "step",
          ["get", "point_count"],
          clusterColors[0],
          clusterThresholds[0],
          clusterColors[1],
          clusterThresholds[1],
          clusterColors[2],
        ],
        "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
        "circle-opacity": 0.8,
      },
    });

    // Add cluster count
    map.addLayer({
      id: clusterCountLayerId,
      type: "symbol",
      source: sourceId,
      filter: ["has", "point_count"],
      layout: {
        "text-field": "{point_count_abbreviated}",
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 12,
      },
      paint: {
        "text-color": "#ffffff",
      },
    });

    // Add unclustered points
    map.addLayer({
      id: pointLayerId,
      type: "circle",
      source: sourceId,
      filter: ["!", ["has", "point_count"]],
      paint: {
        "circle-color": pointColor,
        "circle-radius": 6,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#fff",
      },
    });

    // Click handlers
    if (onClusterClick) {
      map.on("click", clusterLayerId, (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: [clusterLayerId],
        });

        if (features.length > 0) {
          const clusterId = features[0].properties?.cluster_id;
          const source = map.getSource(sourceId) as GeoJSONSource;

          source
            .getClusterExpansionZoom(clusterId)
            .then((zoom) => {
              const coordinates = (
                features[0].geometry as GeoJSON.Point
              ).coordinates.slice() as [number, number];

              map.easeTo({
                center: coordinates,
                zoom,
              });

              onClusterClick(
                clusterId,
                new LngLat(coordinates[0], coordinates[1]),
              );
            })
            .catch((err) => {
              console.error("Error getting cluster expansion zoom:", err);
            });
        }
      });
    }

    if (onPointClick) {
      map.on("click", pointLayerId, (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0] as unknown as GeoJSON.Feature<
            GeoJSON.Point,
            T
          >;
          const coordinates = feature.geometry.coordinates.slice() as [
            number,
            number,
          ];

          onPointClick(feature, new LngLat(coordinates[0], coordinates[1]));
        }
      });
    }

    // Cursor
    map.on("mouseenter", clusterLayerId, () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", clusterLayerId, () => {
      map.getCanvas().style.cursor = "";
    });
    map.on("mouseenter", pointLayerId, () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", pointLayerId, () => {
      map.getCanvas().style.cursor = "";
    });

    return () => {
      if (map.getLayer(pointLayerId)) map.removeLayer(pointLayerId);
      if (map.getLayer(clusterCountLayerId))
        map.removeLayer(clusterCountLayerId);
      if (map.getLayer(clusterLayerId)) map.removeLayer(clusterLayerId);
      if (map.getSource(sourceId)) map.removeSource(sourceId);
    };
  }, [
    map,
    isLoaded,
    data,
    clusterRadius,
    clusterMaxZoom,
    clusterColors,
    clusterThresholds,
    pointColor,
    onPointClick,
    onClusterClick,
  ]);

  return null;
}

export {
  MapClusterLayer,
  MapComponent,
  MapControls,
  MapMarker,
  MapPopup,
  MapRoute,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
  MarkerTooltip,
  useMap,
};
