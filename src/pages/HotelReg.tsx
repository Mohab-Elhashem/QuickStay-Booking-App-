import { useState } from "react"
import { assets, cities } from "../assets/assets"

export const HotelReg = () => {
    const [openReg, setOpenReg] = useState(false)

    const handleClose = () => setOpenReg(false)

    return (
        <div>
            {/* Modal */}
            {openReg && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
                    >
                        {/* Reg Image */}
                        <img
                            src={assets.regImage}
                            alt="reg-image"
                            className="w-1/2 object-cover hidden md:block"
                        />

                        {/* Form Body */}
                        <div className="relative flex flex-col items-center w-full md:w-1/2 p-6 md:p-10">
                            {/* Close Icon */}
                            <img
                                src={assets.closeIcon}
                                alt="close-icon"
                                onClick={handleClose}
                                className="absolute top-4 right-4 h-4 w-4 cursor-pointer hover:opacity-75 transition-opacity"
                            />

                            <p className="text-2xl font-semibold mt-4 text-gray-800">Register Your Hotel</p>

                            {/* Hotel Name */}
                            <div className="w-full mt-4">
                                <label htmlFor="hotelName" className="font-medium text-gray-600 text-sm">Hotel Name</label>
                                <input
                                    type="text"
                                    name="hotelName"
                                    id="hotelName"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 outline-indigo-500 font-light text-sm"
                                />
                            </div>

                            {/* Phone */}
                            <div className="w-full mt-3">
                                <label htmlFor="contact" className="font-medium text-gray-600 text-sm">Phone</label>
                                <input
                                    type="tel"
                                    name="contact"
                                    id="contact"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 outline-indigo-500 font-light text-sm"
                                />
                            </div>

                            {/* Address */}
                            <div className="w-full mt-3">
                                <label htmlFor="address" className="font-medium text-gray-600 text-sm">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Type here"
                                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 outline-indigo-500 font-light text-sm"
                                />
                            </div>

                            {/* Select City */}
                            <div className="w-full mt-3">
                                <label htmlFor="city" className="font-medium text-gray-600 text-sm">City</label>
                                <select
                                    id="city"
                                    className="border border-gray-300 rounded w-full px-3 py-2 mt-1 outline-indigo-500 font-light text-sm"
                                >
                                    <option value="">Select City</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full md:w-auto md:mr-auto px-6 py-2 rounded cursor-pointer mt-6 font-medium text-sm"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Trigger Button */}
            <button
                onClick={() => setOpenReg(!openReg)}
                className="fixed right-4 bottom-4 z-40 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg cursor-pointer transition-all"
            >
                Reg
            </button>
        </div>
    )
}