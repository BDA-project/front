import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const tabsConfig = [
   {
      label: 'Home',
      path: '/',
      color: '#FF0000', // Rojo
   },
   {
      label: 'Firebase',
      path: '/firebase',
      color: '#1976d2', // Azul
   },
   {
      label: 'Xata',
      path: '/xata',
      color: '#B97FFF', // Morado
   },
   {
      label: 'Spark',
      path: '/spark',
      color: '#FFA500', // Naranja
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
               BDA - PROYECTO FINAL
            </Typography>
         </Toolbar>
         <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            TabIndicatorProps={{
               style: {
                  backgroundColor: tabsConfig[activeTab]?.color,
               },
            }}
         >
            {tabsConfig.map((tab, index) => (
               <Tab
                  key={index}
                  component={Link}
                  to={tab.path}
                  label={tab.label}
                  sx={{
                     '&.Mui-selected': {
                        color: '#FFFFFF',
                        backgroundColor: tab.color,
                        '&::after': {
                           borderBottomColor: tab.color,
                        },
                     },
                     '&:not(.Mui-selected)': {
                        color: '#CCCCCC',
                     },
                     '&:hover:not(.Mui-selected)::after': {
                        borderBottomColor: tab.color,
                     },
                     '&::after': {
                        borderBottom: '2px solid transparent',
                     },
                  }}
               />
            ))}
         </Tabs>
      </AppBar>
   )
}
