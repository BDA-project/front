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
import { HistogramaCursosCantidadEstudiantes } from '../charts/HistogramaCursosCantidadEstudiantes'
import { HistogramaCursosIntensidadHoraria } from '../charts/HistogramaCursosIntensidadHoraria'

export const AgregacionCursos = () => {
   const [data, setData] = useState([])

   const fetchData = async () => {
      try {
         const response = await fetch('http://localhost:4000/agregacion_curso')
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
            AGREGACION CURSOS
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
                        <TableCell sx={{ color: '#fff' }}>
                           Nombre del Curso
                        </TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                           Intensidad Horaria
                        </TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                           Cantidad de Estudiantes
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {data.map((curso, index) => (
                        <TableRow key={index}>
                           <TableCell sx={{ color: '#fff' }}>
                              {curso.nombreCurso}
                           </TableCell>
                           <TableCell sx={{ color: '#fff' }}>
                              {curso.intensidadHoraria}
                           </TableCell>
                           <TableCell sx={{ color: '#fff' }}>
                              {curso.cantidadEstudiantes}
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <HistogramaCursosCantidadEstudiantes data={data} />
            <HistogramaCursosIntensidadHoraria data={data} />
         </Box>
      </Box>
   )
}
