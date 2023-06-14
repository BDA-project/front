import { useState } from 'react'
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
import { HorasPorAsignaturasChart } from '../charts/HorasPorAsignaturaChart'

export const IntensidadHorariaPorAsignatura = () => {
   const [data, setData] = useState([])

   const fetchData = async () => {
      try {
         const response = await fetch(
            'http://localhost:4000/intensidad_horaria_por_asignatura'
         )
         if (response.ok) {
            const responseData = await response.json()
            const uniqueData = removeDuplicates(responseData.listAsignaturas)
            setData(uniqueData)
         } else {
            console.log('Error:', response.status)
         }
      } catch (error) {
         console.log('Error:', error.message)
      }
   }

   const removeDuplicates = (asignaturas) => {
      const uniqueData = {}
      asignaturas.forEach((asignatura) => {
         const { id, asignatura_nombre } = asignatura.asignaturaNombre
         if (uniqueData[id]) {
            uniqueData[id].intensidadHoraria += asignatura.intensidadHoraria
         } else {
            uniqueData[id] = {
               asignaturaNombre: {
                  id,
                  asignatura_nombre,
               },
               intensidadHoraria: asignatura.intensidadHoraria,
            }
         }
      })
      return Object.values(uniqueData)
   }

   const handleButtonClick = () => {
      fetchData()
   }

   return (
      <Box>
         <Typography variant="h4" component="h4" textAlign="center">
            INTENSIDAD HORARIA POR ASIGNATURA
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
         <Box sx={{ display: 'flex ' }}>
            <TableContainer m={4} width="50%">
               <Table>
                  <TableHead sx={{ backgroundColor: '#B97FFF' }}>
                     <TableRow>
                        <TableCell sx={{ color: '#fff' }}>
                           Asignatura Nombre
                        </TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                           Intensidad Horaria
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {data.length > 0 ? (
                        data.map((asignatura) => (
                           <TableRow key={asignatura.asignaturaNombre.id}>
                              <TableCell sx={{ color: '#fff' }}>
                                 {asignatura.asignaturaNombre.asignatura_nombre}
                              </TableCell>
                              <TableCell sx={{ color: '#fff' }}>
                                 {asignatura.intensidadHoraria}
                              </TableCell>
                           </TableRow>
                        ))
                     ) : (
                        <TableRow>
                           <TableCell
                              colSpan={2}
                              align="center"
                              sx={{ color: '#fff' }}
                           >
                              No hay datos disponibles
                           </TableCell>
                        </TableRow>
                     )}
                  </TableBody>
               </Table>
            </TableContainer>
            <Box m={4} width="100%">
               <HorasPorAsignaturasChart intensidadesHorarias={data} />
            </Box>
         </Box>
      </Box>
   )
}
