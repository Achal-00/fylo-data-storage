import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

export default function Content() {
  return (
    <div className="absolute place-self-center grid gap-[2em] w-11/12 landscape:xl:w-2/3 landscape:grid-cols-[0.7fr_1fr]">
      <TopSection />
      <BottomSection />
    </div>
  );
}
