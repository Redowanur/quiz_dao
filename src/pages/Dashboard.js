import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
    return(
        <>
            <Header/>
            <section className="flex flex-col justify-center items-center gap-6 mt-6">
                <div className="bg-white w-96 p-5 rounded-md">
                    <h1 className="bg-white font-semibold text-xl">Peter Parker</h1>
                    <p className="bg-white text-gray-500 text-sm tracking-wide">peterparker@marvel.com</p>
                    <div className="flex justify-between items-center bg-white mt-5">
                        <div className="bg-white">
                            <h1 className="bg-white text-myred-200 font-semibold tracking-wide text-lg">Quizzes Curated</h1>
                            <p className="bg-white">5</p>
                        </div>
                        <div className="bg-white">
                            <h1 className="bg-white text-myred-200 font-semibold tracking-wide text-lg">Quizzes Attended</h1>
                            <p className="bg-white">16</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-96 p-5 rounded-md">
                    <h1 className="bg-white font-semibold text-xl">Quizzer Tools</h1>
                    <div className="flex justify-between items-center gap-10 bg-white mt-5">
                        <button className="bg-myred-200 py-2 rounded-md w-1/2 mt-4">Build Quiz</button>
                        <button className="bg-myred-200 py-2 rounded-md w-1/2 mt-4">Attend Quiz</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Dashboard