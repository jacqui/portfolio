export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            Hello.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600">
            I'm a data journalist who has spent my career building stories,
            tools, and dashboards for newsrooms.
          </p>
        </div>
      </main>
    </div>
  );
}
