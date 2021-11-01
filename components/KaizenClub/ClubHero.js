import Image from "next/image";


export default function ClubHero() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid">
                    <div>
                        <h1>КАЙДЗЕН Клуб</h1>
                        <p>Получайте новые знания, навыки и возможности
                            для эффективной жизни и бизнеса</p>
                        <div>
                            <button>Присоединиться</button>
                            <button>Войти</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}