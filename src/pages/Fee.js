import humanImg from "../assets/images/human.png";
import lineImg from "../assets/images/line.png";

const Fee = () => {
    return (
        <div className="grid grid-cols-3 p-3">
            <div className="grid grid-cols-1 w-full object-cover">
                <img className=""src={humanImg} alt="humanImg"></img>
            </div>
            <div className="flex items-end flex-col grid-cols-1 gap-4 font-Mont text-[#11004B] mt-10 ">
                <p className="text-right text-[30px] sm:text-[80px] md:text-[100px] font-[900]">10%</p>
                <p className="text-right text-[12px] sm:text-[20px] md:text-3xl font-bold">OF OUR NET PROCEEDS GET DONATED TO THE VA HOSPITAL</p>
                <button className="w-1/2 bg-[#BF0D3D] text-[12px] sm:text-xl md:text-2xl text-white italic rounded-3xl">
                        More Info
                </button>
            </div>
            <div className="grid-cols-1 pl-2">
                <img src={lineImg} alt="lineImg"></img>
            </div>
        </div>
    );
}

export default Fee;