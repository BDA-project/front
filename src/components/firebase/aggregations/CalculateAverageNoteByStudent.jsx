import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { db } from '../../../helpers/firebase'

const calculateAverageNoteByStudent = async () => {
   try {
      const collectionRef = collection(db, 'inscripcion')
      const querySnapshot = await getDocs(collectionRef)

      const averageNotesByStudent = {}

      querySnapshot.forEach((doc) => {
         const inscripcionData = doc.data()

         if (
            inscripcionData.inscripcion_nota &&
            inscripcionData.estudiante_id
         ) {
            const note = parseInt(inscripcionData.inscripcion_nota, 10)
            const estudianteId =
               inscripcionData.estudiante_id._key.path.segments[6]

            if (!averageNotesByStudent[estudianteId]) {
               averageNotesByStudent[estudianteId] = {
                  estudianteId,
                  totalNotes: 0,
                  count: 0,
                  averageNote: 0,
               }
            }

            averageNotesByStudent[estudianteId].totalNotes += note
            averageNotesByStudent[estudianteId].count++
         }
      })

      // Obtener los nombres de los estudiantes para cada promedio de notas
      const estudiantesSnapshot = await getDocs(collection(db, 'estudiante'))
      const estudiantes = estudiantesSnapshot.docs.reduce((map, doc) => {
         const estudianteData = doc.data()
         map[estudianteData.estudiante_id] = estudianteData.estudiante_nombre
         return map
      }, {})

      Object.values(averageNotesByStudent).forEach((averageNote) => {
         averageNote.estudiante = estudiantes[averageNote.estudianteId]
         averageNote.averageNote = averageNote.totalNotes / averageNote.count
      })

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
