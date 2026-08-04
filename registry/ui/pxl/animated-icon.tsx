import { motion, type TargetAndTransition } from "motion/react";
import type { ComponentType, SVGProps } from "react";

import { cn } from "@/lib/utils";

export const animations = {
  /**
   * pulse — Rhythmic heartbeat scale. Ideal for: likes, presence, health,
   * active states, anything that "lives".
   */
  pulse: {
    animate: {
      scale: [1, 1.2, 1, 1.15, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      },
    },
  },

  /**
   * shake — Urgent lateral vibration. Ideal for: alerts, errors, warnings,
   * rejections, anything that demands attention or signals danger.
   */
  shake: {
    animate: {
      x: [0, -4, 4, -4, 4, -2, 2, 0],
      rotate: [0, -6, 6, -6, 6, -3, 3, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      },
    },
  },

  /**
   * spin — Continuous rotation. Ideal for: loading, searching, processing,
   * timers, anything that implies ongoing activity.
   */
  spin: {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },

  /**
   * bounce — Vertical drop and rebound. Ideal for: notifications, new items,
   * arrivals, dropped pins, incoming events.
   */
  bounce: {
    animate: {
      y: [0, -8, 0, -4, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 1.8,
        ease: "easeOut",
      },
    },
  },

  /**
   * blink — Opacity fade in/out. Ideal for: idle states, standby, awaiting
   * input, eye/visibility metaphors, low-priority attention signals.
   */
  blink: {
    animate: {
      opacity: [1, 0.1, 1, 0.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      },
    },
  },

  /**
   * swing — Pendular rotation around top-center. Ideal for: bells, hanging
   * objects, bugs, anything that swings or oscillates.
   */
  swing: {
    animate: {
      rotate: [0, 18, -14, 10, -6, 3, 0],
      transition: {
        duration: 1.0,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      },
    },
  },

  /**
   * pop — Quick overshoot scale. Ideal for: sparkles, highlights, new badges,
   * featured content, "tada" moments without full rotation.
   */
  pop: {
    animate: {
      scale: [1, 1.35, 0.9, 1.1, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2.5,
        ease: "backOut",
      },
    },
  },

  /**
   * float — Gentle vertical drift. Ideal for: AI features, magic, resting
   * states, ambient presence, anything that feels weightless or ethereal.
   */
  float: {
    animate: {
      y: [0, -5, 0, -3, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  /**
   * tada — Celebratory scale + wiggle combo. Ideal for: achievements,
   * birthdays, success moments, happy robot faces, party content.
   */
  tada: {
    animate: {
      scale: [1, 0.9, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
      rotate: [0, -3, 3, -3, 3, -3, 3, -3, 3, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  },

  /**
   * ping — Expand and fade out, like a radar pulse. Ideal for: sirens,
   * full-battery indicators, "online" dots, anything that broadcasts presence.
   */
  ping: {
    animate: {
      scale: [1, 1.4, 1],
      opacity: [1, 0, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeOut",
      },
    },
  },
} satisfies Record<
  string,
  { animate: TargetAndTransition }
>;

export type Animation = keyof typeof animations;

type Props = {
  /**
   * Icon to render.
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * Name of the animation preset to apply.
   * If omitted, the icon renders statically.
   */
  animation?: Animation;
} & SVGProps<SVGSVGElement>;

export default function AnimatedIcon({ animation, className, icon: Icon, ...props }: Props) {
  if (!animation) {
    return (
      <span className={cn("inline-flex", className)}>
        <Icon {...props} aria-hidden="true" />
      </span>
    );
  }

  const animDef = animations[animation];

  return (
    <motion.span
      className={cn("inline-flex", className)}
      animate={animDef.animate}
    >
      <Icon {...props} aria-hidden="true" />
    </motion.span>
  );
}
