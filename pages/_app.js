import {useSelector} from 'react-redux'
import {IntlProvider} from "react-intl";
import {MESSAGES} from "../intl/messages";
import {wrapper} from "../redux/reducer";
import 'tailwindcss/tailwind.css'
import '../styles/scss/index.scss';
import "../styles/scss/footer.scss"
import "../styles/scss/AccordionSection.scss"
// import '../styles/globals.css'
import '../styles/icons.css'
import '/styles/scss/hero.scss'



function MyApp({ Component, pageProps }) {
  const locale = useSelector(state => state.main.locale);
  return (
      <IntlProvider locale={locale} messages={MESSAGES[locale]} >
        <Component {...pageProps}/>

      </IntlProvider>
  )
}

export default wrapper.withRedux(MyApp);
