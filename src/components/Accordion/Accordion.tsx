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
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum vitae adipisci possimus enim voluptatibus dolores iste unde ipsa vel amet aliquid eaque, obcaecati qui corrupti. Quidem, iusto officia! Dolor.'
        },
        {
            id: 1,
            title: 'Quanto tempo demora?',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum vitae adipisci possimus enim voluptatibus dolores iste unde ipsa vel amet aliquid eaque, obcaecati qui corrupti. Quidem, iusto officia! Dolor.'
        },
        {
            id: 2,
            title: 'Quais as garantias?',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum vitae adipisci possimus enim voluptatibus dolores iste unde ipsa vel amet aliquid eaque, obcaecati qui corrupti. Quidem, iusto officia! Dolor.'
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