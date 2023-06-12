import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

const tabsConfig = [
   {
      label: 'Home',
      path: '/',
   },
   {
      label: 'Firebase',
      path: '/firebase',
   },
   {
      label: 'Xata',
      path: '/xata',
   },
   {
      label: 'Spark',
      path: '/spark',
   },
]

export const Header = () => {
   const location = useLocation()

   const activeTab = tabsConfig.findIndex(
      (tab) => tab.path === location.pathname
   )

   const handleTabChange = (event, newValue) => {
      // Aquí puedes realizar alguna acción adicional si es necesario
   }

   return (
      <AppBar position="sticky" sx={{ backgroundColor: '#242424' }}>
         <Toolbar>
            <Typography
               variant="h6"
               component="div"
               sx={{ flexGrow: 1, textAlign: 'center' }}
            >
               Encabezado
            </Typography>
         </Toolbar>
         <Tabs value={activeTab} onChange={handleTabChange} centered>
            {tabsConfig.map((tab, index) => (
               <Tab
                  key={index}
                  component={Link}
                  to={tab.path}
                  label={tab.label}
                  sx={{
                     '&.Mui-selected': {
                        color: '#FFFFFF',
                        backgroundColor: '#666666',
                     },
                     '&:not(.Mui-selected)': {
                        color: '#CCCCCC',
                     },
                  }}
               />
            ))}
         </Tabs>
      </AppBar>
   )
}
