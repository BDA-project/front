import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../helpers/firebase'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const CheckReference = () => {
   const [message, setMessage] = useState('')

   const checkReference = async () => {
      try {
         const collectionRef = collection(db, 'inscripciones')
         const querySnapshot = await getDocs(collectionRef)
         querySnapshot.forEach((doc) => {
            const inscripcionData = doc.data()
            // Comprobar si existe la referencia a la colección "cursos"
            if (
               inscripcionData.curso_nombre &&
               inscripcionData.curso_nombre.path
            ) {
               console.log(
                  'Referencia a la colección "cursos" encontrada:',
                  inscripcionData.curso_nombre.path
               )
            } else {
               console.log(
                  'No se encontró referencia a la colección "cursos" en la entrada:',
                  doc.id
               )
            }
         })
         setMessage('La comprobación de referencia se ha completado.')
      } catch (error) {
         console.log('Error al consultar la colección "inscripciones":', error)
         setMessage(
            'Ha ocurrido un error al realizar la comprobación de referencia.'
         )
      }
   }

   return (
      <Box m={2}>
         <Button variant="contained" onClick={checkReference}>
            Comprobar Referencia
         </Button>
         <Typography m={2}>{message}</Typography>
      </Box>
   )
}
