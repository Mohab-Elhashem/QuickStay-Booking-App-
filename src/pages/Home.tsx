import ExclusiveOffers from "../components/ExclusiveOffers"
import Features from "../components/Features"
import Hero from "../components/Hero"
import NewsLetter from "../components/NewsLetter"
import Testimonial from "../components/Testimonial"
import { HotelReg } from "./HotelReg"

export const Home = () => {
    return (
        <>
            <HotelReg/>
            <Hero/>
            <Features/>
            <ExclusiveOffers/>
            <Testimonial/>
            <NewsLetter/>
        </>
    )
}
