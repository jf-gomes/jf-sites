import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AccordionExpandIcon from '../AccordionExpandIcon/AccordionExpandIcon';

export default function AccordionExpandDefault() {

    const accordionData = [
        {
            id: 0,
            title: 'Como funciona o serviço?',
            txt: 'Você nos mostra como quer o site e quais as funcionalidades necessárias. Nossa equipe desenvoverá o site te mantendo atualizado durante todo o processo. Ao final, te entregamos o site no ar, com domínio e hospedagem prontos.'
        },
        {
            id: 1,
            title: 'Quanto tempo demora?',
            txt: 'Um site com poucas funcionalidades geralmente é entregue em cerca de 2 semanas. Já um site com muitas funcionalidades e diversas páginas pode levar cerca de 6 semanas para ser entregue.'
        },
        {
            id: 2,
            title: 'Quais as garantias?',
            txt: 'Na JF Sites acreditamos no desempenho do seu site. Em caso de falhas ou erros no sistema, a manutenção será gratuita pelo período de 6 meses após a compra.'
        }
    ]

    return (
        <div>
            {accordionData.map((item) => (
                <Accordion key={item.id} defaultExpanded={item.id == 0}>
                    <AccordionSummary
                    expandIcon={<AccordionExpandIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {item.txt}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}