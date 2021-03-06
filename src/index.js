import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/pageHome";
import PageLogin from "./components/pageLogin";
import PageRegister from "./components/pageRegister";
import { AuthProvider } from "./provaiders/auth";
import PageOperation from "./components/pageOperation";

import './reset.css';
import './style.css';
import PageUpdateOperation from "./components/PageUpdateOperation";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin />} />
                <Route path="/register" element={<PageRegister />} />
                <Route path="/home" element={<PageHome />} />
                <Route path="/operation/:typeOperation" element={<PageOperation />} />
                <Route path="/operationUpdate/:idOperation" element={<PageUpdateOperation />} />
            </Routes>
        </BrowserRouter>
    );
}

render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.querySelector('.root'));