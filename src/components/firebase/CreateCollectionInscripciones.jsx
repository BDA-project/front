import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
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

         const csvFileName = `../src/assets/data/${collectionName}.csv`
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
               entry[headers[j]] = values[j]
            }

            if (!hasUndefinedValue) {
               const cursoId = entry.curso_id
               const cursoRef = doc(db, 'curso', cursoId)
               entry.curso_id = cursoRef // Reemplaza el valor de la columna "curso_nombre" con la referencia al documento en la colección "cursos"

               const docenteId = entry.docente_id
               const docenteRef = doc(db, 'docente', docenteId)
               entry.docente_id = docenteRef // Reemplaza el valor de la columna "docente_nombre" con la referencia al documento en la colección "docentes"

               const estudianteId = entry.estudiante_id
               const estudianteRef = doc(db, 'estudiante', estudianteId)
               entry.estudiante_id = estudianteRef // Reemplaza el valor de la columna "estudiante_id" con la referencia al documento en la colección "estudiantes"

               const documentRef = doc(
                  db,
                  collectionName,
                  entry[`${collectionName}_id`]
               )
               data.push({ ref: documentRef, data: entry })
               counter++
            }
         }

         await Promise.all(data.map(({ ref, data }) => setDoc(ref, data))) // Usar "setDoc" en lugar de "addDoc" para establecer el ID del documento

         setMessage(
            `Se ha creado la colección "${collectionName}" y se han cargado los "${totalData}" datos del CSV exitosamente.`
         )
      } catch (error) {
         console.log(error)
         setMessage(
            'Ha ocurrido un error al crear la colección o cargar los datos del CSV.'
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
