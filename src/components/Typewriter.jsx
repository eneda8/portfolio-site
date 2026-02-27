import React from "react";

// Typewriter effect: types, pauses, deletes, then types the next title
// steps: ["TEXT1", delayMs, "TEXT2", delayMs, ...]
// loop: number of full cycles (0 = infinite)
export default function Typewriter({ steps = [], loop = 0, className = "" }) {
  const [display, setDisplay] = React.useState("");
  const textRef = React.useRef("");
  const stepRef = React.useRef(0);
  const phaseRef = React.useRef("typing");
  const loopsRef = React.useRef(0);

  React.useEffect(() => {
    if (!steps || steps.length === 0) return;

    const typeSpeed = 80;
    const deleteSpeed = 40;
    let timer;

    function tick() {
      const stepIndex = stepRef.current % steps.length;
      const current = steps[stepIndex];

      if (typeof current === "number") {
        phaseRef.current = "deleting";
        stepRef.current += 1;
        timer = setTimeout(tick, current);
        return;
      }

      const fullText = String(current);

      if (phaseRef.current === "typing") {
        const nextLen = textRef.current.length + 1;
        textRef.current = fullText.slice(0, nextLen);
        setDisplay(textRef.current);

        if (nextLen >= fullText.length) {
          stepRef.current += 1;
        }
        timer = setTimeout(tick, typeSpeed);
      } else if (phaseRef.current === "deleting") {
        textRef.current = textRef.current.slice(0, -1);
        setDisplay(textRef.current);

        if (textRef.current.length === 0) {
          if (stepRef.current >= steps.length) {
            loopsRef.current += 1;
            if (loop > 0 && loopsRef.current >= loop) return;
            stepRef.current = 0;
          }
          phaseRef.current = "typing";
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    }

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [steps, loop]);

  return <span className={className}>{display}</span>;
}
