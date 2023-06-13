import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'

export const Footer = () => {
   return (
      <Box
         mt={16}
         sx={{
            bgcolor: '#1976d2',
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
                  https://github.com/Nzone56
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
                  https://github.com/geramirezl
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
                  https://github.com/sctovrp
               </Typography>
            </Grid>
         </Grid>
      </Box>
   )
}
