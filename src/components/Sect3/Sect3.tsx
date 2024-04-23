import sect3Img from '../../assets/sect3-img.png'
import clock from '../../assets/clock.png'
import design from '../../assets/design.png'
import technology from '../../assets/technology.png'
import Typography from '@mui/material/Typography';
import MouseOverPopover from '../../components/Popover/Popover';
import { useState } from 'react'

export default function Sect3(){

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setContent(content)
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const [content, setContent] = useState<string>('')

    const popovers = [
        {
            id: 0,
            txt: 'Seu site fica pronto em poucas semanas, sem prejuízos ao seu negócio!'
        },
        {
            id: 1,
            txt: 'Não se preocupe com hospedagem e domínio. Nós resolvemos tudo e te entregamos o site no ar totalmente funcional.'
        },
        {
            id: 2,
            txt: 'Seu site funcionará perfeitamente em computadores, notebooks, tablets e celulares.'
        },
        {
            id: 3,
            txt: 'Em caso de problemas no site, nós realizamos manutenção e ajustes gratuitos por um período de 6 meses.'
        }
    ]

    return (
        <section className='flex items-center bg-white justify-center p-12'>
            <div className='flex flex-col gap-12'>
                <div>
                    <h2 className="font-bold text-blue">Múltiplas funcionalidades</h2>
                    <h1 className="text-2xl font-bold">Por que escolher a JF Sites?</h1>
                </div>
                <div className='flex gap-6 flex-wrap items-center justify-center'>
                    <img className='max-w-80' src={sect3Img} alt="Por que escolher a JF Sites?" />
                    <ul className='font-bold flex flex-col gap-2'>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            <li className='hover:text-pink cursor-pointer' onMouseOver={() => setContent(popovers[0].txt)}>Desenvolvimento rápido</li>
                        </Typography>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            <li className='hover:text-pink cursor-pointer' onMouseOver={() => setContent(popovers[1].txt)}>Domínio e hospedagem</li>
                        </Typography>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            <li className='hover:text-pink cursor-pointer' onMouseOver={() => setContent(popovers[2].txt)}>Portabilidade</li>
                        </Typography>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            <li className='hover:text-pink cursor-pointer' onMouseOver={() => setContent(popovers[3].txt)}>Manutenção</li>
                        </Typography>
                    </ul>
                </div>
                <div className='flex justify-center gap-12 flex-wrap text-lightGrey'>
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
            <MouseOverPopover anchorEl={anchorEl} handlePopoverClose={handlePopoverClose} handlePopoverOpen={handlePopoverOpen} open={open} content={content} />
        </section>
    )
}