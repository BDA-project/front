import { Typography, Box } from '@mui/material'
import Iframe from 'react-iframe'

export const CassandraTest = () => {
   return (
      <Box m={2}>
         <Typography
            m={2}
            variant="h1"
            component="h1"
            sx={{ textAlign: 'center', color: '#FFA500' }}
         >
            CASSANDRA
         </Typography>
         <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
               sx={{ width: '40%', margin: '8px auto' }}
               variant="body1"
               component="a"
               href="https://colab.research.google.com/drive/1EdGqHdl64va4I-uTfFN4MrJsuwDH4tmH?hl=es#scrollTo=fXIOFTAcdx1O"
               target="_blank"
               rel="noopener noreferrer"
            >
               https://colab.research.google.com/drive/1EdGqHdl64va4I-uTfFN4MrJsuwDH4tmH?hl=es#scrollTo=fXIOFTAcdx1O
            </Typography>
         </Box>
         <Iframe
            url="../../../src/assets/CassandraProject.ipynb"
            width="100%"
            height="600px"
            title="Notebook Viewer"
            frameBorder="0"
            scrolling="auto"
         />
      </Box>
   )
}
