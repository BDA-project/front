import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { db } from '../../../helpers/firebase'

const calculateAverageNoteByStudent = async () => {
   try {
      // ...

      return Object.values(averageNotesByStudent)
   } catch (error) {
      console.log(
         'Error al calcular el promedio de notas por estudiante:',
         error
      )
      return []
   }
}

export const AverageNoteByStudent = () => {
   const [averageNotes, setAverageNotes] = useState([])

   const handleCalculateAverageNoteByStudent = async () => {
      const result = await calculateAverageNoteByStudent()
      setAverageNotes(result)
   }

   return (
      <Box
         display="flex"
         flexDirection="column"
         alignItems="center"
         m={2}
         border="1px solid #1976d2"
         borderRadius="4px"
         p={2}
      >
         <Button
            variant="contained"
            onClick={handleCalculateAverageNoteByStudent}
         >
            Calcular Promedio de Notas por Estudiante
         </Button>
         {averageNotes.length > 0 && (
            <table style={{ borderCollapse: 'collapse', marginTop: '1rem' }}>
               <thead>
                  <tr>
                     <th
                        style={{ border: '1px solid #ccc', padding: '0.5rem' }}
                     >
                        <Typography
                           variant="subtitle1"
                           sx={{ fontWeight: 'bold' }}
                        >
                           Estudiante
                        </Typography>
                     </th>
                     <th
                        style={{ border: '1px solid #ccc', padding: '0.5rem' }}
                     >
                        <Typography
                           variant="subtitle1"
                           sx={{ fontWeight: 'bold' }}
                        >
                           Promedio de Notas
                        </Typography>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {averageNotes.map((averageNote, index) => (
                     <tr key={index}>
                        <td
                           style={{
                              border: '1px solid #ccc',
                              padding: '0.5rem',
                           }}
                        >
                           <Typography variant="body1">
                              {averageNote.estudiante || 'Sin nombre'}
                           </Typography>
                        </td>
                        <td
                           style={{
                              border: '1px solid #ccc',
                              padding: '0.5rem',
                           }}
                        >
                           <Typography variant="body1">
                              {averageNote.averageNote.toFixed(2)}
                           </Typography>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </Box>
   )
}
