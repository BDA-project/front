import { CassandraTest } from '../components/cassandra'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
export const SparkPage = () => {
   return (
      <>
         <Header />
         <CassandraTest />
         <Footer color={'#FFA500'} />
      </>
   )
}
