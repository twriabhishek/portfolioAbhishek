import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const orbs = [
  {
    id: "primary",
    className:
      "left-[10%] top-[8%] h-[28rem] w-[28rem] bg-accent/20 blur-[100px]",
    duration: 22,
    delay: 0,
  },
  {
    id: "secondary",
    className:
      "right-[5%] top-[35%] h-[24rem] w-[24rem] bg-indigo-400/15 blur-[90px]",
    duration: 26,
    delay: 2,
  },
  {
    id: "tertiary",
    className:
      "bottom-[15%] left-[35%] h-[20rem] w-[20rem] bg-sky-400/15 blur-[80px]",
    duration: 20,
    delay: 4,
  },
];

export function AnimatedBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 28 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 40;
      const y = (event.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion, mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.06),transparent_55%)]" />

      <div className="animated-grid absolute inset-0 opacity-[0.35]" />

      <motion.div
        className="absolute inset-0"
        style={reducedMotion ? undefined : { x: springX, y: springY }}
      >
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className={`absolute rounded-full ${orb.className} ${
              reducedMotion ? "" : "animate-float-orb"
            }`}
            style={
              reducedMotion
                ? undefined
                : {
                    animationDuration: `${orb.duration}s`,
                    animationDelay: `${orb.delay}s`,
                  }
            }
          />
        ))}
      </motion.div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
