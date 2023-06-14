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
import { ObtenerTotalEstudiantesPorAsignatura } from './mapreduce/ObtenerEstudiantesPorAsignatura'
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
            sx={{ textAlign: 'center', width: '40%', margin: '50px auto' }}
            variant="body1"
            component="p"
         >
            {' '}
            Firebase es una plataforma de desarrollo de aplicaciones móviles y
            web desarrollada por Google. Entre los servicios que ofrece, se
            encuentra Firebase Firestore, una base de datos NoSQL en tiempo real
            y en la nube. Firestore permite almacenar y sincronizar datos de
            forma eficiente, lo que facilita la creación de aplicaciones en
            tiempo real y colaborativas. Firestore se basa en un modelo de
            documentos y colecciones. Los datos se organizan en documentos, que
            son conjuntos de campos clave-valor, similares a los objetos JSON.
            Estos documentos se agrupan en colecciones, que son contenedores de
            documentos relacionados.
         </Typography>
         <Typography
            sx={{ textAlign: 'center', width: '40%', margin: '50px auto' }}
            variant="body1"
            component="p"
         >
            <img
               src="../../src/assets/img/firebaseStruc.png"
               alt="Estructura de Firebase"
               style={{ width: '650px', display: 'block', margin: '0 auto' }}
            />
         </Typography>
         <Typography
            sx={{ textAlign: 'center', width: '40%', margin: '50px auto' }}
            variant="body1"
            component="p"
         >
            {' '}
            Firebase Firestore utiliza un modelo de datos basado en documentos y
            colecciones. Los datos se organizan en documentos, que son conjuntos
            de campos clave-valor similares a los objetos JSON. Estos documentos
            se agrupan en colecciones, que son contenedores de documentos
            relacionados. Este enfoque flexible y escalable permite una
            estructura de datos jerárquica y anidada. Cada documento en
            Firestore tiene un identificador único dentro de su colección y
            puede contener múltiples campos con diferentes tipos de datos, como
            cadenas de texto, números, booleanos, matrices o incluso
            subcolecciones. Esto facilita la representación de relaciones entre
            datos y la creación de estructuras complejas.
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
         <ObtenerTotalEstudiantesPorAsignatura />
      </Box>
   )
}
