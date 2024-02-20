import React from "react";
import Logo from '../img/icosahedron.png'

const Header = () => {
    return(
        <section className="flex justify-between items-center text-white px-3 py-2">
            <div className="flex justify-center items-center gap-2">
                <img src={Logo} className="h-10"/>
                <h1 className="text-xl tracking-widest font-semibold">QuizDao</h1>
            </div>
            
        </section>
    )
}

export default Header