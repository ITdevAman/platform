import {useIntl} from "react-intl"
import Image from "next/image";
import Link from "next/link";
import DocsImg from '../../../assets/img/docs.svg'
import Logo from '../../../assets/img/blackLogo.svg'


export default function Article() {
    const {formatMessage} = useIntl();
    return (
        <section id="article">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-y-10 mb-8">
                    <Link href={"/"}>
                        <div className="bg-white art-card cursor-pointer w-full">
                            <div className="flex mb-3">
                                <Image src={DocsImg}/>
                                <h5 className="text-[#9099A3] font-normal leading-5 text-sm ml-2">{formatMessage({id : 'cardCategory'})}</h5>
                            </div>
                            <h1 className="font-bold leading-7 text-[#2C3E50] text-xl mb-3">
                                {formatMessage({id: 'cardTitle'})}</h1>
                            <p className="font-bold text-[#9099A3] text-base leading-4 mb-3">
                                {formatMessage({id: 'cardDesc'})}
                            </p>
                            <div className="mb-3">
                                <span className="text-[#9099A3] leading-5 font-normal text-sm">26-окт.  2021</span>
                                <span className="text-[#9099A3] leading-5 font-normal text-sm ml-2">{formatMessage({id : 'cardNew'})}</span> <span
                                className="text-[#9099A3] leading-5 font-normal text-sm"> ≈ 7 мин</span>
                            </div>
                            <div className="art-line mb-3"/>
                            <div className="flex">
                                <Image src={Logo}/>
                                <div className="ml-2">
                                    <h3 className="text-[#9099A3] font-bold leading-normal">
                                        Команда Акылбеков Кубаныча
                                    </h3>
                                    <p className="text-[#9099A3] leading-5 text-sm">AkylbekySaid.kg</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className="bg-white art-card cursor-pointer w-full">
                            <div className="flex mb-3">
                                <Image src={DocsImg}/>
                                <h5 className="text-[#9099A3] font-normal leading-5 text-sm ml-2">{formatMessage({id : 'cardCategory'})}</h5>
                            </div>
                            <h1 className="font-bold leading-7 text-[#2C3E50] text-xl mb-3">
                                {formatMessage({id: 'cardTitle'})}</h1>
                            <p className="font-bold text-[#9099A3] text-base leading-4 mb-3">
                                {formatMessage({id: 'cardDesc'})}
                            </p>
                            <div className="mb-3">
                                <span className="text-[#9099A3] leading-5 font-normal text-sm">26-окт.  2021</span>
                                <span className="text-[#9099A3] leading-5 font-normal text-sm ml-2">{formatMessage({id : 'cardNew'})}</span> <span
                                className="text-[#9099A3] leading-5 font-normal text-sm"> ≈ 7 мин</span>
                            </div>
                            <div className="art-line mb-3"/>
                            <div className="flex">
                                <Image src={Logo}/>
                                <div className="ml-2">
                                    <h3 className="text-[#9099A3] font-bold leading-normal">
                                        Команда Акылбеков Кубаныча
                                    </h3>
                                    <p className="text-[#9099A3] leading-5 text-sm">AkylbekySaid.kg</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className="bg-white art-card cursor-pointer">
                            <div className="flex mb-3">
                                <Image src={DocsImg}/>
                                <h5 className="text-[#9099A3] font-normal leading-5 text-sm ml-2">{formatMessage({id : 'cardCategory'})}</h5>
                            </div>
                            <h1 className="font-bold leading-7 text-[#2C3E50] text-xl mb-3">
                                {formatMessage({id: 'cardTitle'})}</h1>
                            <p className="font-bold text-[#9099A3] text-base leading-4 mb-3">
                                {formatMessage({id: 'cardDesc'})}
                            </p>
                            <div className="mb-3">
                                <span className="text-[#9099A3] leading-5 font-normal text-sm">26-окт.  2021</span>
                                <span className="text-[#9099A3] leading-5 font-normal text-sm ml-2">{formatMessage({id : 'cardNew'})}</span> <span
                                className="text-[#9099A3] leading-5 font-normal text-sm"> ≈ 7 мин</span>
                            </div>
                            <div className="art-line mb-3"/>
                            <div className="flex">
                                <Image src={Logo}/>
                                <div className="ml-2">
                                    <h3 className="text-[#9099A3] font-bold leading-normal">
                                        Команда Акылбеков Кубаныча
                                    </h3>
                                    <p className="text-[#9099A3] leading-5 text-sm">AkylbekySaid.kg</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className="bg-white art-card cursor-pointer">
                            <div className="flex mb-3">
                                <Image src={DocsImg}/>
                                <h5 className="text-[#9099A3] font-normal leading-5 text-sm ml-2">{formatMessage({id : 'cardCategory'})}</h5>
                            </div>
                            <h1 className="font-bold leading-7 text-[#2C3E50] text-xl mb-3">
                                {formatMessage({id: 'cardTitle'})}</h1>
                            <p className="font-bold text-[#9099A3] text-base leading-4 mb-3">
                                {formatMessage({id: 'cardDesc'})}
                            </p>
                            <div className="mb-3">
                                <span className="text-[#9099A3] leading-5 font-normal text-sm">26-окт.  2021</span>
                                <span className="text-[#9099A3] leading-5 font-normal text-sm ml-2">{formatMessage({id : 'cardNew'})}</span> <span
                                className="text-[#9099A3] leading-5 font-normal text-sm"> ≈ 7 мин</span>
                            </div>
                            <div className="art-line mb-3"/>
                            <div className="flex">
                                <Image src={Logo}/>
                                <div className="ml-2">
                                    <h3 className="text-[#9099A3] font-bold leading-normal">
                                        Команда Акылбеков Кубаныча
                                    </h3>
                                    <p className="text-[#9099A3] leading-5 text-sm">AkylbekySaid.kg</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <Link href={'/'}>
                    <button className="flex justify-center m-auto bg-[#1A5CFF] rounded-3xl	font-bold text-xl leading-6	text-white py-3 px-8 ">
                        {formatMessage({id: 'Preview'})}
                    </button>
                </Link>
            </div>
        </section>

    )
}
