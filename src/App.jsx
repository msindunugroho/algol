import AlgolGallery from "./pages/algol_gallery/AlgolGallery";
import PageHome from "./pages/home/PageHome"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<PageHome/>}/>
        <Route path="/gallery" element={<AlgolGallery/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
