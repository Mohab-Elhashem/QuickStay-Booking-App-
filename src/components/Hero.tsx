import { assets, cities } from "../assets/assets";
import heroImage from "../assets/heroImage.png";

export default function Hero() {
    return (
        <section 
            id="hero" 
            className="relative flex flex-col items-start justify-center px-6 pb-16 pt-24 md:px-16 lg:px-24 text-white bg-no-repeat bg-center bg-cover min-h-screen" 
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black/20 bg-linear-to-r from-black/40 via-black/30 to-transparent z-0" />

            {/* Left Side Content */}
            <div className="relative z-10 max-w-2xl">
                <span className="inline-block bg-[#49B9FF]/30 backdrop-blur-md text-white border border-[#49B9FF]/40 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mt-10">
                    The Ultimate Hotel Experience
                </span>

                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold mt-4">
                    Discover Your Perfect Getaway Destination
                </h1>

                <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed max-w-xl">
                    Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
                </p>

                {/* Search Form Bar */}
                <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="bg-white text-gray-700 rounded-2xl p-4 sm:p-5 mt-8 flex flex-col md:flex-row items-stretch md:items-end gap-4 w-full shadow-2xl z-10"
                >
                    {/* Destination Input */}
                    <div className="flex-1 min-w-35">
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                            <img src={assets.locationIcon || assets.searchIcon} alt="" className="h-4 w-4" />
                            <label htmlFor="destinationInput">Destination</label>
                        </div>
                        <input 
                            list="destinations" 
                            id="destinationInput" 
                            type="text" 
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-indigo-600 outline-none transition-colors" 
                            placeholder="Where to?" 
                            required 
                        />
                        <datalist id="destinations">
                            {cities.map((city, index) => (
                                <option value={city} key={index} />
                            ))}
                        </datalist>
                    </div>

                    {/* Check in */}
                    <div className="flex-1 min-w-30">
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                            <img src={assets.calenderIcon} alt="" className="h-4 w-4" />
                            <label htmlFor="checkIn">Check in</label>
                        </div>
                        <input 
                            id="checkIn" 
                            type="date" 
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-indigo-600 outline-none transition-colors" 
                        />
                    </div>

                    {/* Check out */}
                    <div className="flex-1 min-w-30">
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                            <img src={assets.calenderIcon} alt="" className="h-4 w-4" />
                            <label htmlFor="checkOut">Check out</label>
                        </div>
                        <input 
                            id="checkOut" 
                            type="date" 
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-indigo-600 outline-none transition-colors" 
                        />
                    </div>

                    {/* Guests */}
                    <div className="w-full md:w-24">
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                            <label htmlFor="guests">Guests</label>
                        </div>
                        <input 
                            min={1} 
                            max={10} 
                            id="guests" 
                            type="number" 
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-indigo-600 outline-none transition-colors" 
                            placeholder="1" 
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="cursor-pointer flex items-center justify-center gap-2 rounded-xl bg-gray-800 hover:bg-black transition-colors h-10 px-6 text-white font-medium shrink-0 max-md:mt-2"
                    >
                        <img src={assets.searchIcon} alt="search-icon" className="h-4 w-4" />
                        <span>Search</span>
                    </button>
                </form>
            </div>
        </section>
    );
}