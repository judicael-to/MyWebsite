import { type JSX, Show, createSignal, createRoot } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  return createRoot((dispose) => {
    const [isVisible, setIsVisible] = createSignal(false);
    const [clickCount, setClickCount] = createSignal(0);

    const messages = [
      "Hi there!",
      "Clicked again?",
      "Still here?",
      "Persistent, aren't you?",
      "What's up?",
      "Again? Really?",
      "You're curious!",
      "Not cool!",
      "Give it a break!",
      "That's annoying!",
      "Hands off!",
      "No more clicks!",
      "Seriously?!",
      "Ouch! That hurts!",
      "You're persistent!",
      "Why the curiosity?",
      "I'm getting tired!",
      "I'm bored!",
      "Enough's enough!",
      "Find another hobby!",
      "Stop, please!",
      "Okay, last one!",
      "That's it, I'm done!",
    ];

    const currentMessage = () => {
      const count = clickCount();
      if (count >= messages.length) {
        return messages[messages.length - 1];
      }
      return messages[count];
    };

    return (
      <div class="relative inline-block">
        <div
          onMouseDown={() => {
            setIsVisible(!isVisible());
            if (isVisible()) {
              setClickCount((count) => count + 1);
            }
          }}
          onMouseUp={() => {
            setIsVisible(false);
          }}
          onTouchStart={() => {
            setIsVisible(!isVisible());
            if (isVisible()) {
              setClickCount((count) => count + 1);
            }
          }}
          onTouchEnd={() => {
            setIsVisible(false);
          }}
        >
          {props.children}
        </div>

        <Show when={isVisible()}>
          <div class="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-[var(--background)] text-[var(--text-primary)] text-center rounded-lg z-10 border border-[var(--border-color)] whitespace-normal drop-shadow-[3px_3px_0_var(--shadow-color)] after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-[var(--background)] after:border-r after:border-b after:border-[var(--border-color)] after:z-20">
            <p class="w-max">{currentMessage()}</p>
          </div>
        </Show>
      </div>
    );
  });
}

export default Tooltip;
