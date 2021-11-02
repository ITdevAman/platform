import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../assets/img/Logo.svg'
import Lang from '../../../assets/img/lang.svg'
import {LOCALES} from "../../../intl/locales";
import {languages} from "../../../constants/languages";
import {useDispatch} from "react-redux";
import {useIntl} from "react-intl";
import {setLocale} from "../../../redux/reducers/main";


export default function Header() {
    const dispatch = useDispatch();
    const {formatMessage, locale} = useIntl()
    function RU (){
        return    document.querySelector(".optionRU").style.display = "block" , document.querySelector(".optionKYR").style.display = "none"

    }
    function KYR (){
        return    document.querySelector(".optionRU").style.display = "none" , document.querySelector(".optionKYR").style.display = "block"

    }

    return (
        <header id="header">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center">
                        <Image src={Logo} alt=""/>
                        <p className="w-[73px] text-xs text-white leading-3	font-normal	ml-2  ">
                            Образовательная
                            платформа Кубаныча</p>
                    </a>
                    <nav>
                        <Link href={'/lents'}><a
                            className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">Лента</a></Link>
                        <Link href={"/KaizenSchool"} >
                            <a className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">
                            Кайдзен {formatMessage({id: "schoolLink"})}
                        </a></Link>
                        <Link href={'/KaizenClub'}><a
                            className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">Кайдзен
                            клуб</a></Link>
                        <Link href={'/trip'}><a
                            className="font-medium text-gray-400 text-sm leading-5  mx-4 hover:text-white">{formatMessage(({id: 'tripLink'}))}</a></Link>
                        <Link href={'/store'}><a
                            className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">Магазин</a></Link>
                    </nav>
                    <button className="ml-2  lang flex" name="main">
                        <Image src={Lang}/>
                        <ul className="flex ">
                            <li className="opacity-0  languages">
                                <button aria-current="page"  value={locale} onClick={(e) => dispatch(setLocale(e.target.value))}
                                   className="btn_lang ">

                               <div className=" optionRU  ">
                                   {languages.map((el) => (
                                       <button
                                           onClick={()=>KYR()}
                                           value={LOCALES[el.key]}
                                           className="btn_tit">
                                           {el.text}
                                       </button>
                                   ))}
                               </div>
                                    <div className="optionKYR  ">
                                        {languages.map((el) => (
                                            <button
                                                onClick={()=>RU()}
                                                value={LOCALES[el.key]}
                                                className="btn_tit">
                                                {el.text1}
                                            </button>
                                        ))}
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </button>
                    <div>
                        <button className="rounded-xl bg-[#1A5CFF] py-2 px-8 text-white font-bold header-btn">войти</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
