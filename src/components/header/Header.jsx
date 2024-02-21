import { useState, memo } from "react";

const Header = ({ setUserInput, ipAddressData, fetchData, userInput }) => {
  const [isValidIPAddress, setIsValidIPAddress] = useState(true);
  
  function handleChange(e) {
    setUserInput(e.target.value);
  }
console.log("test");
  function handleClick() {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (userInput === "" || !ipRegex.test(userInput)){
      setIsValidIPAddress(false);
    }
    else{
      setIsValidIPAddress(true);
      fetchData();
    }
  }

  const { ipAddress, cityName, zipCode, timeZone, continent } = ipAddressData;

  return (
    <header className="z-20 relative place-self-center grid place-items-center pt-10 pl-6 pr-6 gap-10 w-full">
      <h1 className="text-white font-medium sm:text-4xl text-2xl">IP Address Tracker</h1>
      <div className="flex justify-center w-full relative max-w-[500px]">
        <input
          className={`${!isValidIPAddress && "rounded-bl-none"} h-[60px] tracking-tighter placeholder:tracking-normal sm:placeholder:text-xl placeholder:text-sm w-full rounded-l-2xl pl-6 focus:outline-none text-very_dark_gray`}
          placeholder="Search for any IP address or domain"
          aria-label="enter your ip address"
          type="text"
          onChange={handleChange}
        />
        {!isValidIPAddress && <div className="absolute left-0 bottom-[-22px] text-[0.9rem] text-white px-4 rounded-b-lg bg-error_red">Please enter a correct IP - Addresse</div>}
        <button onClick={handleClick} className="h-[60px] w-[60px] bg-black grid place-items-center rounded-r-2xl hover:bg-very_dark_gray transition-colors" aria-label="submit your input">
          <img src="images/icon-arrow.svg" alt="arrow-icon" />
        </button>
      </div>
      <div className="xl:flex xl:space-x-10 grid sm:gap-10 gap-5 sm:grid-cols-2 grid-cols-1 max-w-[1100px] w-full min-h-[160px] bg-white p-6 justify-between rounded-2xl sm:text-left text-center">
        <div className="grid sm:place-content-start sm:gap-2 gap-1">
          <span className="text-dark_gray font-bold sm:text-sm text-[0.6rem] tracking-widest">IP ADDRESS</span>
          <span className="text-very_dark_gray sm:text-2xl text-xl font-bold break-all">{ipAddress}</span>
        </div>
        <div className="grid sm:place-content-start sm:gap-2 gap-1 xl:border-l-2 xl:pl-8">
          <span className="text-dark_gray font-bold sm:text-sm text-[0.6rem] tracking-widest">LOCATION</span>
          <span className="text-very_dark_gray sm:text-2xl text-xl font-bold">{`${cityName}, ${zipCode}`}</span>
        </div>
        <div className="grid sm:place-content-start sm:gap-2 gap-1 xl:border-l-2 xl:pl-8">
          <span className="text-dark_gray font-bold sm:text-sm text-[0.6rem] tracking-widest">TIMEZONE</span>
          <span className="text-very_dark_gray sm:text-2xl text-xl font-bold">UTC {timeZone}</span>
        </div>
        <div className="grid sm:place-content-start sm:gap-2 gap-1 xl:border-l-2 xl:pl-8">
          <span className="text-dark_gray font-bold sm:text-sm text-[0.6rem] tracking-widest">CONTINENT</span>
          <span className="text-very_dark_gray sm:text-2xl text-xl font-bold">{continent}</span>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)