import React, { useState, useEffect } from 'react'
import {
   Box,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
   Button,
} from '@mui/material'
import { HorasPorProgramaChart } from '../charts/HorasPorProgramaChart'

export const IntensidadHorariaPorPrograma = () => {
   const [data, setData] = useState([])
   const fetchData = async () => {
      try {
         const response = await fetch(
            'http://localhost:4000/intensidad_horaria_por_programa'
         )
         if (response.ok) {
            const responseData = await response.json()
            const uniqueData = removeDuplicates(
               responseData.listProgramaByDocente
            )
            setData(uniqueData)
         } else {
            console.log('Error:', response.status)
         }
      } catch (error) {
         console.log('Error:', error.message)
      }
   }

   const removeDuplicates = (programas) => {
      const uniqueData = {}
      programas.forEach((programa) => {
         const { programaNombre, intensidadHoraria } = programa
         if (uniqueData[programaNombre]) {
            uniqueData[programaNombre] += intensidadHoraria
         } else {
            uniqueData[programaNombre] = intensidadHoraria
         }
      })
      return uniqueData
   }

   const handleButtonClick = () => {
      fetchData()
   }

   return (
      <Box>
         <Typography variant="h4" component="h4" textAlign="center">
            INTENSIDAD HORARIA POR PROGRAMA
         </Typography>
         <Box textAlign="center" m={4} border="1px solid #B97FFF" p={2}>
            <Button
               variant="contained"
               onClick={handleButtonClick}
               color="secondary"
            >
               CONSEGUIR DATOS
            </Button>
         </Box>
         <Box sx={{ display: 'flex' }}>
            <TableContainer component={Box} m={4} width="50%">
               <Table>
                  <TableHead sx={{ backgroundColor: '#B97FFF' }}>
                     <TableRow>
                        <TableCell sx={{ color: '#fff' }}>
                           Programa Nombre
                        </TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                           Suma de Intensidades Horarias
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {Object.keys(data).map((programaNombre) => (
                        <TableRow key={programaNombre}>
                           <TableCell sx={{ color: '#fff' }}>
                              {programaNombre}
                           </TableCell>
                           <TableCell sx={{ color: '#fff' }}>
                              {data[programaNombre]}
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
            <Box m={4} width="100%">
               <HorasPorProgramaChart intensidadesHorarias={data} />
            </Box>
         </Box>
      </Box>
   )
}
