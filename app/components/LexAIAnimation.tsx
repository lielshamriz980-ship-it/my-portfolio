"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LexAIAnimationProps {
  texts: string[];
  className?: string;
}

export function LexAIAnimation({ texts, className = "" }: LexAIAnimationProps) {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let textIndex = texts.length - 1;
    let lastTime = Date.now();
    let morph = 0;
    let cooldown = 2.8;
    let particleId = 0;

    const setMorph = (fraction: number) => {
      const t1 = text1Ref.current;
      const t2 = text2Ref.current;
      if (!t1 || !t2) return;
      t2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      t2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      const f1 = 1 - fraction;
      t1.style.filter = `blur(${Math.min(8 / f1 - 8, 100)}px)`;
      t1.style.opacity = `${Math.pow(f1, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current) {
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
      if (text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
      }
    };

    if (text1Ref.current) text1Ref.current.textContent = texts[texts.length - 1];
    if (text2Ref.current) text2Ref.current.textContent = texts[0];

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const now = Date.now();
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const wasInCooldown = cooldown > 0;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (wasInCooldown) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current)
            text1Ref.current.textContent = texts[textIndex % texts.length];
          if (text2Ref.current)
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];

          // Create particles on transition
          const newParticles = Array.from({ length: 6 }).map(() => ({
            id: particleId++,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }));
          setParticles(prev => [...prev, ...newParticles]);
          setTimeout(() => setParticles(p => p.slice(-6)), 600);
        }
        morph -= cooldown;
        cooldown = 0;
        let fraction = morph / 1.4;
        if (fraction > 1) {
          cooldown = 2.8;
          fraction = 1;
        }
        setMorph(fraction);
      } else {
        doCooldown();
      }
    };

    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [texts]);

  const longest = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span className={`relative inline-block mx-auto ${className}`}>
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.4), inset 0 0 20px rgba(79, 70, 229, 0.1); }
          50% { box-shadow: 0 0 40px rgba(79, 70, 229, 0.6), inset 0 0 30px rgba(79, 70, 229, 0.2); }
        }
        @keyframes particle-pop {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0); }
        }
        .lex-glow {
          animation: glow-pulse 3s ease-in-out infinite;
          padding: 0 12px;
          border-radius: 12px;
        }
      `}</style>

      {/* Particles */}
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute pointer-events-none text-xs font-bold"
          style={{
            top: "50%",
            left: "50%",
            "--tx": `${p.x}px`,
            "--ty": `${p.y}px`,
            animation: "particle-pop 0.6s ease-out forwards",
            color: "#4F46E5",
            opacity: 0.7,
          } as any}>
          ✨
        </span>
      ))}

      {/* Invisible placeholder */}
      <span className="invisible select-none pointer-events-none whitespace-nowrap" aria-hidden="true">
        {longest}
      </span>

      {/* Morphing overlay with glow */}
      <span
        className="absolute top-0 bottom-0 left-0 right-0 lex-glow"
        style={{ filter: "url(#gooey-threshold)" }}
      >
        <span
          ref={text1Ref}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          aria-hidden="true"
          style={{ opacity: "0%", color: "#4F46E5", fontWeight: "900" }}
        />
        <span
          ref={text2Ref}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          style={{ color: "#4F46E5", fontWeight: "900" }}
        />
      </span>

      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="gooey-threshold">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="coloredBlur" />
            <feComponentTransfer in="coloredBlur">
              <feFuncA type="discrete" tableValues="0 .5 .6 .7 .8 .9 1 1 1 1" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </span>
  );
}
