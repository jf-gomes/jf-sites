import formImg from '../../assets/formImg.png'
import Btn from '../Btn/Btn'

interface FormLabelProps{
    label: string,
    additionalText: string,
    inputName: string,
    inputId: string
}

interface CheckboxDivProps{
    label: string,
    inputName: string,
    inputId: string,
    htmlFor: string
}

function FormLabel({ label, additionalText, inputName, inputId }: FormLabelProps){
    return (
        <div className="flex gap-6 items-center flex-wrap">
            <div className='w-40'>
                <label htmlFor="">{ label }</label>
                <p className='text-xs'>{ additionalText }</p>
            </div>
            <input className='rounded border border-blue p-1' type="text" name={inputName} id={inputId} />
        </div>
    )
}

function CheckboxDiv({ label, inputName, inputId, htmlFor }: CheckboxDivProps){
    return (
        <div className='flex gap-6 items-center'>
            <input type="checkbox" name={inputName} id={inputId} />
            <label htmlFor={htmlFor} >{label}</label>
        </div>
    )
}

export default function Sect6(){
    return (
        <section className='flex items-center bg-white justify-center p-12' id='formSection'>
            <div className='flex flex-col gap-12'>
                <div>
                    <h2 className="font-bold text-blue">Vamos começar?</h2>
                    <h1 className="text-2xl font-bold">Faça um orçamento gratuito!</h1>
                </div>
                <div className='flex gap-6 items-center justify-center flex-wrap'>
                    <img className='max-w-80' src={formImg} alt="Orçamento" />
                    <form action="" className="flex flex-col gap-6">
                        <FormLabel label='Qual seu nome?' additionalText='Como podemos te chamar?' inputName='name' inputId='name' />
                        <FormLabel label='Qual seu e-mail?' additionalText='Fique tranquilo! Não enviamos spam.' inputName='email' inputId='email' />
                        <FormLabel label='Como você quer o seu site?' additionalText='Descreva brevemente como você gostaria que seu site ficasse.' inputName='description' inputId='description' />
                        <div className="flex gap-6 items-center flex-wrap">
                            <div className='w-40'>
                                <label htmlFor="">Qual a finalidade do seu site?</label>
                                <p className='text-xs'>Ajude-nos a desenvolver um site apropriado para o seu negócio.</p>
                            </div>
                            <div className='flex flex-col'>
                                <CheckboxDiv label='Loja virtual' inputName='store' inputId='store' htmlFor='store' />
                                <CheckboxDiv label='Catálogo de produtos' inputName='products' inputId='products' htmlFor='products' />
                                <CheckboxDiv label='Cardápio / Restaurante' inputName='restaurant' inputId='restaurant' htmlFor='restaurant' />
                                <CheckboxDiv label='Landing page' inputName='landingPage' inputId='landingPage' htmlFor='landingPage' />
                                <CheckboxDiv label='Outros' inputName='others' inputId='others' htmlFor='others' />
                            </div>
                        </div>
                        <Btn content='Enviar!' color='darkBlue' hoverBg='blue' size='large' />
                    </form>
                </div>
            </div>
        </section>
    )
}