import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { FirebasePage, HomePage, SparkPage, XataPage } from '../pages'

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/firebase',
      element: <FirebasePage />,
   },
   {
      path: '/xata',
      element: <XataPage />,
   },
   {
      path: '/spark',
      element: <SparkPage />,
   },
])

export const AppRouter = () => {
   return <RouterProvider router={router}></RouterProvider>
}
