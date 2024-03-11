import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";

const AllRouter = () => {
    

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
        </Routes>
    );
}

export default AllRouter;