

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-linear-to-b from-sky-100 to-white font-sans dark:bg-black">
      <div className="w-full max-w-2xl">
        <div className="text-center space-y-1">
          <h1 className="font-semibold text-4xl">Snapshot NFTs</h1>
          <p>support with 4+ chain & importing data into file</p>
        </div>
        <div className="mt-4 w-full">
          <div className="flex items-center rounded-xl border border-gray-300 bg-white pl-3 h-12">
            <div className="shrink-0 text-base text-gray-500 select-none"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg></div>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Contract Address"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
            <div className="flex items-center justify-center focus-within:relative border-l border-gray-300 px-2">
              <select
                id="currency"
                name="currency"
                aria-label="Currency"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 text-gray-500 placeholder:text-gray-400 outline-none text-sm"
              >
                <option>BASE</option>
                <option>ETH</option>
                <option>HyperEVM</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className=""><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
