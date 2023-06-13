import { useState } from 'react'
import { collection, getDocs, doc } from 'firebase/firestore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { db } from '../../../helpers/firebase'

const calculateAverageGlobalNote = async () => {
   try {
      const collectionRef = collection(db, 'inscripcion')
      const querySnapshot = await getDocs(collectionRef)

      let totalNotes = 0
      let count = 0

      querySnapshot.forEach(async (doc) => {
         const inscripcionData = doc.data()

         if (inscripcionData.inscripcion_nota) {
            const note = parseInt(inscripcionData.inscripcion_nota, 10)

            totalNotes += note
            count++
         }
      })

      const averageNote = totalNotes / count

      return averageNote
   } catch (error) {
      console.log('Error al calcular el promedio de notas:', error)
      return null
   }
}

export const AverageNote = () => {
   const [averageNote, setAverageNote] = useState(null)
   const [showAverageNote, setShowAverageNote] = useState(false)

   const handleCalculateAverageGlobalNote = async () => {
      const result = await calculateAverageGlobalNote()
      setAverageNote(result)
      setShowAverageNote(true)
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
         <Button variant="contained" onClick={handleCalculateAverageGlobalNote}>
            Calcular Promedio de Notas
         </Button>
         {showAverageNote && (
            <Typography m={2}>
               Promedio de Notas:{' '}
               {averageNote !== null ? averageNote.toFixed(2) : '-'}
            </Typography>
         )}
      </Box>
   )
}
