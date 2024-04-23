import AccordionExpandDefault from "../Accordion/Accordion"

export default function Sect5(){
    return (
        <section className='flex items-center justify-center p-12 bg-pink'>
            <div className='flex flex-col gap-12 w-1/2 min-w-80'>
                <div>
                    <h1 className="text-2xl font-bold">Tire suas dúvidas</h1>
                </div>
                <AccordionExpandDefault />
            </div>
        </section>
    )
}