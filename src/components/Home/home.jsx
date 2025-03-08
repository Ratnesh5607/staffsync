"use client"

import NavBar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import Feature from "./features";
import Courses from "./courses";
import React from "react";

const HomePage = () => {
    return (
        <React.Fragment>
        <Hero/>
        <Feature/>
        <Courses/>
        </React.Fragment>
    )
}

export default HomePage;