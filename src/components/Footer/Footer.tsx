import greyLogo from '../../assets/greyLogo.png'

export default function Footer(){
    return (
        <footer>
            <div className='flex justify-around items-center flex-wrap gap-6'>
                <div className='max-w-80'>
                    <img className='w-20' src={greyLogo} alt="JF Sites" />
                    <p className='text-sm text-justify'>JF Sites é uma empresa de desenvolvimento de sites profissionais e elegantes. Quer um website 100% funcional para o seu negócio? Entre em contato com o nosso time!</p>
                </div>
                <ul className='flex gap-6 text-sm p-6'>
                    <li className='cursor-pointer hover:underline'>Termos de uso</li>
                    <li className='cursor-pointer hover:underline'>Entre em contato</li>
                    <li className='cursor-pointer hover:underline'>Sobre a empresa</li>
                </ul>
            </div>
            <p className='text-xs p-6 text-center'>Copyright © 2024. Todos os direitos reservados</p>
        </footer>
    )
}