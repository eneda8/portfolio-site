import React from "react";

// Minimal typewriter effect component (no external deps)
// Props: steps - array like ["TEXT1", ms, "TEXT2", ms, ...]
// loop - number of times to loop (0 for infinite)
export default function Typewriter({ steps = [], loop = 0, className = "" }) {
  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(0); // index in steps array (text or delay)
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [charIndex, setCharIndex] = React.useState(0);
  const loopRef = React.useRef(0);

  React.useEffect(() => {
    if (!steps || steps.length === 0) return;

    let mounted = true;
    const currentStep = steps[index % steps.length];
    const isDelay = typeof currentStep === 'number';

    if (isDelay) {
      const timer = setTimeout(() => {
        if (!mounted) return;
        setIndex(i => i + 1);
      }, currentStep);
      return () => { mounted = false; clearTimeout(timer); };
    }

    const fullText = String(currentStep);
    const speed = 80;

    const tick = () => {
      setCharIndex(ci => {
        const next = isDeleting ? ci - 1 : ci + 1;
        if (!mounted) return next;

        if (!isDeleting && next <= fullText.length) {
          setText(fullText.slice(0, next));
        }

        if (!isDeleting && next === fullText.length) {
          // finished typing -> next is a delay element
          setIndex(i => i + 1);
          setIsDeleting(false);
          return next;
        }

        if (isDeleting && next === 0) {
          // finished deleting -> advance
          setIsDeleting(false);
          setIndex(i => i + 1);
          return 0;
        }

        return next;
      });
    };

    const interval = setInterval(tick, speed);
    return () => { mounted = false; clearInterval(interval); };
  }, [index, steps, isDeleting]);

  React.useEffect(() => {
    if (!steps || steps.length === 0) return;
    const cycleCount = Math.floor(index / Math.max(steps.length, 1));
    if (loop > 0 && cycleCount >= loop) {
      // stop at last text
      const lastText = steps[steps.length - (typeof steps[steps.length-1] === 'number' ? 2 : 1)];
      setText(String(lastText));
    }
  }, [index, loop, steps]);

  return <span className={className}>{text}</span>;
}
