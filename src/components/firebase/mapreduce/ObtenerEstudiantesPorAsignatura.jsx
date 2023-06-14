import { useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { Typography } from '@mui/material'
import { db } from '../../../helpers/firebase'
import { AsignaturasChart } from '../charts/AsignaturasChart'
import { EstudiantesChart } from '../charts/EstudiantesChart'

export const ObtenerTotalEstudiantesPorAsignatura = () => {
   const [loading, setLoading] = useState(false)
   const [resultados, setResultados] = useState([])

   const handleObtenerTotalEstudiantes = async () => {
      try {
         setLoading(true) // Mostrar progreso

         const cursosSnapshot = await getDocs(collection(db, 'curso'))
         const cursos = cursosSnapshot.docs.map((doc) => doc.data())

         const totalEstudiantesPorAsignatura = {}
         console.log(cursos)
         cursos.forEach((curso) => {
            const asignaturaId = curso.asignatura_id.path.split('/').pop()

            if (totalEstudiantesPorAsignatura.hasOwnProperty(asignaturaId)) {
               totalEstudiantesPorAsignatura[asignaturaId] += Number(
                  curso.curso_cantidad_estudiantes
               )
            } else {
               totalEstudiantesPorAsignatura[asignaturaId] = Number(
                  curso.curso_cantidad_estudiantes
               )
            }
         })

         const asignaturasSnapshot = await getDocs(
            query(
               collection(db, 'asignatura'),
               where(
                  '__name__',
                  'in',
                  Object.keys(totalEstudiantesPorAsignatura)
               )
            )
         )
         const asignaturas = asignaturasSnapshot.docs.map((doc) => doc.data())

         const resultados = asignaturas.map((asignatura) => ({
            asignatura: asignatura.asignatura_nombre,
            totalEstudiantes:
               totalEstudiantesPorAsignatura[asignatura.asignatura_id],
         }))

         setResultados(resultados)
      } catch (error) {
         console.log(
            'Error al obtener el total de estudiantes por asignatura:',
            error
         )
      } finally {
         setLoading(false) // Ocultar progreso
      }
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
            onClick={handleObtenerTotalEstudiantes}
            disabled={loading}
         >
            Obtener Total de Estudiantes por Asignatura
         </Button>
         {loading && <CircularProgress size={24} style={{ margin: '10px' }} />}
         {resultados.length > 0 && (
            <table style={{ borderCollapse: 'collapse', marginTop: '1rem' }}>
               <thead>
                  <tr>
                     <th
                        style={{ border: '1px solid #ccc', padding: '0.5rem' }}
                     >
                        <Typography
                           variant="subtitle1"
                           style={{ fontWeight: 'bold' }}
                        >
                           Asignatura
                        </Typography>
                     </th>
                     <th
                        style={{ border: '1px solid #ccc', padding: '0.5rem' }}
                     >
                        <Typography
                           variant="subtitle1"
                           style={{ fontWeight: 'bold' }}
                        >
                           Total de Estudiantes
                        </Typography>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {resultados.map((resultado, index) => (
                     <tr key={index}>
                        <td
                           style={{
                              border: '1px solid #ccc',
                              padding: '0.5rem',
                           }}
                        >
                           <Typography variant="body1">
                              {resultado.asignatura}
                           </Typography>
                        </td>
                        <td
                           style={{
                              border: '1px solid #ccc',
                              padding: '0.5rem',
                           }}
                        >
                           <Typography variant="body1">
                              {resultado.totalEstudiantes}
                           </Typography>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
         <EstudiantesChart intensidadesHorarias={resultados} />
      </Box>
   )
}
