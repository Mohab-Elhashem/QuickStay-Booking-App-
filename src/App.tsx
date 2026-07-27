import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { AllRooms } from "./pages/AllRooms"
import RoomDetails from "./pages/RoomDetails"
import Booking from "./pages/Booking"
import { Layout } from "./pages/hotelOwner/Layout"
import { Dashboard } from "./pages/hotelOwner/Dashboard"
import { AddRoom } from "./pages/hotelOwner/AddRoom"
import { ListRoom } from "./pages/hotelOwner/ListRoom"
import { Experience } from "./pages/Experience"
import { About } from "./pages/About"
import ScrollToTop from "./shared/ScrollToTop"


function App() {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isOwnerPath && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<Booking />} />
          {/* Owner pages */}
          <Route path="/owner" element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="add-room" element={<AddRoom/>}/>
            <Route path="list-room" element={<ListRoom/>}/>
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
