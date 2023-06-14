import { Box, Typography } from '@mui/material'

export const Introduction = () => {
   return (
      <Box>
         <Typography
            m={4}
            variant="h2"
            component="h2"
            sx={{ textAlign: 'center', color: '#FF0000' }}
         >
            DESCRIPCION DEL PROCESO
         </Typography>
         <Typography
            sx={{ textAlign: 'center', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            {' '}
            La institución educativa necesita almacenar y convertir los datos a
            información útil para sus procesos de inscripción, para estudiar
            cómo se están llevando a cabo dicho proceso y tomar decisiones
            basadas en estadísticas calculadas, creación de informes y
            dashboard, incluso minería de datos, con el objetivo de ayudar a la
            gestión de la institución
         </Typography>
         <Typography
            m={4}
            variant="h3"
            component="h3"
            sx={{ textAlign: 'center', color: '#FF0000' }}
         >
            REQUERIMIENTOS BI
         </Typography>
         <Typography
            sx={{ width: '40%', margin: '8px auto' }}
            variant="body1"
            component="ul" // Cambiado a 'ul' en lugar de 'p'
         >
            <li>Total estudiantes inscritos por asignatura.</li>
            <li>Total de materias dictadas por docente.</li>
            <li>Intensidad horaria por asignatura.</li>
            <li>Total de la oferta académica por asignatura.</li>
            <li>Notas de los estudiantes por curso inscrito.</li>
            <li>Promedio del estudiante.</li>
         </Typography>
         <Typography
            m={4}
            variant="h3"
            component="h3"
            sx={{ textAlign: 'center', color: '#FF0000' }}
         >
            FUENTES
         </Typography>
         <Typography
            sx={{ textAlign: 'justify', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            Nuestra fuente de información son datos recopilados de la
            institución educativa, los cuales fueron curados antes de ser
            transmitidos. En ellos podemos encontrar datos reales de los
            procesos que se llevan a cabo dentro de la institución, aunque se
            evitó información sensible. Dichos datos se encuentran almacenados
            en las bases de datos de la institución educativa, y fueron
            transmitidos mediante la creación de un único archivo .csv el cual
            usamos en el desarrollo de este proyecto.
         </Typography>
         <Typography
            sx={{ textAlign: 'justify', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            Es importante aclarar que la recopilación y distribución de dichos
            datos se hizo con el consentimiento de dicha institución. También
            que el contacto con dicha institución ya no es posible, dado que el
            otro integrante del grupo canceló la asignatura (razón por la cual
            aparece solo un nombre en este documento).
         </Typography>
         <Typography
            sx={{ textAlign: 'justify', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            Teniendo en cuenta que para este proyecto vamos a realizar tres
            implementaciones distintas, el proceso de carga para cada una de las
            bases de datos utilizadas será detallado en su respectiva sección.
         </Typography>
         <Typography
            m={4}
            variant="h3"
            component="h3"
            sx={{ textAlign: 'center', color: '#FF0000' }}
         >
            MODELO MULTIDIMENSIONAL
         </Typography>
         <Typography
            sx={{ textAlign: 'center', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            <img
               src="../../src/assets/img/modeloRelacional.png"
               alt="Modelo multidimensional"
               style={{ display: 'block', margin: '0 auto' }}
            />
         </Typography>
         <Typography
            m={4}
            variant="h3"
            component="h3"
            sx={{ textAlign: 'center', color: '#FF0000' }}
         >
            PLANTEAMIENTO DEL PROYECTO
         </Typography>
         <Typography
            sx={{ textAlign: 'justify', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         ></Typography>
         <Typography
            sx={{ textAlign: 'center', width: '40%', margin: '8px auto' }}
            variant="body1"
            component="p"
         >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <img
                  src="../../src/assets/img/xataLogo.jpg"
                  alt="Modelo multidimensional"
                  style={{ width: '300px', margin: '0 10px' }}
               />
               <img
                  src="../../src/assets/img/firebaseLogo.png"
                  alt="Modelo multidimensional"
                  style={{ width: '300px', margin: '0 10px' }}
               />
               <img
                  src="../../src/assets/img/sparkLogo.png"
                  alt="Modelo multidimensional"
                  style={{ width: '300px', margin: '0 10px' }}
               />
            </div>
         </Typography>
      </Box>
   )
}
