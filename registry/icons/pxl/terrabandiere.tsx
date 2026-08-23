import type { SVGProps } from "react";

export default {
  sm: {
    France(props: SVGProps<SVGSVGElement>) {
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>France</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="11"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="15"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path id="Blue" fill="#142269" d="m 1,1 h 4 v 10 h -4 z" />
            <path id="White" fill="#ffffff" d="m 5,1 h 6 v 10 h -6 z" />
            <path id="Red" fill="#d01515" d="m 11,1 h 4 v 10 h -4 z" />
          </g>
        </svg>
      );
    },
    Germany(props: SVGProps<SVGSVGElement>) {
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>Germany</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="11"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="15"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path id="Black" fill="#000000" d="m 1,1 h 14 v 3 h -14 z" />
            <path id="Red" fill="#fd1c1c" d="m 1,4 h 14 v 4 h -14 z" />
            <path id="Yellow" fill="#fff700" d="m 1,8 h 14 v 3 h -14 z" />
          </g>
        </svg>
      );
    },
    Italy(props: SVGProps<SVGSVGElement>) {
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>Italy</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="11"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="15"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path id="Green" fill="#0a8f19" d="m 1,1 h 4 v 10 h -4 z" />
            <path id="White" fill="#ffffff" d="m 5,1 h 6 v 10 h -6 z" />
            <path id="Red" fill="#d01515" d="m 11,1 h 4 v 10 h -4 z" />
          </g>
        </svg>
      );
    },
    Spain(props: SVGProps<SVGSVGElement>) {
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>Spain</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="11"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="15"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path
              id="yellowStripe"
              fill="#fff700"
              d="m 1,1 h 14 v 10 h -14 z"
            />
            <path
              id="redStripes"
              fill="#d01515"
              d="M 1 1 L 1 3 L 15 3 L 15 1 L 1 1 z M 1 9 L 1 11 L 15 11 L 15 9 L 1 9 z "
            />
            <path
              id="castillaQuarteringBg"
              fill="#d01515"
              d="m 4,5 h 2 v 2 h -2 z"
            />
            <path
              id="castillaQuarteringFg"
              fill="#d99740"
              d="m 4,6 h 1 v 1 h -1 z"
            />
            <path
              id="leonQuarteringBg"
              fill="#ffffff"
              d="m 6,5 h 2 v 2 h -2 z"
            />
            <path
              id="leonQuarteringFg"
              fill="#f2f2f2"
              d="m 7,6 h 1 v 1 h -1 z"
            />
            <path
              id="aragonQuarteringRedStrips"
              fill="#fd1c1c"
              d="M 4 7 L 4 8 L 5 8 L 5 7 L 4 7 z M 5 8 L 5 9 L 6 9 L 6 8 L 5 8 z "
            />
            <path
              id="navarraQuarteringBg"
              fill="#d01515"
              d="m 6,7 v 2 h 1 v -1 h 1 v -1 z"
            />
            <path
              id="leftPillarBorder"
              fill="#f2f2f2"
              d="m 3,5 h 1 v 4 h -1 z"
            />
            <path id="leftPillarBody" fill="#ffffff" d="m 3,6 h 1 v 2 h -1 z" />
            <path
              id="leftPillarRibbon"
              fill="#fd1c1c"
              d="m 3,6 h 1 v 1 h -1 z"
            />
            <path
              id="rightPillarBorder"
              fill="#f2f2f2"
              d="m 8,5 h 1 v 4 h -1 z"
            />
            <path
              id="rightPillarBody"
              fill="#ffffff"
              d="m 8,6 h 1 v 2 h -1 z"
            />
            <path
              id="rightPillarRibbon"
              fill="#fd1c1c"
              d="m 8,6 h 1 v 1 h -1 z"
            />
            <path id="crownLeft" fill="#d99740" d="m 4,3 h 1 v 1 h -1 z" />
            <path
              id="crownRight"
              fill="#d99740"
              d="M 4 3 L 4 4 L 5 4 L 5 3 L 4 3 z M 5 4 L 5 5 L 7 5 L 7 4 L 5 4 z M 7 4 L 8 4 L 8 3 L 7 3 L 7 4 z "
            />
          </g>
        </svg>
      );
    },
    UnitedKingdom(props: SVGProps<SVGSVGElement>) {
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>United Kingdom</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="11"
              width="14"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="15"
              y="1"
              width="1"
              height="10"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path
              id="andrewCrossBg"
              fill="#142269"
              d="m 1,1 h 14 v 10 h -14 z"
            />
            <path
              id="andrewCrossFgTopLeft"
              fill="#ffffff"
              d="m 1,1 v 1 h 1 v 1 h 1 v 1 h 3 v -1 h -1 v -1 h -1 v -1 z"
            />
            <path
              id="andrewCrossFgTopRight"
              fill="#ffffff"
              d="m 15,1 v 1 h -1 v 1 h -1 v 1 h -3 v -1 h 1 v -1 h 1 v -1 z"
            />
            <path
              id="andrewCrossFgBottomLeft"
              fill="#ffffff"
              d="m 6,8 v 1 h -1 v 1 h -1 v 1 h -3 v -1 h 1 v -1 h 1 v -1 z"
            />
            <path
              id="andrewCrossFgBottomRight"
              fill="#ffffff"
              d="m 10,8 v 1 h 1 v 1 h 1 v 1 h 3 v -1 h -1 v -1 h -1 v -1 z"
            />
            <path
              id="georgeCrossBg"
              fill="#ffffff"
              d="m 6,1 v 3 h -5 v 4 h 5 v 3 h 4 v -3 h 5 v -4 h -5 v -3 z"
            />
            <path
              id="georgeCrossFg"
              fill="#d01515"
              d="m 7,1 v 4 h -6 v 2 h 6 v 4 h 2 v -4 h 6 v -2 h -6 v -4 z"
            />
            <path
              id="patrickCrossTopLeft"
              fill="#d01515"
              d="m 5,4 v -1 h -1 v 1 z m -1,-1 v -1 h -1 v 1 z m -1,-1 v -1 h -1 v 1 z"
            />
            <path
              id="patrickCrossTopRight"
              fill="#d01515"
              d="m 11,4 v -1 h 1 v 1 z m 1,-1 v -1 h 1 v 1 z m 1,-1 v -1 h 1 v 1 z"
            />
            <path
              id="patrickCrossBottomLeft"
              fill="#d01515"
              d="m 5,8 v 1 h -1 v -1 z m -1,1 v 1 h -1 v -1 z m -1,1 v 1 h -1 v -1 z"
            />
            <path
              id="patrickCrossBottomRight"
              fill="#d01515"
              d="m 11,8 v 1 h 1 v -1 z m 1,1 v 1 h 1 v -1 z m 1,1 v 1 h 1 v -1 z"
            />
          </g>
        </svg>
      );
    },
  },
  md: {
    France(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>France</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="19"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="31"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path id="Blue" fill="#142269" d="m 1,1 h 10 v 18 h -10 z" />
            <path id="White" fill="#ffffff" d="m 11,1 h 10 v 18 h -10 z" />
            <path id="Red" fill="#d01515" d="m 21,1 h 10 v 18 h -10 z" />
          </g>
        </svg>
      );
    },
    Germany(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>Germany</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="19"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="31"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path id="Black" fill="#000000" d="m 1,1 h 30 v 6 h -30 z" />
            <path id="Red" fill="#fd1c1c" d="m 1,7 h 30 v 6 h -30 z" />
            <path id="Yellow" fill="#fff700" d="m 1,13 h 30 v 6 h -30 z" />
          </g>
        </svg>
      );
    },
    Italy(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>Italy</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="19"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="31"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path id="Green" fill="#0a8f19" d="m 1,1 h 10 v 18 h -10 z" />
            <path id="White" fill="#ffffff" d="m 11,1 h 10 v 18 h -10 z" />
            <path id="Red" fill="#d01515" d="m 21,1 h 10 v 18 h -10 z" />
          </g>
        </svg>
      );
    },
    Spain(props: SVGProps<SVGSVGElement>) {
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>Spain</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="19"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="31"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path id="yellowStripe" fill="#fff700" d="M 1,1 H 31 V 19 H 1 Z" />
            <path
              id="redStripes"
              fill="#d01515"
              d="M 1 1 L 1 5 L 31 5 L 31 1 L 1 1 z M 1 15 L 1 19 L 31 19 L 31 15 L 1 15 z"
            />
            <path
              id="castillaQuarteringBg"
              fill="#d01515"
              d="m 8,8 h 3 v 3 h -3 z"
            />
            <path
              id="castillaQuarteringFg"
              fill="#a6a6a6"
              d="m 9,9 h 1 v 1 h -1 z"
            />
            <path
              id="leonQuarteringBg"
              fill="#ffffff"
              d="m 11,8 h 3 v 3 h -3 z"
            />
            <path
              id="leonQuarteringFg"
              fill="#bfbfbf"
              d="m 12,9 h 1 v 1 h -1 z"
            />
            <path
              id="aragonQuarteringBg"
              fill="#fd1c1c"
              d="M 8 11 L 8 13 L 9 13 L 9 11 L 8 11 z M 10 11 L 10 14 L 11 14 L 11 11 L 10 11 z"
            />
            <path
              id="aragonQuarteringFg"
              fill="#d99740"
              d="m 9,13 h 1 v 1 h -1 z"
            />
            <path
              id="navarraQuarteringBg"
              fill="#d01515"
              d="m 11,11 v 3 h 2 v -1 h 1 v -2 z"
            />
            <path
              id="navarraQuarteringFg"
              fill="#d99740"
              d="m 12,12 h 1 v 1 h -1 z"
            />
            <path id="crownBg" fill="#d01515" d="m 10,6 h 2 v 1 h -2 z" />
            <path
              id="crownFg"
              fill="#d99740"
              d="M 8 6 L 8 7 L 9 7 L 9 6 L 8 6 z M 9 7 L 9 8 L 13 8 L 13 7 L 9 7 z M 13 7 L 14 7 L 14 6 L 13 6 L 13 7 z"
            />

            <path
              id="pillarsBody"
              fill="#ffffff"
              d="M 6 8 L 6 13 L 7 13 L 7 8 L 6 8 z M 15 8 L 15 13 L 16 13 L 16 8 L 15 8 z"
            />
            <path
              id="pillarsBorders"
              fill="#bfbfbf"
              d="M 5 13 L 5 14 L 8 14 L 8 13 L 5 13 z M 14 13 L 14 14 L 17 14 L 17 13 L 14 13 z"
            />
            <path
              id="pillarsRibbons"
              fill="#fd1c1c"
              d="M 6 7 L 6 8 L 7 8 L 7 7 L 6 7 z M 15 7 L 15 8 L 16 8 L 16 7 L 15 7 z M 6 9 L 6 10 L 8 10 L 8 9 L 6 9 z M 14 9 L 14 10 L 16 10 L 16 9 L 14 9 z M 5 11 L 5 12 L 6 12 L 6 11 L 5 11 z M 16 11 L 16 12 L 17 12 L 17 11 L 16 11 z"
            />
          </g>
        </svg>
      );
    },
    UnitedKingdom(props: SVGProps<SVGSVGElement>) {
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
          <title>United Kingdom</title>
          <g id="borders">
            <rect
              id="borderTop"
              x="1"
              y="0"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderLeft"
              x="0"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
            <rect
              id="borderBottom"
              x="1"
              y="19"
              width="30"
              height="1"
              fill="currentColor"
            />
            <rect
              id="borderRight"
              x="31"
              y="1"
              width="1"
              height="18"
              fill="currentColor"
            />
          </g>
          <g id="flag">
            <path
              id="andrewCrossBg"
              fill="#142269"
              d="m 1,1 h 30 v 18 h -30 z"
            />
            <path
              id="georgeCrossBg"
              fill="#ffffff"
              d="m 13,1 v 6 h -12 v 6 h 12 v 6 h 6 v -6 h 12 v -6 h -12 v -6 z"
            />
            <path
              id="georgeCrossFg"
              fill="#d01515"
              d="m 14,1 v 7 h -13 v 4 h 13 v 7 h 4 v -7 h 13 v -4 h -13 v -7 z"
            />
            <path
              id="andrewCrossBgTopLeft"
              fill="#ffffff"
              d="m 1,1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 6 v -1 h -1 v -1 h -1 v -1 h -1 v -1 h -1 v -1 h -1 v -1 z"
            />
            <path
              id="andrewCrossFgTopLeft"
              fill="#d01515"
              d="m 2,1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 3 v -1 h -1 v -1 h -1 v -1 h -1 v -1 h -1 v -1 h -1 v -1 z"
            />
            <path
              id="andrewCrossBgTopRight"
              fill="#ffffff"
              d="m 25,1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h 6 v -1 h 1 v -1 h 1 v -1 h 1 v -1 h 1 v -1 h 1 v -1 z"
            />
            <path
              id="andrewCrossFgTopRight"
              fill="#d01515"
              d="m 26,1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h 3 v -1 h 1 v -1 h 1 v -1 h 1 v -1 h 1 v -1 h 1 v -1 z"
            />
            <path
              id="andrewCrossBgBottomLeft"
              fill="#ffffff"
              d="m 6,13 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h 6 v -1 h 1 v -1 h 1 v -1 h 1 v -1 h 1 v -1 h 1 v -1 z"
            />
            <path
              id="andrewCrossFgBottomLeft"
              fill="#d01515"
              d="m 8,13 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h -1 v 1 h 3 v -1 h 1 v -1 h 1 v -1 h 1 v -1 h 1 v -1 h 1 v -1 z"
            />
            <path
              id="andrewCrossBgBottomRight"
              fill="#ffffff"
              d="m 20,13 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 6 v -1 h -1 v -1 h -1 v -1 h -1 v -1 h -1 v -1 h -1 v -1 z"
            />
            <path
              id="andrewCrossFgBottomRight"
              fill="#d01515"
              d="m 22,13 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 1 v 1 h 3 v -1 h -1 v -1 h -1 v -1 h -1 v -1 h -1 v -1 h -1 v -1 z"
            />
          </g>
        </svg>
      );
    },
  },
};
