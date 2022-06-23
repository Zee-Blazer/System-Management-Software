import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { ApiRequestProvider } from "./Context/api-request.context";

// Screens
import { HomeScreen } from "./Screen/home.screen";
import { AddScreen } from "./Screen/add.screen";
import { AboutScreen } from "./Screen/about.screen";

export const MainRouter = () => {

    return (
        <BrowserRouter>
            
            <ApiRequestProvider>
                <Routes>
                    <Route path="/" element={ <HomeScreen /> } />
                    <Route path="/add" element={ <AddScreen /> } />
                    <Route path="/about" element={ <AboutScreen /> } />
                </Routes>
            </ApiRequestProvider>

        </BrowserRouter>
    )
}
