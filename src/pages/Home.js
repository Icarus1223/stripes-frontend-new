import homeImg from "../assets/images/homeFlag.png";
import drinkImg from "../assets/images/drink.png";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [nav, setNav] = useState(false);

    const showNav = () => {
        setNav(!nav);
    };

    return (
        <div
            id="home"
            className="bg-cover bg-center bg-no-repeat h-full"
            style={{ backgroundImage: `url(${homeImg})` }}
        >
            {nav ? (
                <FontAwesomeIcon icon={faBars} size="2x"
                    className="fixed right-[30px] fa fa-times text-3xl z-50 md:hidden text-white p-3"
                    onClick={showNav} />
            ) : (
                <FontAwesomeIcon icon={faBars} size="2x"
                    className="text-3xl md:hidden float-right p-3"
                    onClick={showNav} />
            )}

            {/* mobile nav */}
            <nav className={`fixed top-[0px] flex flex-col justify-around items-center w-full text-2xl font-Mont md:hidden bg-main-blue z-40 duration-1000 ${nav ? "right-[0px]" : "right-[-100vw]"
                } `}>
                <a href="#home" className="py-2" onClick={showNav}>About</a>
                <a href="#menu" className="py-2" onClick={showNav}>Menu</a>
                <a href="#service" className="py-2" onClick={showNav}>Service</a>
                <a href="#contact" className="py-2" onClick={showNav}>Contact</a>
            </nav>
            <div className="justify-end gap-5 px-[5%] py-5 font-Mont text-menu-txt bg-main-blue
                hidden md:flex lg:flex">
                <a href="#home" >About</a>
                <a href="#menu" >Menu</a>
                <a href="#service" >Service</a>
                <a href="#contact" >Contact</a>
            </div>    
            <img className="h-20 ml-[10px] md:mt-[-50px] " src={logo} alt="logoImg"/>
            <div className="flex justify-end">
                <img className="w-2/3 pt-[5%] overflow-hidden" src={drinkImg} alt="drinkImg" />
            </div>
            <p className="pl-[10%] w-[60%] sm:w-[50%] text-main-blue font-Mont font-bold text-sm">
                THE BEST PLACE TO EAT<br /> BURRITOS, OUR FAMOUS<br /> BUTTERMILK CHICKEN SANDWICHES<br /> & STREET TACOS.
            </p>
        </div>
    );
}

export default Home;