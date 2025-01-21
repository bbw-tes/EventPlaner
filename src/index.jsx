import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Willkommen from "./pages/Willkommen";
import Ideen from "./pages/Ideen";
import EventErfassen from "./pages/EventsErfassen";
import Veranstaltung from "./pages/Veranstaltungen";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                <Route index element={<Willkommen />} />
                <Route path="Ideen" element={<Ideen />} />
                <Route path="Veranstaltungen" element={<Veranstaltung />} />
                <Route path="EventsErfassen" element={<EventErfassen />} />
                <Route path="*" element={<NoPage />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);