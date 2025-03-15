import { useEffect, useState, useMemo } from "react";
export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(true);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          // Add threshold to detect partial visibility
          threshold: 0.1,
          // Add root margin to detect elements slightly outside viewport
          rootMargin: "50px",
        },
      ),
    [],
  );

  useEffect(() => {
    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.disconnect();
      }
    };
  }, [observer, ref]);

  return isIntersecting;
}
