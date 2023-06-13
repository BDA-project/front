import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { db } from '../../../helpers/firebase'
import { fetchStudentName } from './FetchStudentName'

const calculateAverageNote = async () => {
   try {
      const collectionRef = collection(db, 'inscripciones')
      const querySnapshot = await getDocs(collectionRef)

      let totalNotes = 0
      let count = 0

      querySnapshot.forEach(async (doc) => {
         const inscripcionData = doc.data()

         if (inscripcionData.inscripcion_nota) {
            const note = parseInt(inscripcionData.inscripcion_nota, 10)

            totalNotes += note
            count++

            const studentRef = inscripcionData.estudiante_id
            const studentName = await fetchStudentName(studentRef)
            console.log('Estudiante:', studentName)
         }
      })

      console.log(totalNotes, count)
      const averageNote = totalNotes / count

      return averageNote
   } catch (error) {
      console.log('Error al calcular el promedio de notas:', error)
      return null
   }
}

export const AggregationButtons = () => {
   const [averageNote, setAverageNote] = useState(null)

   const handleCalculateAverageNote = async () => {
      const result = await calculateAverageNote()
      setAverageNote(result)
   }

   return (
      <Box m={2}>
         <Button variant="contained" onClick={handleCalculateAverageNote}>
            Calcular Promedio de Notas
         </Button>
         <Typography m={2}>
            Promedio de Notas:
            {averageNote !== null ? averageNote.toFixed(2) : '-'}
         </Typography>
      </Box>
   )
}
