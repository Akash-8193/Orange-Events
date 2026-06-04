import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export function Counter({ target, duration = 2, className = "", suffix = "" }: CounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!numberRef.current) return;
      
      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: target,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerHTML = Math.floor(obj.val).toString() + suffix;
          }
        }
      });
    }, numberRef);

    return () => ctx.revert();
  }, [target, duration, suffix]);

  return <span ref={numberRef} className={className}>0{suffix}</span>;
}
