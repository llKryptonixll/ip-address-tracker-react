const Background = () => {
  return (
    <section className="min-h-[800px] h-screen grid grid-rows-3 absolute w-full z-10">
        <img className="w-full h-full sm:block hidden" src="images/pattern-bg-desktop.png" alt="background-pattern" />
        <img className="w-full h-full sm:hidden block" src="images/pattern-bg-mobile.png" alt="background-pattern" />
        <div className="bg-red-200 h-full row-span-2">
            MAP
        </div>
    </section>
  )
}

export default Background