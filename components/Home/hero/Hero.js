import {useIntl} from "react-intl"


import Image from "next/image";
import HeroImg from '../../../assets/img/heroImg.png';


export default function Hero() {
    const {formatMessage} = useIntl();
    return (
        <section id="hero">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="pt-[100px]">
                        <h2 className="font-normal leading-8 text-2xl text-[#9099A3]">{formatMessage({id: "heroTitle"})}</h2>
                        <h1 className="text-5xl	text-white leading-loose	font-bold">Акылбекова Кубаныча</h1>
                        <div>
                            <button
                                className="rounded-xl bg-[#1A5CFF] py-2 px-8 text-white font-bold header-btn">{formatMessage({id: "heroBtn1"})}</button>
                            <button
                                className="hero-btn bg-transparent box-border text-[#9099A3] ml-4 rounded-2xl py-2 px-6 font-bold">{formatMessage({id: "login"})}</button>
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={HeroImg}/>
                        <span className="hero-shadow"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
