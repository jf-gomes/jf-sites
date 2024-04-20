import responsive from '../../assets/responsive.gif'

export default function Sect2(){
    return (
        <section className='flex gap-6 items-center justify-center flex-wrap h-32r p-12'>
            <div>
                <h2 className="font-bold text-blue">Sites elegantes que funcionam em <span className='underline'>qualquer tela!</span></h2>
                <h1 className="text-2xl font-bold">O que oferecemos?</h1>
                <ul>
                    <li>Sites profissionais</li>
                    <li>Landing pages</li>
                    <li>Sistemas web</li>
                    <li>Lojas, cardápios, catálogos virtuais</li>
                    <li className="text-darkBlue font-bold">E muito mais</li>
                </ul>
            </div>
            <img className='w-80 p-6' src={responsive} alt="Responsividade" />
        </section>
    )
}