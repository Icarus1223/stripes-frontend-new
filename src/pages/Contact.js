import deliveryImg from "../assets/images/delivery.png";
import phoneIcon from "../assets/images/phone-call-svgrepo-com.svg";
import logo from "../assets/images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div
            className="grid grid-cols-2 font-Mont"
            id="contact"
        >
            <div className="grid col-span-2 sm:col-span-1 sm:text-center gap-20 px-[50px]">
                <div
                    className="text-[#9C000E] text-6xl font-[900] mt-5"
                >
                    DELIVERY <br/>SERVICE
                </div>
                <div className="pl-4">
                    <p className="text-[#050141] text-4xl font-[900]">EVERYDAY</p>
                    <p className="text-[#050141] text-4xl font-[500]">12:00 a 23:00</p>
                    <p className="text-[#001083] italic text-[26px] font-[900]">FREE DELIVERY</p>
                    <div className="flex items-center">
                        <img className="h-10" src={phoneIcon} alt="phoneIcon"></img>
                        <div className="px-3">
                            <p className="text-[20px]">Call Now</p>
                            <p className="text-2xl">+1 3727-2766</p>
                        </div>
                    </div>
                    <div className=" w-11/12 border-b-4 ml-[-56px] mt-[5px] border-[#E00115]"></div>
                </div>
                <div className="">
                    <img className="h-20 mb-4" src={logo} alt="logoImg" />
                    <p className="w-[60%] font-Mont text-xs mb-6">The best of both worlds. Enjoy our Biscuits and Burritos menu</p>
                    <p className="font-Mont text-xs mb-3">Copyright @2022 Stripes Biscuit and Burritos - All</p>
                </div>
            </div>
            <div className="hidden sm:flex flex-col justify-between col-span-1">
                <div className="flex mt-[-20px]scale-90 overflow-hidden">
                    <img src={deliveryImg} alt="deliverImg" />
                </div>
                <div className="flex sm:justify-end pb-3 pr-10 gap-2">
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                    <FontAwesomeIcon icon={faYoutube} size="1x" />
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                </div>
            </div>
        </div>
    );
}

export default Contact;