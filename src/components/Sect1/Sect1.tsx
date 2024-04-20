import Btn from "../Btn/Btn";

export default function Sect1(){
    return (
        <section className="flex items-center justify-center h-32r p-12 bg-blue text-white">
            <div className="max-w-2xl flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Precisa de um site para o seu negócio?</h1>
                <h2 className="text-xl font-bold text-pink">Deixe conosco!</h2>
                <p>Na JF Sites, nós desenvolvemos um site profissional e elegante para o seu negócio e te entregamos o site no ar 100% funcional!</p>
                <div className="flex gap-6">
                    <Btn content="Faça um orçamento" color="pink" />
                    <Btn content="Entre em contato" color="darkBlue" />
                </div>
            </div>
        </section>
    )
}