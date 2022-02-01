import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/pageHome";
import PageLogin from "./components/pageLogin";
import PageRegister from "./components/pageRegister";
import PageOperationExit from "./components/pageOperationExit";

import './reset.css';
import './style.css';
import PageOperationInput from "./components/pageOperationInput";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin />} />
                <Route path="/register" element={<PageRegister />} />
                <Route path="/home" element={<PageHome />} />
                <Route path="/operationExit" element={<PageOperationExit />} />
                <Route path="/operationInput" element={<PageOperationInput />} />
            </Routes>
        </BrowserRouter>
    );
}

render(<App />, document.querySelector('.root'));