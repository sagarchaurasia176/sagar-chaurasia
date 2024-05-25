import React from "react";
import Typed from "typed.js";

export function TypedJS() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<b> A FullStack Developer/> </b>"],
      smartBackspace: true,
      typeSpeed:140,
      loopCount:Infinity,
    
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="App">
      <span className=" text-3xl" ref={el} />
    </div>
  );
}
