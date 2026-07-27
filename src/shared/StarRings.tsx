import { assets } from "../assets/assets";

export default function StarRings() {
    const rating:number = 4;
    return (
        <>
            {Array(5).fill('').map((_, index) => (
                <img key={index} src={rating > index ? assets.starIconFilled : assets.starIconOutlined} 
                alt="star-icon" 
                className="w-5 h-5"
                />
    ))} 
        </>
    )
}
