import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signinup from "./components/Signinup/Signinup";
import Landing from "./components/Landing/Landing";
import ContextProvider from "./context/Context";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
    return (
        <ContextProvider>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<Signinup />} exact />
                        <Route path="/main" element={<Landing />} exact />
                        <Route path="*" element={<ErrorPage />} exact />
                    </Routes>
                </Router>
            </div>
        </ContextProvider>
    );
}

export default App;
