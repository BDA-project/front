import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { AccordionDetails } from '@mui/material'

export const CodeAccordion = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
         }}
      >
         <Accordion
            sx={{
               backgroundColor: '#1976d2', // Color azul
               width: '60%', // Ancho del acordeón
               margin: '0 auto', // Centrado horizontal
               color: 'white',
            }}
         >
            <AccordionSummary>
               <Typography variant="h5">Ejemplo</Typography>
            </AccordionSummary>
            <AccordionDetails
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  color: 'black',
               }}
            >
               <pre>
                  <code>
                     {`import { useState } from 'react'
import { collection, addDoc, doc } from 'firebase/firestore'
import { db } from '../../helpers/firebase'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { Typography } from '@mui/material'

export const CreateCollectionInscripciones = ({
   collectionName,
   totalData,
}) => {
   const [message, setMessage] = useState('')
   const [loading, setLoading] = useState(false)

   const handleCreateCollection = async () => {
      try {
         setLoading(true) // Mostrar progreso

         const csvFileName = ${`../src/assets/data/collectionName.csv`}
         const response = await fetch(csvFileName)
         const csvData = await response.text()

         const lines = csvData.split('\n')
         const headers = lines[0].split(',')

         const data = []
         let counter = 0

         for (let i = 1; i < lines.length; i++) {
            if (counter >= totalData) {
               break
            }

            const values = lines[i].split(',')
            const entry = {}
            let hasUndefinedValue = false

            for (let j = 0; j < headers.length; j++) {
               if (values[j] === 'undefined') {
                  hasUndefinedValue = true
                  break
               }

               if (headers[j] === 'curso_nombre') {
                  // Agregar referencia a la colección "cursos" usando el ID del documento
                  const cursoId = values[j] // Reemplazar con el valor adecuado del CSV
                  entry[headers[j]] = doc(db, 'cursos', cursoId)
               } else if (headers[j] === 'docente_nombre') {
                  // Agregar referencia a la colección "docentes" usando el ID del documento
                  const docenteId = values[j] // Reemplazar con el valor adecuado del CSV
                  entry[headers[j]] = doc(db, 'docentes', docenteId)
               } else if (headers[j] === 'estudiante_id') {
                  // Agregar referencia a la colección "estudiantes" usando el ID del documento
                  const estudianteId = values[j] // Reemplazar con el valor adecuado del CSV
                  entry[headers[j]] = doc(db, 'estudiantes', estudianteId)
               } else {
                  entry[headers[j]] = values[j]
               }
            }

            if (!hasUndefinedValue) {
               data.push(entry)
               counter++
            }
         }

         const collectionRef = collection(db, collectionName)
         await Promise.all(data.map((entry) => addDoc(collectionRef, entry)))

         setMessage(
            ${`Se ha creado la colección "collectionName" y se han cargado los "totalData" datos del CSV exitosamente.`}
         )
      } catch (error) {
         console.log(error)
         setMessage(
            'Ha ocurrido un error al crear la colección o cargar los datos del CSV.',
            error
         )
      } finally {
         setLoading(false) // Ocultar progreso
      }
   }

   return (
      <Box m={2} display="flex" alignItems="center">
         <Typography m={2} sx={{ width: '20%' }}>
            {collectionName.toUpperCase()}
         </Typography>
         <Button
            variant="contained"
            onClick={handleCreateCollection}
            disabled={loading} // Deshabilitar el botón mientras se carga
         >
            Crear Colección y Cargar Datos CSV
         </Button>
         {loading && (
            <CircularProgress size={24} style={{ marginLeft: '10px' }} />
         )}
         <Typography m={2}>{message}</Typography>
      </Box>
   )
}

            `}
                  </code>
               </pre>
            </AccordionDetails>
         </Accordion>
      </Box>
   )
}
