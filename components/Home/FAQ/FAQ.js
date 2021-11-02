import {useIntl} from "react-intl"
import Accordion from "./AccordionSection";


export default function Faq() {
    const {formatMessage} = useIntl();

    return (
        <section id="faq" className="pb-32">
            <div className="container mx-auto">
                <div className="grid cols-2 quiz">
                    <div className="quiz-left flex flex-col items-center justify-start">
                        <h1 className="text-4xl	text-white text-center leading-loose">
                            {formatMessage({id: 'faqTitle'})}?
                        </h1>
                        <h1 className="text-[#1A5CFF] text-[300px] leading-[366px] text-center font-bold	faq">?</h1>
                    </div>
                    <div className="ml-14">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </section>

    )
}
