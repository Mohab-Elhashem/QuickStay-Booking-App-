import logo from './logo.svg';
import searchIcon from './searchIcon.svg';
import userIcon from './userIcon.svg';
import calenderIcon from './calenderIcon.svg';
import locationIcon from './locationIcon.svg';
import starIconFilled from './starIconFilled.svg';
import arrowIcon from './arrowIcon.svg';
import starIconOutlined from './starIconOutlined.svg';
import instagramIcon from './instagramIcon.svg';
import facebookIcon from './facebookIcon.svg';
import twitterIcon from './twitterIcon.svg';
import linkendinIcon from './linkendinIcon.svg';
import freeWifiIcon from './freeWifiIcon.svg';
import freeBreakfastIcon from './freeBreakfastIcon.svg';
import roomServiceIcon from './roomServiceIcon.svg';
import mountainIcon from './mountainIcon.svg';
import poolIcon from './poolIcon.svg';
import homeIcon from './homeIcon.svg';
import closeIcon from './closeIcon.svg';
import locationFilledIcon from './locationFilledIcon.svg';
import heartIcon from './heartIcon.svg';
import badgeIcon from './badgeIcon.svg';
import menuIcon from './menuIcon.svg';
import closeMenu from './closeMenu.svg';
import guestsIcon from './guestsIcon.svg';
import roomImg1 from './roomImg1.png';
import roomImg2 from './roomImg2.png';
import roomImg3 from './roomImg3.png';
import roomImg4 from './roomImg4.png';
import regImage from './regImage.png';
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

// ----------------------------------------------------
// 1. Interfaces & Types Definitions
// ----------------------------------------------------

export interface ExclusiveOffer {
    _id: number;
    title: string;
    description: string;
    priceOff: number;
    expiryDate: string;
    image: string;
}

export interface Testimonial {
    id: number;
    name: string;
    address: string;
    image: string;
    rating: number;
    review: string;
}

export interface RoomCommonItem {
    icon: string;
    title: string;
    description: string;
}

export interface User {
    _id: string;
    username: string;
    email: string;
    image: string;
    role: 'hotelOwner' | 'guest' | string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    recentSearchedCities: string[];
}

export interface Hotel {
    _id: string;
    name: string;
    address: string;
    contact: string;
    owner: User;
    city: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Room {
    _id: string;
    hotel: Hotel;
    roomType: string;
    pricePerNight: number;
    amenities: string[];
    images: string[];
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    rate?: number;
}

export interface Booking {
    _id: string;
    user: User;
    room: Room;
    hotel: Hotel;
    checkInDate: string;
    checkOutDate: string;
    totalPrice: number;
    guests: number;
    status: 'pending' | 'confirmed' | 'cancelled' | string;
    paymentMethod: 'Stripe' | 'Pay At Hotel' | string;
    isPaid: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface DashboardData {
    totalBookings: number;
    totalRevenue: number;
    bookings: Booking[];
}

// ----------------------------------------------------
// 2. Exporting Data with Exact Types
// ----------------------------------------------------

// استخدام Record<string, string> يضمن لـ TypeScript قبول مسارات الأيقونات كـ string
export const assets: Record<string, string> = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
};

export const cities: string[] = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

export const exclusiveOffers: ExclusiveOffer[] = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
];

export const testimonials: Testimonial[] = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

export const facilityIcons: Record<string, string> = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

export const roomCommonData: RoomCommonItem[] = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

export const userDummyData: User = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2g5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": ["New York"]
};

export const hotelDummyData: Hotel = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
};

export const roomsDummyData: Room[] = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData,
        "rate": 4.5,
        "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "rate": 4.9,
        "roomType": "Double Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "rate": 4.6,
        "roomType": "Double Bed",
        "pricePerNight": 249,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f76378197ac559e4089b7a",
        "hotel": hotelDummyData,
        "rate": 4.8,
        "roomType": "Single Bed",
        "pricePerNight": 199,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
];

export const userBookingsDummyData: Booking[] = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
];

export const dashboardDummyData: DashboardData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
};