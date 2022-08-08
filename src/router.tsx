import { Route, Routes } from "react-router-dom"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Hello World</div>} />
        </Routes>
    )
}

export default Router