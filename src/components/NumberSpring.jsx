'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

function NumberSpring({ n }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const props = useSpring({
    from: { number: 0 },
    to: { number: isVisible ? n : 0 },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Customize visibility threshold here
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <animated.div ref={ref}>
      {props.number.to(n => n.toFixed(0))}
    </animated.div>
  );
}

export default NumberSpring;