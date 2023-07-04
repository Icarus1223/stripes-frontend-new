import hamburger from "../assets/images/hamburger.png";

const Service = () => {
    return (
        <div
            className="grid grid-cols-2 mb-5 pl-6 sm:pl-0"
            id="service"
        >
            <div
                className="col-span-2 sm:col-span-1 bg-cover"
            >
                <img src={hamburger} alt="hamburgerImg"></img>
            </div>
            <div
                className="col-span-2 sm:col-span-1 font-Mont pr-10 sm:mt-[-15px]"
            >
                <div className="grid">
                    <div className="text-4xl text-[#00036A] md:text-4xl font-[800]">COME ON <br />TACO TUESDAY</div>
                    <div className=" -z-10 w-10/12 border-b-[10px] mt-[-15px] ml-[-25px] border-[#E00202]"></div>
                    <div className="grid gap-2 pl-2 mt-6">
                        <div>
                            <div className="flex items-center mt-2 ">
                                <div className="text-[16px] md:text-[24px] mr-2">
                                    Carne Adovada Tacos
                                </div>
                                <div className="text-[14px] md:text-[20px] font-[600]">
                                    &7.25
                                </div>
                            </div>
                            <div className=" text-[12px] md:text-[14px]">
                                2 carne adovada street tacos with pico de gallo, cheese, lettuce, crema and the salsa of your choice: Tomatillo, Salsa, Green Chille, Red Chille or none.
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center mt-2">
                                <div className="text-[16px] md:text-[24px] mr-2">
                                    Barbacoa Street Tacos
                                </div>
                                <div className="text-[14px] md:text-[20px] font-[600]">
                                    &7.25
                                </div>
                            </div>
                            <div className=" text-[12px] md:text-[14px]">
                                2 barbaoa street tacos with pico de gallo, cheese, lettuce, crema and the salsa of your choice: Tomatillo, Salsa, Green Chille, Red Chille or none.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;