import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import { ResumeProvider } from "./context/ResumeContext";
import GlobalStyles from "./styles/global";

const App = () => {
    return (
        <>
            <ResumeProvider>
                <GlobalStyles />
                <ToastContainer />
                <Router>
                    <Routes />
                </Router>
            </ResumeProvider>
        </>
    );
};

export default App;
