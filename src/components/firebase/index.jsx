import { Box, Typography } from '@mui/material'
import { CreateCollection } from './CreateCollection'
import { CreateCollectionInscripciones } from './CreateCollectionInscripciones'
import { CheckReference } from './CheckReference'
import { CreateCollectionAsignaturas } from './CreateCollectionAsignaturas'
import { CreateCollectionCursos } from './CreateCollectionCursos'
import { ImageComponent } from './ImageComponent'
import { CodeAccordion } from './CodeAccordion'

import { ObtenerIntensidadHorariaAsignaturas } from './mapreduce/ObtenerIntensidadHorariaAsignaturas'
import { ObtenerIntensidadHorariaProgramas } from './mapreduce/ObtenerIntensidadHorariaProgramas'
import { AverageNote } from './aggregations/CalculateAverageGlobalNote'
import { AverageNoteByCourse } from './aggregations/CalculateAvergareNoteByCourse'
import { AverageNoteByStudent } from './aggregations/CalculateAverageNoteByStudent'
// import { StudentChart } from './charts/StudentChart'

export const FirebaseTest = () => {
   return (
      <Box>
         <Typography
            m={2}
            variant="h1"
            component="h1"
            sx={{ textAlign: 'center', color: '#1976d2' }}
         >
            FIREBASE
         </Typography>
         <Typography
            m={2}
            variant="h4"
            component="h4"
            sx={{ color: '#1976d2' }}
         >
            Crear las colecciones
         </Typography>
         <CodeAccordion />
         <CreateCollection collectionName={'estudiante'} totalData={504} />
         {/* 504 */}
         <CreateCollection collectionName={'docente'} totalData={9} />
         <CreateCollection collectionName={'programa'} totalData={7} />
         <CreateCollectionAsignaturas
            collectionName={'asignatura'}
            totalData={21}
         />
         <CreateCollectionCursos collectionName={'curso'} totalData={45} />
         <CreateCollectionInscripciones
            collectionName={'inscripcion'}
            totalData={705}
         />
         {/* 705 */}
         <CheckReference />
         <Typography
            m={2}
            variant="h4"
            component="h4"
            sx={{ color: '#1976d2' }}
         >
            Resultados
         </Typography>

         <ImageComponent />
         <Typography
            m={2}
            variant="h4"
            component="h4"
            sx={{ color: '#1976d2' }}
         >
            Agregaciones
         </Typography>
         <AverageNote />
         <AverageNoteByCourse />
         <AverageNoteByStudent />
         <Typography
            m={2}
            variant="h4"
            component="h4"
            sx={{ color: '#1976d2' }}
         >
            Map Reduce
         </Typography>
         <ObtenerIntensidadHorariaAsignaturas />
         <ObtenerIntensidadHorariaProgramas />
         <Typography
            m={2}
            variant="h4"
            component="h4"
            sx={{ color: '#1976d2' }}
         >
            Gráficos
         </Typography>
         {/* <StudentChart /> */}
      </Box>
   )
}
