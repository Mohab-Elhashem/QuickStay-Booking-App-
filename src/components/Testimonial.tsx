import { testimonials } from "../assets/assets";
import { HeadTitle } from "../shared/HeadTitle";
import StarRings from "../shared/StarRings";

export default function Testimonial() {
    return (
        <section className="flex flex-col items-center px-4 sm:px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
            <div className="w-full max-w-7xl">
                {/* Header Title */}
                <HeadTitle 
                    title="What Our Guests Say" 
                    subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world." 
                    className="text-center items-center"
                />

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id || testimonial.name} 
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                {/* User Info */}
                                <div className="flex items-center gap-4">
                                    <img 
                                        className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-indigo-50" 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                    />
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-playfair text-lg font-bold text-gray-900 truncate">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 truncate">
                                            {testimonial.address}
                                        </p>
                                    </div>
                                </div>

                                {/* Star Ratings */}
                                <div className="flex items-center gap-1 mt-4">
                                    <StarRings />
                                </div>

                                {/* Review Content */}
                                <p className="text-gray-600 text-sm leading-relaxed mt-4 italic">
                                    "{testimonial.review}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}