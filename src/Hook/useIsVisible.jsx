import { useEffect, useState, useMemo } from "react";

export function useIsVisible(ref, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false); // Start with false

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          rootMargin: "0px",
          threshold: 0.01,
          ...options,
        },
      ),
    [options],
  );

  useEffect(() => {
    const current = ref.current;

    if (current) {
      observer.observe(current);

      // Check initial visibility immediately
      const entries = observer.takeRecords();
      if (entries.length > 0) {
        setIntersecting(entries[0].isIntersecting);
      }
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
}
