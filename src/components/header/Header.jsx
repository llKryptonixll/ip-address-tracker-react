const Header = () => {
  return (
    <header className="z-20 relative place-self-center grid place-items-center pt-10 pl-6 pr-6 gap-10 w-full">
      <h1 className="text-white font-medium sm:text-4xl text-2xl">IP Address Tracker</h1>
      <div className="flex justify-center w-full">
        <input className="h-[60px] max-w-[500px] tracking-tighter placeholder:tracking-normal sm:placeholder:text-xl placeholder:text-sm w-full rounded-l-2xl pl-6 focus:outline-none text-very_dark_gray" placeholder="Search for any IP address or domain" aria-label="enter your ip address" type="text" />
        <button className="h-[60px] w-[60px] bg-black grid place-items-center rounded-r-2xl hover:bg-very_dark_gray transition-colors" aria-label="submit your input">
          <img src="images/icon-arrow.svg" alt="arrow-icon" />
        </button>
      </div>
      <div className="lg:flex lg:space-x-10 grid sm:gap-10 gap-5 sm:grid-cols-2 grid-cols-1 max-w-[1100px] w-full min-h-[160px] bg-white p-6 justify-between rounded-2xl sm:text-left text-center">
        <div className="grid sm:place-content-start sm:gap-2 gap-1">
          <span className="text-dark_gray font-bold sm:text-sm text-[0.6rem] tracking-widest">IP ADDRESS</span>
          <span className="text-very_dark_gray sm:text-2xl text-xl font-bold">192.212.174.101</span>
        </div>
        <div className="grid sm:place-content-start sm:gap-2 gap-1 lg:border-l-2 lg:pl-8">
          <span className="text-dark_gray font-bold sm:text-sm text-[0.6rem] tracking-widest">LOCATION</span>
          <span className="text-very_dark_gray sm:text-2xl text-xl font-bold">Brooklyn, NY 10001</span>
        </div>
        <div className="grid sm:place-content-start sm:gap-2 gap-1 lg:border-l-2 lg:pl-8">
          <span className="text-dark_gray font-bold sm:text-sm text-[0.6rem] tracking-widest">TIMEZONE</span>
          <span className="text-very_dark_gray sm:text-2xl text-xl font-bold">UTC -05:00</span>
        </div>
        <div className="grid sm:place-content-start sm:gap-2 gap-1 lg:border-l-2 lg:pl-8">
          <span className="text-dark_gray font-bold sm:text-sm text-[0.6rem] tracking-widest">ISP</span>
          <span className="text-very_dark_gray sm:text-2xl text-xl font-bold">SpaceX Starlink</span>
        </div>
      </div>
    </header>
  )
}

export default Header