import { useState } from 'react'
import {
   Box,
   Typography,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Button,
} from '@mui/material'
import { HistogramaEstudianteGenero } from '../charts/HistogramaEstudiante1'
import { HistogramaEstudianteEdad } from '../charts/HistogramaEstudiante2'

export const AgregacionEstudiantes = () => {
   const [data, setData] = useState([])

   const fetchData = async () => {
      try {
         const response = await fetch(
            'http://localhost:4000/agregacion_estudiante'
         )
         if (response.ok) {
            const result = await response.json()
            setData(result)
         } else {
            console.log('Error:', response.status)
         }
      } catch (error) {
         console.log('Error:', error.message)
      }
   }

   const handleButtonClick = () => {
      fetchData()
   }
   return (
      <Box>
         <Typography variant="h4" component="h4" textAlign="center">
            AGREGACION ESTUDIANTES
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
            <TableContainer m={4}>
               <Table>
                  <TableHead sx={{ backgroundColor: '#B97FFF' }}>
                     <TableRow>
                        <TableCell sx={{ color: '#fff' }}>Nombre</TableCell>
                        <TableCell sx={{ color: '#fff' }}>Edad</TableCell>
                        <TableCell sx={{ color: '#fff' }}>Género</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {data.map((estudiante, index) => (
                        <TableRow key={index}>
                           <TableCell sx={{ color: '#fff' }}>
                              {estudiante.nombre}
                           </TableCell>
                           <TableCell sx={{ color: '#fff' }}>
                              {estudiante.edad}
                           </TableCell>
                           <TableCell sx={{ color: '#fff' }}>
                              {estudiante.genero}
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <HistogramaEstudianteGenero data={data} />
            <HistogramaEstudianteEdad data={data} />
         </Box>
      </Box>
   )
}
