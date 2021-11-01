import HomeLayout from "../components/HomeLayout";
import Hero from "../components/Home/hero/Hero";
import Article from "../components/Home/Article/Article";
import Subscribe from "../components/Home/Subscribe/subscribe";
import Faq from "../components/Home/FAQ/FAQ";


export default function Home() {
  return (
      <HomeLayout>
          <Hero/>
          <Article/>
          <Subscribe/>
          <Faq/>
      </HomeLayout>

  )
}
