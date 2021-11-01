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


                    <button className="ml-32  lang flex" name="main">
                        <Image src={Lang}/>
                        <ul className="flex">
                            <li className="hidden languages">
                                <a href="/" aria-current="page"
                                   className="text-white rounded-3xl bg-black-700 py-2 px-3 lang-btn -ml-28 pointer">кыргызча</a>
                            </li>
                            <li className="hidden ">
                                <a href="/" aria-current="page"
                                   className="text-white rounded-3xl bg-black-700 lang-btn">русский</a>
                            </li>
                        </ul>
                    </button>
                    <select name="main" value={locale} onChange={(e) => dispatch(setLocale(e.target.value))}
                            className="bg-transparent   text-white ">
                        {languages.map((el) => (
                            <option
                                key={LOCALES[el.key]}
                                value={LOCALES[el.key]}
                                className="option">
                                {el.flag}{el.text}

                            </option>
                        ))}
                    </select>
                    <button className="rounded-xl bg-[#1A5CFF] py-2 px-8 text-white font-bold header-btn">войти</button>
                </div>

            </div>
        </header>
    )
}
