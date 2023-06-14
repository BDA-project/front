import { useEffect, useState } from 'react'
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   Box,
   Typography,
   Button,
} from '@mui/material'

export const NotasEstudiantes = () => {
   const [data, setData] = useState([])

   const fetchData = async () => {
      try {
         const response = await fetch('http://localhost:4000/estudiantes_notas')
         if (response.ok) {
            const result = await response.json()
            setData(result.estudianteList)
         } else {
            console.log('Error:', response.status)
         }
      } catch (error) {
         console.log('Error:', error.message)
      }
   }

   const calcularPromedio = (notas) => {
      const sum = notas.reduce((total, nota) => total + nota.nota, 0)
      return (sum / notas.length).toFixed(2)
   }
   const handleButtonClick = () => {
      fetchData()
   }
   return (
      <Box>
         <Typography variant="h4" component="h4" textAlign="center">
            NOTAS ESTUDIANTES
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
         <Box sx={{ display: 'flex ' }}></Box>
         <TableContainer>
            <Table>
               <TableHead sx={{ backgroundColor: '#B97FFF' }}>
                  <TableRow>
                     <TableCell sx={{ color: '#fff' }}>
                        Nombre del Estudiante
                     </TableCell>
                     <TableCell sx={{ color: '#fff' }}>Curso</TableCell>
                     <TableCell sx={{ color: '#fff' }}>Nota</TableCell>
                     <TableCell sx={{ color: '#fff' }}>Promedio</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {data.map((estudiante) => (
                     <TableRow key={estudiante.idEstudiante}>
                        <TableCell sx={{ color: '#fff' }}>
                           {estudiante.nombreEstudiante}
                        </TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                           {estudiante.curso.map((curso) => (
                              <div key={curso.cursoNombre}>
                                 {curso.cursoNombre}
                              </div>
                           ))}
                        </TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                           {estudiante.curso.map((curso) => (
                              <div key={curso.cursoNombre}>{curso.nota}</div>
                           ))}
                        </TableCell>
                        <TableCell sx={{ color: '#fff' }}>
                           {calcularPromedio(estudiante.curso)}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   )
}
