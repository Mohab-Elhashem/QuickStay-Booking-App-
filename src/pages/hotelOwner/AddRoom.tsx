import { useState } from "react"
import { HeadTitle } from "../../shared/HeadTitle"
import { assets } from "../../assets/assets"



export const AddRoom = () => {

    type ImageState = Record<number, File | null>;
    const [images, setImages] = useState<ImageState>({
        1: null,
        2: null,
        3: null,
        4: null,
    })
    interface InputsState {
        roomType: string;
        pricePerNight: number;
        amenities: Record<string, boolean>;
    }
    const [inputs, setInputs] = useState<InputsState>({
        roomType: '',
        pricePerNight: 0,
        amenities: {
            'Free wifi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false,
        }
    })

    return (
        <form>
            <HeadTitle title={"Add Room"} subTitle={"Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience."} />
            {/* images */}
            <p className="text-gray-800 mt-10">Images</p>
            <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
                {
                    Object.keys(images).map((key) => {
                        const imageKey = Number(key);
                        const currentImage = images[imageKey];
                        return (
                            <label htmlFor={`roomImage${key}`} key={key}>
                                <img
                                    src={currentImage ? URL.createObjectURL(currentImage) : assets.uploadArea}
                                    alt=""
                                    className="max-h-13 cursor-pointer opacity-80"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    id={`roomImage${key}`}
                                    className="hidden"
                                    onChange={prev => setImages({ ...images, [key]: prev.target.files?.[0] })}
                                />
                            </label>
                        )
                    })
                }
            </div>
            {/* Room Type */}
            <div className="flex w-full max-sm:flex-col sm:gap-4 mt-4">
                <div className="flex-1 max-w-48">
                    <p className="text-gray-800 mt-4">Room Type</p>
                    <select
                        name=""
                        id=""
                        className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
                        onChange={e => setInputs({ ...inputs, roomType: e.target.value })}
                    >
                        <option value="">Select Room Type</option>
                        <option value="single-bed">Single Bed</option>
                        <option value="double-bed">Double Bed</option>
                        <option value="luxury-bed">Luxury Bed</option>
                        <option value="family-bed">Family Bed</option>

                    </select>
                </div>
                <div>
                    <p className="mt-4 text-gray-800">Price <span className="text-xs">/night</span></p>
                    <input
                        type="number"
                        placeholder="0"
                        className="border border-gray-300 mt-1 rounded p-2 w-24"
                        value={inputs.pricePerNight}
                        onChange={(e) =>
                            setInputs((prev) => ({
                                ...prev,
                                pricePerNight: e.target.value === '' ? 0 : Number(e.target.value)
                            }))
                        } />
                </div>
            </div>
            {/* Amenities */}
            <p className="text-gray-800 mt-4">Amenities</p>
            <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
                {
                    Object.keys(inputs.amenities).map((amenity, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                id={`amenities${index + 1}`}
                                checked={inputs.amenities[amenity]}
                                onChange={() => setInputs({ ...inputs, amenities: { ...inputs.amenities, [amenity]: !inputs.amenities[amenity] } })} />
                            <label htmlFor={`amenities${index + 1}`}> {amenity}</label>
                        </div>
                    ))
                }
            </div>
            <button className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer">Add Room</button>
        </form>
    )
}
