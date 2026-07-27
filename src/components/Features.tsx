import { useNavigate } from "react-router-dom";
import { assets, roomsDummyData } from "../assets/assets";
import { HeadTitle } from "../shared/HeadTitle";
import Button from "../shared/Button";

export default function Features() {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center px-4 sm:px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-16">
            <div className="w-full max-w-7xl">
                {/* Header Title */}
                <HeadTitle
                    title="Featured Destinations"
                    subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
                    className="text-center items-center"
                />

                {/* Rooms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 mb-12">
                    {roomsDummyData.slice(0, 4).map((room) => (
                        <div
                            key={room._id}
                            onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }}
                            className="group relative w-full rounded-2xl overflow-hidden bg-white text-gray-500 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer border border-gray-100"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-52 w-full">
                                <img
                                    src={room.images[0]}
                                    alt={room.hotel.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {room.rate && room.rate >= 4.7 && (
                                    <span className="px-3 py-1 absolute top-3 left-3 text-xs bg-white/90 backdrop-blur-md text-gray-900 font-semibold rounded-full shadow-sm">
                                        Best Seller
                                    </span>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-5 flex flex-col flex-1 justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <h3 className="font-playfair text-lg font-bold text-gray-800 truncate" title={room.hotel.name}>
                                            {room.hotel.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-sm font-semibold text-gray-800 shrink-0">
                                            <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
                                            <span>{room.rate}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                                        <img src={assets.locationIcon} alt="location" className="w-3.5 h-3.5 shrink-0" />
                                        <span className="truncate">{room.hotel.address}</span>
                                    </div>
                                </div>

                                {/* Price and Action */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-2">
                                    <p className="text-xs text-gray-500">
                                        <span className="text-xl font-bold text-gray-900">${room.pricePerNight}</span> /night
                                    </p>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/rooms/${room._id}`);
                                            window.scrollTo(0, 0);
                                        }}
                                        className="px-3.5 py-1.5 text-xs font-medium text-gray-700 border border-gray-300 rounded-lg group-hover:bg-gray-800 group-hover:text-white group-hover:border-gray-300 transition-colors duration-300 cursor-pointer"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="flex justify-center">
                    <Button onClick={() => { navigate("/rooms"); window.scrollTo(0, 0); }}>
                        View All Destinations
                        <img src={assets.arrowIcon} alt="" className="group-hover:translate-x-1 transition-transform ml-2 inline-block" />
                    </Button>
                </div>
            </div>
        </section>
    );
}