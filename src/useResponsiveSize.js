import { useState, useEffect } from "react";

const useResponsiveSize = () => {
  const [size, setSize] = useState("desktop");

  useEffect(() => {
    const handler1 = e => setSize(s => e.matches ? "desktop" : s);
    let d = window.matchMedia("(min-width: 1100px)");
    setSize(s => d.matches ? "desktop" : s);
    d.addEventListener('change', handler1);

    const handler2 = e => setSize(s => e.matches ? "tablet" : s);
    let t = window.matchMedia("(min-width: 600px) and (max-width: 1100px)");
    setSize(s => t.matches ? "tablet" : s);
    t.addEventListener('change', handler2);

    const handler3 = e => setSize(s => e.matches ? "mobile" : s);
    let m = window.matchMedia("(max-width: 600px)");
    setSize(s => m.matches ? "mobile" : s);
    m.addEventListener('change', handler3);
  }, []);

  return size;
}

export default useResponsiveSize;