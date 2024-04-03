import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Getstarted from "./pages/Getstarted";
import Message from "./chat/Message";
import Recorder from "./components/Recorder";
import CreateEvent from "./pages/CreateEvent";
import EventList from "./pages/EventList";
import DeleteEvent from "./pages/DeleteEvent";
import EditEvent from "./pages/EditEvent";
import SearchEvent from "./pages/SearchEvent";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/start" element={<Getstarted />} />
        <Route exact path="/create" element={<CreateEvent />} />
        <Route exact path="/view" element={<EventList/>} />
        <Route exact path="/delete" element={<DeleteEvent/>} />
        <Route exact path="/edit" element={<EditEvent/>} />
        <Route exact path="/search" element={<SearchEvent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
