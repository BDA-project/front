import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { withStyles } from '@mui/styles'

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

const styles = (theme) => ({
   root: {
      '&.Mui-selected': {
         color: '#FFFFFF',
         backgroundColor: '#666666',
         '&::after': {
            borderBottomColor: '#FF0000',
         },
      },
      '&:not(.Mui-selected)': {
         color: '#CCCCCC',
      },
      '&:hover:not(.Mui-selected)::after': {
         borderBottomColor: '#FF0000',
      },
      '&::after': {
         borderBottom: `2px solid transparent`,
      },
   },
})

const RedUnderlineTab = withStyles(styles)(Tab)

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
               <RedUnderlineTab
                  key={index}
                  component={Link}
                  to={tab.path}
                  label={tab.label}
               />
            ))}
         </Tabs>
      </AppBar>
   )
}
