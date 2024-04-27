import AccordionExpandDefault from "../Accordion/Accordion"

export default function Sect4(){
    return (
        <section className="bg-no-repeat bg-cover bg-fixed bg-[url('/src/assets/first-sect-bg.jpg')] flex items-center justify-center p-12">
            <div className='flex flex-col gap-12 w-1/2 min-w-80 p-6 rounded'>
                <div>
                    <h1 className="text-2xl font-bold text-white">Tire suas dúvidas</h1>
                </div>
                <AccordionExpandDefault />
            </div>
        </section>
    )
}