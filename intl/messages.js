import {LOCALES} from "./locales";
import {Hero} from "./messages/hero";
import {Header} from "./messages/header";
import {Footer} from "./messages/footer";
import {Arcticle} from "./messages/arcticle";
import {Faq} from "./messages/faq";

export const MESSAGES = {
    [LOCALES.KYRGYZ]:{
        ...Hero[LOCALES.KYRGYZ],
        ...Header[LOCALES.KYRGYZ],
        ...Footer[LOCALES.KYRGYZ],
        ...Arcticle[LOCALES.KYRGYZ],
        ...Faq[LOCALES.KYRGYZ],

    },
    [LOCALES.RUSSIAN]:{
        ...Hero[LOCALES.RUSSIAN],
        ...Header[LOCALES.RUSSIAN],
        ...Footer[LOCALES.RUSSIAN],
        ...Arcticle[LOCALES.RUSSIAN],
        ...Faq[LOCALES.RUSSIAN],
    }

}
