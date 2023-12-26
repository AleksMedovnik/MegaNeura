import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Welcome from "./components/Welcome"

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/MegaNeura" element={<Welcome />} />
            <Route path="/trainer" element={<Main />} />
        </Routes>
    )
}

export default BaseRouter