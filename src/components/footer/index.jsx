import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'

export const Footer = ({ color }) => {
   return (
      <Box
         mt={16}
         sx={{
            bgcolor: color,
            color: '#fff',
            p: 2,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
         }}
      >
         <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <PersonIcon sx={{ mr: 1 }} />
                  Julian Andres Pereira Plata
               </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <EmailIcon sx={{ mr: 1 }} />
                  jpereirap@unal.edu.co
               </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <GitHubIcon sx={{ mr: 1 }} />
                  <a
                     href="https://github.com/Nzone56"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     https://github.com/Nzone56
                  </a>
               </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <PersonIcon sx={{ mr: 1 }} />
                  Gabriel Enrique Ramirez Leon
               </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <EmailIcon sx={{ mr: 1 }} />
                  geramirezl@unal.edu.co
               </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <GitHubIcon sx={{ mr: 1 }} />
                  <a
                     href="https://github.com/geramirezl"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     https://github.com/geramirezl
                  </a>
               </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <PersonIcon sx={{ mr: 1 }} />
                  Sebastian Camilo Tovar Pedraza
               </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <EmailIcon sx={{ mr: 1 }} />
                  sctovarp@unal.edu.co
               </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <GitHubIcon sx={{ mr: 1 }} />
                  <a
                     href="https://github.com/sctovrp"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     https://github.com/sctovrp
                  </a>
               </Typography>
            </Grid>
         </Grid>
      </Box>
   )
}
