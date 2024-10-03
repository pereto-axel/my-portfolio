const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Welcome to
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}my Portfolio
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center my-10">
                <a
                    href="#templates"
                    className="bg-gradient-to-r from-orange-500 to-red-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition duration-300">
                    Mes projets
                </a>
                <a
                    href="#templates"
                    className="py-3 px-4 mx-3 rounded-md border hover:scale-105 transition duration-300">
                    About me
                </a>
            </div>
        </div>
    )
}

export default Hero;