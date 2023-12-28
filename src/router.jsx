import { Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import BasicHOC from "./containers/BasicHOC"

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/MegaNeura" element={<Welcome />} />
            <Route path="/trainer" element={<BasicHOC />} />
        </Routes>
    )
}

export default BaseRouter