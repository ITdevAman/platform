import Faq from "../components/Home/FAQ/FAQ";
import SchoolHero from "../components/KaizenSchool/SchoolHero";
import HomeLayout from "../components/HomeLayout";

export default function KaizenSchool() {
    return (
        <HomeLayout>

            <SchoolHero/>
            <Faq/>

        </HomeLayout>
    )
}