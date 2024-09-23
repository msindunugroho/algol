import AlgolGallery from "./pages/algol_gallery/AlgolGallery";
import PageHome from "./pages/home/PageHome"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NearEarthObjects from "./pages/near_earth_objects/NearEarthObjects";
import NotFound from "./pages/not_found/NotFound";
import ComingSoon from "./pages/coming_soon/ComingSoon";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<PageHome/>}/>
        <Route path="/gallery" element={<AlgolGallery/>}/>
        <Route path="/near-earth_objects" element={<NearEarthObjects/>}/>
        <Route path="/sun" element={<ComingSoon/>}/>
        <Route path="/article" element={<ComingSoon/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
