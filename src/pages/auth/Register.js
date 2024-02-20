import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AccountCircle, Key } from "@mui/icons-material";
import Logo from '../../img/icosahedron.png'

const Register = () => {
    return(
        <>
            <Header/>
            <section className="flex justify-center items-center mt-24">
                <form className="bg-white rounded-xl flex flex-col justify-center items-center gap-8 pt-8 pb-12">
                    <div className="flex justify-center items-center gap-2 bg-white">
                        <img src={Logo} className="h-12 bg-white"/>
                        <h1 className="text-2xl tracking-widest bg-white">QuizDao</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className=" py-1 text-center outline-none bg-white border-b-2 border-myred-200 w-4/5"
                    />
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className=" py-1 text-center outline-none bg-white border-b-2 border-myred-200 w-4/5"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className=" py-1 text-center outline-none bg-white border-b-2 border-myred-200 w-4/5"
                    />
                                        <input
                        type="password"
                        placeholder="Confirm Password"
                        className=" py-1 text-center outline-none bg-white border-b-2 border-myred-200 w-4/5"
                    />
                    <button className="bg-myred-200 py-2 rounded-md w-4/5 mt-4 tracking-wide">Register</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default Register