import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRings from "../shared/StarRings";
import { useCallback, useMemo, useState } from "react";
import { priceRange, roomTypes, sortOptions } from "../data/roomData";


export const AllRooms = () => {
    const navigate = useNavigate();

    const [openFilter, setOpenFilter] = useState(false)

    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
    const [selectedSort, setSelectedSort] = useState<string>("");

    const handleRoomChange = useCallback((room: string) => {
        setSelectedRooms((prev) =>
            prev.includes(room) ? prev.filter((item) => item !== room) : [...prev, room]  // remove : add
        )
        setOpenFilter(false);
    }, [])

    const handlePriceChange = useCallback((price: string) => {
        setSelectedPrice((prev) =>
            prev.includes(price) ? prev.filter((item) => item !== price) : [...prev, price]
        )
        setOpenFilter(false);
    }, [])

    const filteredRooms = useMemo(() => {
        const result = roomsDummyData.filter((room) => {
            const matchRoomType = selectedRooms.length === 0 || selectedRooms.includes(room.roomType);
            const matchPrice = selectedPrice.length === 0 ||
                selectedPrice.some((range) => {
                    if (range === "0 to 500") return room.pricePerNight >= 0 && room.pricePerNight <= 500;
                    if (range === "500 to 1000") return room.pricePerNight > 500 && room.pricePerNight <= 1000;
                    if (range === "1000 to 2000") return room.pricePerNight > 1000 && room.pricePerNight <= 2000;
                    if (range === "2000 to 3000") return room.pricePerNight > 2000 && room.pricePerNight <= 3000;
                    return false;
                });
            return matchRoomType && matchPrice;
        });
        if (selectedSort === "Price Low to High") {
            result.sort((a, b) => a.pricePerNight - b.pricePerNight);
        } else if (selectedSort === "Price High to Low") {
            result.sort((a, b) => b.pricePerNight - a.pricePerNight);
        }
        return result
    }, [selectedRooms, selectedPrice, selectedSort])

    return (
        <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 pb-20 max-w-7xl mx-auto">

            {/* Header / Title Section */}
            <div className="flex flex-col items-start text-left mb-10">
                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Hotel Rooms
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl leading-relaxed">
                    Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                </p>
            </div>

            {/* Main Content Layout: Rooms List + Filter Sidebar */}
            <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">

                {/* Rooms List Container */}
                <div className="flex-1 w-full flex flex-col gap-8">

                    {filteredRooms.length > 0 ? (
                        filteredRooms.map((room) => (
                            <div
                                key={room._id}
                                className="flex flex-col md:flex-row items-stretch gap-6 bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Room Image */}
                                <div className="md:w-1/2 h-60 md:h-64 shrink-0 overflow-hidden rounded-xl">
                                    <img
                                        src={room.images?.[0]}
                                        onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }} 
                                        alt={room.hotel?.name || "Hotel Room"}
                                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                                        title="View Room Details"
                                    />
                                </div>

                                {/* Room Details */}
                                <div className="md:w-1/2 flex flex-col justify-between py-1">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600">
                                            {room.hotel?.city || "City"}
                                        </span>

                                        <h2
                                            onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }}
                                            className="text-2xl font-playfair font-bold text-gray-800 hover:text-indigo-600 cursor-pointer transition-colors leading-snug"
                                        >
                                            {room.hotel?.name || "Luxury Hotel"}
                                        </h2>

                                        {/* Ratings */}
                                        <div className="flex items-center gap-2 mt-1">
                                            <StarRings />
                                            <span className="text-xs text-gray-500 font-medium">
                                                (200+ reviews)
                                            </span>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm mt-1">
                                            <img src={assets.locationIcon} alt="Location" className="w-4 h-4 opacity-70" />
                                            <span className="truncate">{room.hotel?.address || "Address"}</span>
                                        </div>

                                        {/* Room Amenities */}
                                        <div className="flex flex-wrap items-center mt-1 gap-4">
                                            {room.amenities?.map((item, index) => (
                                                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70">
                                                    <img src={facilityIcons[item]} alt={item} className="h-5 w-5" />
                                                    <p className="text-xs">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price & Action Button */}
                                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                                        <div>
                                            <span className="text-xs text-gray-400 block">Starting from</span>
                                            <p className="text-xl font-bold text-gray-900">
                                                ${room.pricePerNight || "150"} <span className="text-xs font-normal text-gray-500">/ night</span>
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }} // 👈 تعديل الـ URL
                                            className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white text-xs font-medium rounded-full cursor-pointer transition-colors"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">No Rooms Found</h3>
                            <p className="text-gray-500 text-sm max-w-md mb-6">
                                We couldn't find any rooms matching your selected filters. Try clearing some options to see more results.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedRooms([]);
                                    setSelectedPrice([]);
                                    setSelectedSort('');
                                }}
                                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-full cursor-pointer transition-colors shadow-sm"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}

                </div>

                {/* Filter Sidebar (Right Side) */}
                <div className="w-full lg:w-80 shrink-0 bg-white p-2 lg:p-6 rounded-2xl border border-gray-200/80 shadow-sm sticky top-28">
                    <div className={`flex items-center justify-between px-5 py-3 lg:border-b border-gray-300 ${openFilter && "border-b"}`}>
                        <h3 className="font-playfair text-xl font-bold text-gray-900 pb-2 text-center">Filter Rooms</h3>
                        <div className="text-xs cursor-pointer">
                            <span onClick={() => setOpenFilter(!openFilter)} className="lg:hidden">{openFilter ? "HIDE" : "SHOW"}</span>
                            <button onClick={() => {
                                    setSelectedRooms([]);
                                    setSelectedPrice([]);
                                    setSelectedSort('');
                                }} className="hidden lg:block cursor-pointer">CLEAR</button>
                        </div>
                    </div>

                    <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
                        <div className="px-5 pt-5">
                            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
                            {
                                roomTypes.map((room) => (
                                    <div key={room}>
                                        <input
                                            id={room}
                                            onChange={() => handleRoomChange(room)}
                                            checked={selectedRooms.includes(room)}
                                            type="checkbox" className="me-2 cursor-pointer" />
                                        <label htmlFor={room} className="cursor-pointer">{room}</label>
                                    </div>
                                ))
                            }
                            <p className="font-medium text-gray-800 py-2 border-t border-gray-300"></p>
                            {
                                priceRange.map((price) => (
                                    <div key={price}>
                                        <input
                                            onChange={() => handlePriceChange(price)}
                                            checked={selectedPrice.includes(price)}
                                            type="checkbox"
                                            className="me-2 cursor-pointer"
                                            id={price} />
                                        <label htmlFor={price} className="cursor-pointer">{price}</label>
                                    </div>
                                ))
                            }
                            <p className="font-medium text-gray-800 py-2 border-t border-gray-300"></p>
                            {
                                sortOptions.map((opt) => (
                                    <div key={opt}>
                                        <input
                                            onChange={() => {setSelectedSort(opt);setOpenFilter(false);}}
                                            checked={selectedSort === opt}
                                            type="radio"
                                            className="me-2 cursor-pointer"
                                            id={opt}
                                            name="sort" />
                                        <label htmlFor={opt} className="cursor-pointer">{opt}</label>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
