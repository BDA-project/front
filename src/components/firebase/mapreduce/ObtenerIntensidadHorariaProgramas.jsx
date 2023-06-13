import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { Typography } from '@mui/material'
import { db } from '../../../helpers/firebase'
import { AsignaturasChart } from '../charts/AsignaturasChart'
import { ProgramasChart } from '../charts/ProgramasChart'

export const ObtenerIntensidadHorariaProgramas = () => {
   const [loading, setLoading] = useState(false)
   const [resultados, setResultados] = useState([])

   const obtenerIntensidadesHorarias = async () => {
      try {
         setLoading(true) // Mostrar progreso

         const asignaturasSnapshot = await getDocs(collection(db, 'asignatura'))
         const asignaturas = asignaturasSnapshot.docs.map((doc) => doc.data())

         const cursosSnapshot = await getDocs(collection(db, 'curso'))
         const cursos = cursosSnapshot.docs.map((doc) => doc.data())

         const programasSnapshot = await getDocs(collection(db, 'programa'))
         const programas = programasSnapshot.docs.map((doc) => doc.data())

         const intensidadesHorariasPorPrograma = {}

         asignaturas.forEach((asignatura) => {
            const programaId = asignatura.programa_id._key.path.segments[6]
            const programa = programas.find(
               (programa) => programa.programa_id === programaId
            )

            if (!intensidadesHorariasPorPrograma[programaId]) {
               intensidadesHorariasPorPrograma[programaId] = {
                  programa: programa.programa_nombre,
                  intensidadHorariaTotal: 0,
               }
            }
            const cursosAsignatura = cursos.filter(
               (curso) =>
                  curso.asignatura_id._key.path.segments[6] ===
                  asignatura.asignatura_id
            )

            const intensidadHorariaAsignatura = cursosAsignatura.reduce(
               (acumulador, curso) =>
                  acumulador + Number(curso.curso_intensidad_horaria),
               0
            )
            intensidadesHorariasPorPrograma[
               programaId
            ].intensidadHorariaTotal += intensidadHorariaAsignatura
         })

         setResultados(Object.values(intensidadesHorariasPorPrograma))
      } catch (error) {
         console.log(
            'Error al obtener las intensidades horarias por programa:',
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
            onClick={obtenerIntensidadesHorarias}
            disabled={loading}
         >
            Obtener Intensidad Horaria por Programa
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
                           Programa
                        </Typography>
                     </th>
                     <th
                        style={{ border: '1px solid #ccc', padding: '0.5rem' }}
                     >
                        <Typography
                           variant="subtitle1"
                           style={{ fontWeight: 'bold' }}
                        >
                           Intensidad Horaria Total
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
                              {resultado.programa}
                           </Typography>
                        </td>
                        <td
                           style={{
                              border: '1px solid #ccc',
                              padding: '0.5rem',
                           }}
                        >
                           <Typography variant="body1">
                              {resultado.intensidadHorariaTotal}
                           </Typography>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
         <ProgramasChart intensidadesHorarias={resultados} />
      </Box>
   )
}
