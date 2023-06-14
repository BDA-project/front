import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'

export const SimpleQuery = () => {
   const [result, setResult] = useState('')
   const sendDataToServer = async (id) => {
      try {
         const response = await fetch(`http://localhost:4000/`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
         })

         if (response.ok) {
            const data = await response.json()
            setResult(data)
         } else {
            setResult('Error: ' + response.status)
         }
      } catch (error) {
         setResult('Error: ' + error.message)
      }
   }

   const handleClick = () => {
      const id = 'AUXILIAR_EN_CLINICA_VETERINARIA_-_Diurna'
      sendDataToServer(id)
   }

   return (
      <Box>
         <Typography variant="h4" component="h2">
            CONSULTA SIMPLE
         </Typography>
         <Typography variant="body2" component="p">
            id: AUXILIAR_EN_CLINICA_VETERINARIA_-_Diurna
         </Typography>
         <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={2}
            m={2}
            border="1px solid #B97FFF"
            borderRadius="4px"
            width="600px"
         >
            <Button variant="contained" onClick={handleClick} color="secondary">
               Conseguir Programa
            </Button>
            <Box>
               {Object.entries(result).map(([key, value]) => (
                  <Box
                     key={key}
                     display="flex"
                     justifyContent="left"
                     alignItems="center"
                     width="100%"
                     mt={1}
                  >
                     <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        component="span"
                     >
                        {key}:
                     </Typography>
                     <Typography ml={2} variant="body1" component="span">
                        {value.toString()}
                     </Typography>
                  </Box>
               ))}
            </Box>
         </Box>
      </Box>
   )
}
