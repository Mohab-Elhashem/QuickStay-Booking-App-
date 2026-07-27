import { assets } from "../assets/assets";

export default function NewsLetter() {
    return (
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-16 lg:px-24 py-20">
    <div className="w-full max-w-4xl bg-slate-900 px-4 sm:px-8 text-center text-white py-10 flex flex-col items-center justify-center rounded-3xl">
        <p className="text-indigo-500 font-medium">Get updated</p>
        
        <h1 className="max-w-lg font-semibold text-2xl sm:text-4xl sm:leading-11 mt-2">
            Subscribe to our newsletter & get the latest news
        </h1>

        <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex items-center justify-between mt-10 border border-slate-600 focus-within:border-indigo-600 text-sm rounded-full h-14 max-w-md w-full p-1 transition-colors"
        >
            <input 
                type="email" 
                name="email" 
                required
                className="flex-1 min-w-0 w-full bg-transparent outline-none px-3 sm:px-4 text-white placeholder:text-slate-400" 
                placeholder="Email address"
            />
            <button 
                type="submit" 
                className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-full h-11 px-4 sm:px-6 flex items-center justify-center shrink-0 group transition-colors"
            >
                <span className="whitespace-nowrap">Subscribe now</span>
                <img 
                    src={assets.arrowIcon} 
                    alt="" 
                    className="ms-2 w-4 invert group-hover:translate-x-1 transition-transform" 
                />
            </button>
        </form>
    </div>
</div>
    )
}
