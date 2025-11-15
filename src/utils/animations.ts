import { stagger, spring, timeline, type TimelineDefinition } from "motion";

export function initializeCardAnimations(loaderAnimation: TimelineDefinition) {
  const cards = document.querySelectorAll(".card");

  const sequence = [
    loaderAnimation,
    [
      cards,
      { y: ["40%", "0%"], opacity: [0, 1] },
      {
        at: "-0.1",
        duration: 1,
        delay: stagger(0.1),
        easing: spring({ velocity: 100, stiffness: 50, damping: 10 }),
      },
    ],
  ];

  timeline(sequence as TimelineDefinition);
}