import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Introduction } from '../components/introduction'

export const HomePage = () => {
   return (
      <>
         <Header />
         <Introduction />
         <Footer color={'#FF0000'} />
      </>
   )
}
