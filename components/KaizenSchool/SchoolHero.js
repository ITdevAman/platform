import Image from "next/image";
import MaskGroup from '../../assets/img/Mask Group.png'

export default function SchoolHero() {
    return (
            <section>
                <div className="container mx-auto">
                    <div className="grid">
                        <div>
                            <h1 className="font-bold text-white text-4xl	">КАЙДЗЕН ШКОЛА</h1>
                            <p className="text-lg	text-white leading-7	" >Получайте новые знания, навыки и возможности
                                для эффективной жизни и бизнеса</p>
                            <div>
                                <button className="rounded-xl bg-[#1A5CFF] py-2 px-8 text-white font-bold header-btn">Присоединиться</button>
                                <button className="hero-btn bg-transparent box-border text-[#9099A3] ml-4 rounded-2xl py-2 px-6 font-bold">Войти</button>
                            </div>
                        </div>
                        <div>
                            <Image src={MaskGroup}/>
                        </div>
                    </div>
                </div>
            </section>
    )
}