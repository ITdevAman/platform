import Header from "./Home/Header/Header"
import Footer from "./Home/Footer/Footer";


export default function HomeLayout({children}) {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}
