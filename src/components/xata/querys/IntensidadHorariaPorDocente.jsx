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

export const IntensidadHorariaPorDocente = () => {
   const [data, setData] = useState([])

   const fetchData = async () => {
      try {
         const response = await fetch(
            'http://localhost:4000/intensidad_horaria_por_docente'
         )

         if (response.ok) {
            const responseData = await response.json()
            const formattedData = formatData(responseData)
            setData(formattedData)
         } else {
            console.log('Error:', response.status)
         }
      } catch (error) {
         console.log('Error:', error.message)
      }
   }

   const formatData = (responseData) => {
      const { totalHoras, listAsignaturasByDocente } = responseData

      // Ordenar los docentes por orden alfabético
      const docentes = [
         ...new Set(listAsignaturasByDocente.map((item) => item.docenteNombre)),
      ]
      docentes.sort((a, b) => a.localeCompare(b))

      const asignaturas = [
         ...new Set(
            listAsignaturasByDocente.map((item) => item.asignaturaNombre)
         ),
      ]
      const matrix = []

      // Inicializar la matriz con ceros
      for (let i = 0; i < docentes.length; i++) {
         matrix[i] = []
         for (let j = 0; j < asignaturas.length; j++) {
            matrix[i][j] = 0
         }
      }

      // Sumar las horas correspondientes
      listAsignaturasByDocente.forEach((item) => {
         const docenteIndex = docentes.indexOf(item.docenteNombre)
         const asignaturaIndex = asignaturas.indexOf(item.asignaturaNombre)
         matrix[docenteIndex][asignaturaIndex] += Number(item.intensidadHoraria)
      })

      return { docentes, asignaturas, matrix, totalHoras }
   }

   const handleButtonClick = () => {
      fetchData()
   }

   return (
      <Box textAlign="center">
         <Typography variant="h4" component="h4" textAlign="center">
            INTENSIDAD HORARIA POR DOCENTE Y ASIGNATURA
         </Typography>
         <Box m={4} border="1px solid #B97FFF" p={2}>
            <Button
               variant="contained"
               onClick={handleButtonClick}
               color="secondary"
            >
               CONSEGUIR DATOS
            </Button>
         </Box>
         <TableContainer>
            {data.docentes && data.docentes.length > 0 && (
               <Table>
                  <TableHead sx={{ backgroundColor: '#B97FFF' }}>
                     <TableRow>
                        <TableCell sx={{ color: '#fff' }}></TableCell>
                        {data.docentes.map((docente, docenteIndex) => (
                           <TableCell
                              key={docenteIndex}
                              align="center"
                              sx={{ color: '#fff' }}
                           >
                              {docente}
                           </TableCell>
                        ))}
                        <TableCell align="center" sx={{ color: '#fff' }}>
                           Total
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {data.asignaturas.map((asignatura, asignaturaIndex) => (
                        <TableRow key={asignaturaIndex}>
                           <TableCell sx={{ color: '#fff' }}>
                              {asignatura}
                           </TableCell>
                           {data.matrix.map((row, docenteIndex) => (
                              <TableCell
                                 key={docenteIndex}
                                 align="center"
                                 sx={{ color: '#fff' }}
                              >
                                 {row[asignaturaIndex]}
                              </TableCell>
                           ))}
                           <TableCell align="center" sx={{ color: '#fff' }}>
                              {data.matrix.reduce(
                                 (sum, row) => sum + row[asignaturaIndex],
                                 0
                              )}
                           </TableCell>
                        </TableRow>
                     ))}
                     <TableRow>
                        <TableCell sx={{ color: '#fff' }}>Total</TableCell>
                        {data.docentes.map((docente, docenteIndex) => (
                           <TableCell
                              key={docenteIndex}
                              align="center"
                              sx={{ color: '#fff' }}
                           >
                              {data.matrix[docenteIndex].reduce(
                                 (sum, value) => sum + value,
                                 0
                              )}
                           </TableCell>
                        ))}
                        <TableCell align="center" sx={{ color: '#fff' }}>
                           {data.totalHoras}
                        </TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            )}
         </TableContainer>
      </Box>
   )
}
