import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from '../img/icosahedron.png'

const HomePage = () => {
    return(
        <>
            <Header/>
            <section className="text-white flex flex-col justify-center items-center gap-4 my-12">
                <img src={Logo} className="w-36"/>
                <h1 className="font-semibold tracking-wider text-2xl">The Ultimate Quiz Builder</h1>
                <p className="text-center text-sm w-80 tracking-wider text-gray-300">Create breathtaking quizzes,share with people, analyze statistics in a convenient way.</p>
                <div className="flex flex-col gap-4 w-32 my-4">
                    <button className="bg-myred-200 py-2 rounded-md">Log In</button>
                    <button className="bg-myred-200 py-2 rounded-md">Register</button>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default HomePage