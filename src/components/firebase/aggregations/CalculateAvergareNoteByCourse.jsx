import { useState, useEffect } from 'react'
import { collection, getDocs, doc } from 'firebase/firestore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { db } from '../../../helpers/firebase'

const calculateAverageNoteByCourse = async () => {
   try {
      const collectionRef = collection(db, 'inscripcion')
      const querySnapshot = await getDocs(collectionRef)

      const averageNotesByCourse = {}

      querySnapshot.forEach(async (doc) => {
         const inscripcionData = doc.data()

         if (inscripcionData.inscripcion_nota && inscripcionData.curso_id) {
            const note = parseInt(inscripcionData.inscripcion_nota, 10)
            const cursoId = inscripcionData.curso_id._key.path.segments[6]

            if (!averageNotesByCourse[cursoId]) {
               averageNotesByCourse[cursoId] = {
                  curso: '',
                  totalNotes: 0,
                  count: 0,
                  averageNote: 0,
               }
            }

            averageNotesByCourse[cursoId].totalNotes += note
            averageNotesByCourse[cursoId].count++
         }
      })

      // Obtener el nombre del curso para cada promedio de notas
      const cursosSnapshot = await getDocs(collection(db, 'curso'))
      const cursos = cursosSnapshot.docs.map((doc) => doc.data())

      Object.keys(averageNotesByCourse).forEach((cursoId) => {
         const curso = cursos.find((curso) => curso.curso_id === cursoId)

         averageNotesByCourse[cursoId].curso = curso ? curso.curso_nombre : ''
         averageNotesByCourse[cursoId].averageNote =
            averageNotesByCourse[cursoId].totalNotes /
            averageNotesByCourse[cursoId].count
      })

      return Object.values(averageNotesByCourse)
   } catch (error) {
      console.log('Error al calcular el promedio de notas por curso:', error)
      return []
   }
}

export const AverageNoteByCourse = () => {
   const [averageNotes, setAverageNotes] = useState([])

   const handleCalculateAverageNoteByCourse = async () => {
      const result = await calculateAverageNoteByCourse()
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
            onClick={handleCalculateAverageNoteByCourse}
         >
            Calcular Promedio de Notas por Curso
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
                           Curso
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
                              {averageNote.curso}
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
