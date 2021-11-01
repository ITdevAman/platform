import Image from "next/image";
import Link from "next/link";
import Logo from '../../../assets/img/Logo.svg'
import Visa from '../../../assets/img/Visa_Inc._logo 1.png'
import MasterCard from '../../../assets/img/1609314895logo-mastercard-mobile 1.png'
import {useIntl} from "react-intl";

export default function Footer() {
    const {formatMessage} = useIntl();
    return (
        <footer>
            <div className="container mx-auto ">
                <div className="grid grid-cols-4">
                    <div>
                        <Image src={Logo}/>
                    </div>
                    <div>
                        <h1 className="text-white font-bold mb-4">AkylbekuSaid.kg</h1>
                        <ul>
                            <li className="mb-4">
                                <Link href={'/school'}><a
                                    className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">Кайдзен
                                    школа</a></Link>

                            </li>
                            <li className="mb-4">
                                <Link href={'/school'}><a
                                    className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">Кайдзен
                                    клуб</a></Link>

                            </li>
                            <li className="mb-4">
                                <Link href={'/school'}><a
                                    className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">Путешествия</a></Link>

                            </li>
                            <li className="mb-4">
                                <button
                                    className="rounded-xl bg-[#1A5CFF] py-2 px-8 text-white font-bold header-btn">войти
                                </button>

                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-bold mb-4">{formatMessage({id :"Connect"})}</h1>
                        <p className="font-medium text-gray-400 text-sm leading-5">
                            {formatMessage({id : "footerText"})} :
                            <a href="mailto:mail@margulan.info">  mail@margulan.info</a>
                        </p>
                        <div className="flex justify-between items-center flex-wrap mt-4">
                            <a href="https://instagram.com">
                                <i className="fab fa-instagram bg-white text-1xl rounded-full px-2 py-2 	"/>
                            </a>
                            <a href="https://instagram.com">
                                <i className="fab fa-facebook-square bg-white text-1xl rounded-full px-2 py-2	"/>
                            </a>
                            <a href="https://instagram.com">
                                <i className="fab fa-telegram bg-white text-1xl rounded-full px-2 py-2	"/>
                            </a>
                            <a href="https://instagram.com">
                                <i className="fab fa-linkedin bg-white text-1xl rounded-full px-2 py-2	"/>
                            </a>

                            <a href="https://instagram.com">
                                <i className="fab fa-youtube bg-white text-1xl rounded-full px-2 py-2	 "/>
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <h3 className="text-white font-bold leading-3 -ml-4	mb-2">
                            <span className="text-[#1A5CFF]">{formatMessage({id : "subscribe"})}</span>
                            {formatMessage({id : "subscribe2"})}
                        </h3>
                        <input type="email" placeholder="  Ваш e-mail" className="footer_input leading-4 text-[#2C3E50] rounded-full w-60 rounded  py-3 px-2"/>
                        <button
                            className="rounded-2xl  bg-[#1A5CFF] py-3 px-8 text-white font-bold header-btn  absolute -ml-20  hover:-mt-6">войти
                        </button>
                        <p className="font-medium text-gray-400 text-sm leading-5 mt-4  ml-4">
                            ИП Сейсембай, г.Алматы, мкр. Нурлытау,
                            ул. Мерген, 93.
                            Идентификационный код: 661102300013
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <h4 className="font-medium text-gray-400 text-sm leading-5 mx-4">Авторские права © 2021 AkylbekuSaid.kg</h4>
                    </div>
                    <div className="flex">
                        <h4  className="font-medium text-gray-400 text-sm leading-5 mx-4">
                            Условия оказания  услуг Политика возврата
                        </h4>
                        <a href="#" className="ml-4"><Image src={Visa}/></a>
                        <a href="#"  className="ml-4"><Image src={MasterCard}/></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}
