import { createRoot, createSignal, onMount } from "solid-js";

interface Props {
  category?: string;
}

function RandomFact(props: Props) {
  return createRoot((dispose) => {
    const [fact, setFact] = createSignal("Loading...");
    const [isLoading, setIsLoading] = createSignal(true);

    const fetchFact = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const data = await response.json();
        setFact(data.text);
      } catch (error) {
        setFact("Failed to load fact. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    onMount(() => {
      fetchFact();
    });

    return (
      <div class="flex flex-col gap-4">
        <p class="text-[var(--text-primary)] text-sm font-light">{fact()}</p>
        <button
          onClick={fetchFact}
          disabled={isLoading()}
          class="w-fit"
        >
          {isLoading() ? "Loading..." : "New Fact"}
        </button>
      </div>
    );
  });
}

export default RandomFact; 