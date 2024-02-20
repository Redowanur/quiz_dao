import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
    return(
        <>
            <Header/>
            <section className="flex flex-col justify-center items-center">
                <div className="bg-white w-96 p-5 rounded-md">
                    <h1 className="bg-white font-semibold text-xl">Peter Parker</h1>
                    <p className="bg-white text-gray-500 text-sm tracking-wide">peterparker@marvel.com</p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Dashboard