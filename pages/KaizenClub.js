import Faq from "../components/Home/FAQ/FAQ";
import HomeLayout from "../components/HomeLayout";
import ClubHero from "../components/KaizenClub/ClubHero";

export default function KaizenSchool() {
    return (
        <HomeLayout>
            <ClubHero/>
            <Faq/>
        </HomeLayout>
    )
}