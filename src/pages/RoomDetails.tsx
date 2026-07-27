import { useParams } from "react-router-dom"
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets"
import StarRings from "../shared/StarRings"
import { useEffect, useState } from "react"


export default function RoomDetails() {
    const { id } = useParams()


    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const room = roomsDummyData.find((room) => room._id === id)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const mainImage = selectedImage || room?.images?.[0] || "";

    return (
        <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24">
            {/* Room Details */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 ">
                <h1 className="text-3xl md:text-4xl font-playfair">{room?.hotel.name} <span className="font-inter text-sm">({room?.roomType})</span></h1>
                <p className="text-xs font-inter py-2 px-3 text-white bg-orange-500 rounded-full">20% OFF</p>
            </div>
            {/* room raiting */}
            <div className="flex items-center gap-1 mt-2">
                <StarRings />
                <p className="ml-2">200+ reviews</p>
            </div>
            {/* room address */}
            <div className="flex items-center gap-1 mt-2 text-gray-500">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room?.hotel.address}</span>
            </div>
            {/* room image */}
            <div className="flex flex-col lg:flex-row mt-6 gap-6">
                <div className="lg:w-1/2 w-full">
                    <img src={mainImage} alt="room-image" className="w-full rounded-xl shadow-lg object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
                    {
                        // Nullish Coalescing
                        (room?.images?.length ?? 0) > 1 && room?.images.map((image, index) => (
                            <img
                                key={index}
                                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}
                                onClick={() => setSelectedImage(image)} src={image}
                                alt="room image"
                            />
                        ))
                    }
                </div>
            </div>
            {/* room highlights */}
            <div className="flex flex-col md:flex-row md:justify-between mt-10">
                <div className="flex flex-col">
                    <h2 className="text-3xl md:text-4xl font-playfair">Experience Luxury Like Never Before</h2>
                    <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                        {
                            room?.amenities.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                                    <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                                    <p className="text-xs">{item}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* room price */}
                <p className="font-medium text-2xl">{room?.pricePerNight}/night</p>
            </div>
            {/* checkIn checkOut Form */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white text-gray-700 rounded-2xl p-4 sm:p-5 mt-8 flex flex-col md:flex-row items-stretch md:items-end gap-4 w-full shadow-2xl z-10"
            >
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
                    <span>Check Availability</span>
                </button>
            </form>
            {/* common specifications */}
            <div className="mt-25 space-y-4">
                {
                    roomCommonData.map((spec, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <img src={spec.icon} alt={`${spec.title}-icon`} className="w-7" />
                            <div>
                                <p className="text-base">{spec.title}</p>
                                <p className="text-gray-500">{spec.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* descripotion */}
            <div className="max-w-3xl border-t border-gray-300 my-5 py-5 text-gray-500">
                <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two
                    bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot
                    please mark the number of guests to get the exact price for groups. The Guests will be allocated
                    ground floor according to availability. You get the comfortable two bedroom apartment that has
                    a true city feeling. </p>
            </div>
        </div>
    )
}