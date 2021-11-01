import {useIntl} from "react-intl"
import Image from "next/image";
import Link from "next/link";



export default function Subscribe() {
    const {formatMessage} = useIntl();
    return (
        <section id="subscribe" className="pb-32">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 bg-white rounded-2xl	py-12 px-8">
                    <div className="col-span-2">
                        <h1 className="text-black font-bold text-2xl leading-9 ">Подпишитесь сейчас за 19,00 $ / мес</h1>
                        <p className="text-[#9099A3] leading-6	font-normal text-xl	">И получите доступ к материалам и кейсам, а также к новым
                            мастер-классам и Кайдзен школе</p>
                    </div>
                    <div className="col-end-4">
                        <button className="bg-[#1A5CFF] rounded-2xl	font-bold text-xl leading-6	text-white py-3 px-8 mb-4">Оформить подписку</button>
                        <Link href={'/'}><h2 className="text-[#2C3E50] font-bold leading-relaxed text-base	flex justify-center">Подробнее о пакетах</h2></Link>
                    </div>
                </div>
            </div>
        </section>

    )
}
