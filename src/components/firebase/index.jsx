import { Box, Typography } from '@mui/material'
import { CreateCollection } from './CreateCollection'
import { CreateCollectionInscripciones } from './CreateCollectionInscripciones'
import { CheckReference } from './CheckReference'
import { CreateCollectionAsignaturas } from './CreateCollectionAsignaturas'
import { CreateCollectionCursos } from './CreateCollectionCursos'
import { ImageComponent } from './ImageComponent'
import { CodeAccordion } from './CodeAccordion'
import { AggregationButtons } from './aggregations/CalculateAverageNote'

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
         <CreateCollection collectionName={'estudiantes'} totalData={50} />
         {/* 504 */}
         <CreateCollection collectionName={'docentes'} totalData={9} />
         <CreateCollection collectionName={'programas'} totalData={7} />
         <CreateCollectionAsignaturas
            collectionName={'asignaturas'}
            totalData={21}
         />
         <CreateCollectionCursos collectionName={'cursos'} totalData={45} />
         <CreateCollectionInscripciones
            collectionName={'inscripciones'}
            totalData={100}
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
         <AggregationButtons />
      </Box>
   )
}
