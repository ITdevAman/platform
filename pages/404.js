import Image from "next/image";
import  Number from '../assets/img/404.png'

export default function Error() {
    return (
        <>
            <div className="container mx-auto">
                    <Image src={Number}/>
            </div>
        </>
    )
}