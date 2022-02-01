import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/pageHome";
import PageLogin from "./components/pageLogin";
import PageRegister from "./components/pageRegister";

import './reset.css';
import './style.css';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin />} />
                <Route path="/register" element={<PageRegister />} />
                <Route path="/home" element={<PageHome />} />
            </Routes>
        </BrowserRouter>
    );
}

render(<App />, document.querySelector('.root'));