export default function BottomSection() {
  return (
    <div className="self-end bg-dark-blue py-[2em] px-[2.5em] grid grid-cols-[1fr_1fr] gap-[1em] rounded-[1em] relative">
      <p className="text-greyish-blue text-center landscape:text-left col-span-2">
        You've used{" "}
        <span className="text-pale-blue font-extrabold">815 GB</span> of your
        storage
      </p>
      <input
        type="range"
        value="80"
        className="slider w-full appearance-none bg-very-dark-blue rounded-full col-span-2"
      />
      <p className="text-pale-blue font-extrabold">0 GB</p>
      <p className="text-pale-blue font-extrabold justify-self-end">1000 GB</p>
      <div className="absolute bg-white flex gap-[0.5em] rounded-[1em] lg:rounded-br-[0em] px-[1em] py-[0.5em] items-center font-extrabold portrait:top-full portrait:left-1/2 -translate-x-1/2 -translate-y-1/2 landscape:top-[-1em] landscape:right-[-1.5em] landscape:after:absolute landscape:after:w-0 landscape:after:h-0 landscape:after:border-l-[1.4em] landscape:after:border-l-transparent landscape:after:border-t-[1.4em] landscape:after:border-t-white landscape:after:border-r-[1.4em] landscape:after:border-r-transparent landscape:after:rotate-90 landscape:after:top-full landscape:after:left-[92%] landscape:after:-translate-x-1/2 landscape:after:-translate-y-1/2">
        <p className="text-very-dark-blue text-[200%]">185</p>
        <p className="text-greyish-blue text-[75%]">GB LEFT</p>
      </div>
    </div>
  );
}
