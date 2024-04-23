import responsive from '../../assets/responsive.gif'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

export default function Sect2(){

    const imgs: string[] = [
        banner1,
        banner2,
        banner3
    ]

    return (
        <section className='flex items-center justify-center p-12'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col'>
                    <h2 className="font-bold text-blue">Sites elegantes que funcionam em <span className='underline'>qualquer tela!</span></h2>
                    <h1 className="text-2xl font-bold">O que oferecemos?</h1>
                </div>
                <div className='flex justify-center gap-6 flex-wrap'>
                    {imgs.map((img) => (
                        <img key={img} className='max-w-60 rounded hover:translate-y-m6 transition' src={img} rel='Banner' />
                    ))}
                </div>
            </div>
        </section>
    )
}