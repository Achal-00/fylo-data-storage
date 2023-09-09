export default function TopSection() {
  return (
    <div className="bg-dark-blue p-[3em] grid gap-[2em] rounded-[1em] rounded-tr-[8em]">
      <img src="logo.svg" alt="" className="w-[10.5em]" />
      <div className="flex gap-[1em]">
        <div className="bg-very-dark-blue p-[1em] grid place-content-center rounded-[0.5em]">
          <img src="icon-document.svg" alt="" className="w-[1.5em]" />
        </div>
        <div className="bg-very-dark-blue p-[1em] grid place-content-center rounded-[0.5em]">
          <img src="icon-folder.svg" alt="" className="w-[1.8em]" />
        </div>
        <div className="bg-very-dark-blue p-[1em] grid place-content-center rounded-[0.5em]">
          <img src="icon-upload.svg" alt="" className="w-[1.8em]" />
        </div>
      </div>
    </div>
  );
}
