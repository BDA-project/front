import { Box, Typography } from '@mui/material'
import { SimpleQuery } from './querys/SimpleQuery'
import { ImageAccordion } from './ImageAccordion'
import { IntensidadHorariaPorAsignatura } from './querys/IntensidadHorariaPorAsignatura'
import { IntensidadHorariaPorDocente } from './querys/IntensidadHorariaPorDocente'
import { IntensidadHorariaPorPrograma } from './querys/IntensidadHorariaPorPrograma'
import { NotasEstudiantes } from './querys/NotasEstudiantes'
import { AgregacionEstudiantes } from './querys/AgregacionEstudiantes'
import { AgregacionCursos } from './querys/AgregacionCursos'

export const XataTest = () => {
   return (
      <Box>
         <Typography
            m={2}
            variant="h1"
            component="h1"
            sx={{ textAlign: 'center', color: '#B97FFF' }}
         >
            XATA
         </Typography>
         <Typography
            sx={{ textAlign: 'center', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            {' '}
            Xata es un nuevo tipo de servicio en la nube: combina varios tipos
            de almacenes (base de datos relacional, motor de búsqueda y motor de
            análisis) en un único servicio. La funcionalidad combinada se expone
            a través de una única API. También está integrado verticalmente: el
            paquete incluye una interfaz de usuario de administración avanzada y
            kits de desarrollo de software de alto nivel. Xata se presenta como
            una capa de abstracción sobre múltiples almacenes de datos para
            simplificar el desarrollo y las operaciones de las aplicaciones.
            Este tipo de servicio se conceptualiza como una Plataforma de Datos
            sin Servidor.
         </Typography>
         <Typography
            sx={{ textAlign: 'center', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            <img
               src="../../src/assets/img/xataLayer.png"
               alt="Modelo multidimensional"
               style={{ display: 'block', margin: '0 auto', width: '800px' }}
            />
         </Typography>
         <Typography
            sx={{ textAlign: 'justify', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            {' '}
            Xata sustenta el almacenamiento de los datos usando PostgreSQL,
            Elasticsearch como motor de búsqueda/análisis y Kafka para la
            replicación lógica de los eventos. Esto con el fin de potenciar la
            arquitectura de datos comúnmente usada en la industria: una base de
            datos relacional es usada como almacenamiento principal, y los datos
            son replicados en otros almacenamientos más especializados (motores
            de búsqueda, data warehousing, Sistemas Business intelligence,
            etc.), los cuales requieren un fuerte componente de integración,
            recursos de diversa índole, componentes para el monitoreo y
            experticia en el campo. Con Xata estas funciones se encuentran
            integradas todas en un único servicio. Para lograr implementar la
            solución propuesta, Xata se orquesta siguiendo la siguiente
            estructura:
         </Typography>
         <Typography
            sx={{ textAlign: 'center', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            <img
               src="../../src/assets/img/xataCell.png"
               alt="Modelo multidimensional"
               style={{ display: 'block', margin: '0 auto', width: '800px' }}
            />
         </Typography>
         {/* --- CONSULTA SIMPLE ---  */}
         <Box m={2} sx={{ textAlign: 'center', color: '#B97FFF' }}>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <SimpleQuery />
            </Box>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <ImageAccordion
                  imageSrc="../../src/assets/img/requests/0.png"
                  altText="Simple Query"
                  sx={{
                     maxWidth: '100%',
                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                     borderRadius: '4px',
                  }}
               />
            </Box>
         </Box>
         {/* --- CONSULTA INSTENSIDAD HORARIA POR ASIGNATURA  ---  */}
         <Box m={2} sx={{ textAlign: 'center', color: '#B97FFF' }}>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <IntensidadHorariaPorAsignatura />
            </Box>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <ImageAccordion
                  imageSrc="../../src/assets/img/requests/1.png"
                  altText="Simple Query"
                  sx={{
                     maxWidth: '100%',
                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                     borderRadius: '4px',
                  }}
               />
            </Box>
         </Box>
         {/* --- CONSULTA INSTENSIDAD HORARIA POR DOCENTE  ---  */}
         <Box m={2} sx={{ textAlign: 'center', color: '#B97FFF' }}>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <IntensidadHorariaPorDocente />
            </Box>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <ImageAccordion
                  imageSrc="../../src/assets/img/requests/2.png"
                  altText="Simple Query"
                  sx={{
                     maxWidth: '100%',
                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                     borderRadius: '4px',
                  }}
               />
            </Box>
         </Box>
         {/* --- CONSULTA INSTENSIDAD HORARIA POR PROGRAMA ---  */}
         <Box m={2} sx={{ textAlign: 'center', color: '#B97FFF' }}>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <IntensidadHorariaPorPrograma />
            </Box>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <ImageAccordion
                  imageSrc="../../src/assets/img/requests/3.png"
                  altText="Simple Query"
                  sx={{
                     maxWidth: '100%',
                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                     borderRadius: '4px',
                  }}
               />
            </Box>
         </Box>
         {/* --- CONSULTA NOTAS ESTUDIANTES POR CURSOS  ---  */}
         <Box m={2} sx={{ textAlign: 'center', color: '#B97FFF' }}>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <NotasEstudiantes />
            </Box>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <ImageAccordion
                  imageSrc="../../src/assets/img/requests/5.png"
                  altText="Simple Query"
                  sx={{
                     maxWidth: '100%',
                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                     borderRadius: '4px',
                  }}
               />
            </Box>
         </Box>
         {/* --- AGREGACION ESTUDIANTES  ---  */}
         <Box m={2} sx={{ textAlign: 'center', color: '#B97FFF' }}>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <AgregacionEstudiantes />
            </Box>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <ImageAccordion
                  imageSrc="../../src/assets/img/requests/6.png"
                  altText="Simple Query"
                  sx={{
                     maxWidth: '100%',
                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                     borderRadius: '4px',
                  }}
               />
            </Box>
         </Box>
         {/* --- AGREGACION CURSOS  ---  */}
         <Box m={2} sx={{ textAlign: 'center', color: '#B97FFF' }}>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <AgregacionCursos />
            </Box>
            <Box
               display="flex"
               alignItems="center"
               m={2}
               border="1px solid #B97FFF"
               borderRadius="4px"
               justifyContent="space-around"
               p={2}
            >
               <ImageAccordion
                  imageSrc="../../src/assets/img/requests/7.png"
                  altText="Simple Query"
                  sx={{
                     maxWidth: '100%',
                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                     borderRadius: '4px',
                  }}
               />
            </Box>
         </Box>
      </Box>
   )
}
