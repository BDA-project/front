import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from '../../assets/img/FirebaseData.png'

export const ImageComponent = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
         }}
      >
         <Accordion
            sx={{
               backgroundColor: '#1976d2', // Color azul
               width: '60%', // Ancho del acordeón
               margin: '0 auto', // Centrado horizontal
               color: 'white',
            }}
         >
            <AccordionSummary>
               <Typography variant="h5">Resultados</Typography>
            </AccordionSummary>
            <AccordionDetails
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
               }}
            >
               <Box display="flex" justifyContent="center" width="100%">
                  <img
                     src={Image}
                     alt="Firebase Data"
                     style={{ width: '100%' }}
                  />
               </Box>
            </AccordionDetails>
         </Accordion>
      </Box>
   )
}
