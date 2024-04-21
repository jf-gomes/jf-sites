import sect3Img from '../../assets/sect3-img.png'
import clock from '../../assets/clock.png'
import design from '../../assets/design.png'
import technology from '../../assets/technology.png'

export default function Sect3(){
    return (
        <section className='flex items-center bg-white justify-center p-12'>
            <div className='flex flex-col gap-12'>
                <div>
                    <h2 className="font-bold text-blue">Múltiplas funcionalidades</h2>
                    <h1 className="text-2xl font-bold">Por que escolher a JF Sites?</h1>
                </div>
                <div className='flex gap-6 flex-wrap items-center justify-center'>
                    <img className='w-60' src={sect3Img} alt="Por que escolher a JF Sites?" />
                    <ul className='font-bold'>
                        <li>Desenvolvimento rápido</li>
                        <li>Banco de dados</li>
                        <li>Domínio personalizado</li>
                        <li>Hospedagem</li>
                        <li>Portabilidade</li>
                    </ul>
                </div>
                <div className='flex gap-12 flex-wrap text-lightGrey'>
                    <div className='flex flex-col items-center'>
                        <h3>Sites rápidos</h3>
                        <img className='w-20' src={clock} alt="Sites rápidos" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3>Design moderno</h3>
                        <img className='w-20' src={design} alt="Design moderno" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3>Tecnologia</h3>
                        <img className='w-20' src={technology} alt="Tecnologia" />
                    </div>
                </div>
            </div>
        </section>
    )
}