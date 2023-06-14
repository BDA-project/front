import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
   Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const ImageAccordion = ({ imageSrc, altText }) => {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
         }}
      >
         <Accordion
            sx={{
               backgroundColor: '#B97FFF', // Color azul
               width: '100%', // Ancho del acordeón
               margin: '0 auto', // Centrado horizontal
               color: 'white',
            }}
         >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography> Ejemplo </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <img src={imageSrc} alt={altText} style={{ width: '100%' }} />
            </AccordionDetails>
         </Accordion>
      </Box>
   )
}
