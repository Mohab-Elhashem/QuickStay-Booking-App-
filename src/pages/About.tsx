import { HeadTitle } from "../shared/HeadTitle";
import { assets } from "../assets/assets";

export const About = () => {
    const stats = [
        { label: "Properties Listed", value: "100+" },
        { label: "Happy Guests", value: "1,200+" },
        { label: "Partner Cities", value: "25+" },
        { label: "Customer Rating", value: "4.9/5" },
    ];

    const features = [
        {
            title: "Seamless Booking",
            description: "Experience effortless room reservations with instant confirmation and a modern, fast interface.",
            icon: "⚡",
        },
        {
            title: "Verified Owners",
            description: "Every room and host is verified to ensure high standards of safety, cleanliness, and comfort.",
            icon: "🛡️",
        },
        {
            title: "Transparent Pricing",
            description: "No hidden fees or unexpected charges. What you see is what you pay.",
            icon: "💎",
        },
    ];

    return (
        <div className="pt-28 pb-16 px-4 md:px-16 lg:px-24 xl:px-32 max-w-6xl mx-auto min-h-screen">
            <HeadTitle
                title="About QuickStay"
                subTitle="Redefining your stay experience with seamless bookings, trusted hosts, and unforgettable travel memories."
            />

            {/* Hero / Overview Section */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                        Your Trusted Partner for Comfort and Convenience
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        At <strong>QuickStay</strong>, we bridge the gap between travelers seeking unique, comfortable accommodations and room owners looking to host guests effortlessly.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Whether you are planning a weekend getaway, a business trip, or a long-term stay, our platform is built to deliver a smooth, reliable, and secure booking experience from start to finish.
                    </p>
                </div>

                {/* Feature/Logo Highlight Box */}
                <div className="bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-sm">
                    <img
                        src={assets.logo}
                        alt="QuickStay Logo"
                        className="h-12 mb-4 object-contain invert opacity-80"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">Hospitality Meets Innovation</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-sm">
                        Empowering property owners with powerful management tools while giving travelers peace of mind.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                        <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Why Choose Us */}
            <div className="mt-20">
                <div className="text-center max-w-xl mx-auto mb-10">
                    <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Designed with attention to detail for both guests and property owners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="text-3xl mb-4">{feature.icon}</div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};