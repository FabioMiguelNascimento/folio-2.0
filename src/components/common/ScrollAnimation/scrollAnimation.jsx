import  { useState, useEffect, useRef } from "react";

function ScrollAnimation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scroller = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition <= 10) {
      scroller.current.classList.add("visible");
    } else {
      scroller.current.classList.remove("visible");
    }
  }, [scrollPosition]);

  return <div ref={scroller} className="scrollAnimation">
    <div className="circle"></div>
  </div>;
}

export default ScrollAnimation;
