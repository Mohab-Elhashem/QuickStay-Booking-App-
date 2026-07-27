import { useNavigate } from "react-router-dom";
import { assets, exclusiveOffers } from "../assets/assets";
import Button from "../shared/Button";
import { HeadTitle } from "../shared/HeadTitle";


export default function ExclusiveOffers() {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20">
            <div>
                {/* head title */}
                <HeadTitle
                    title={"Exclusive Offers"}
                    subTitle={"Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories"}
                    className="mb-10 items-center text-center"
                />
                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {
                        exclusiveOffers.map((item) => (
                            <div
                                key={item._id}
                                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl text-white bg-no-repeat bg-cover bg-center overflow-hidden min-h-75 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/20 z-0 transition-opacity group-hover:opacity-90" />
                                <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">{item.priceOff}% OFF</p>
                                <div className="pt-10 z-2">
                                    <div>
                                        <p className="text-2xl font-semibold font-playfair">{item.title}</p>
                                        <p className="text-sm">{item.description}</p>
                                        <p className="text-xs text-white/70 mt-3">Expires {item.expiryDate}</p>
                                    </div>
                                    {/* this button for nothing */}
                                    <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
                                        View Offers
                                        <img className="invert group-hover:translate-x-1 transition-all" src={assets.arrowIcon}/>
                                    </button>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <Button onClick={() => { navigate("/rooms"); scrollTo(0, 0) }}>
                        View All Offers <img src={assets.arrowIcon} className="group-hover:translate-x-1 transition-all" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
