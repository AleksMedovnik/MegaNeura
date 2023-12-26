import { Route, Routes } from "react-router-dom"
import Welcome from "../components/Welcome"

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/trainer" element='' />
        </Routes>
    )
}

export default BaseRouter