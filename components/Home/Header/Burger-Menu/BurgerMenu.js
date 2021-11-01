import { slide as Menu } from 'react-burger-menu'
import Image from 'next/image'
import Lang from '../../../../assets/img/home.png'

export default function BurgerMenu() {
    return (
        <Menu right  burgerButtonClassName={ "my-class" }  customBurgerIcon={ <Image src={Lang} /> }>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/">About</a>
            <a id="contact" className="menu-item" href="/">Contact</a>
        </Menu>
    )
}
