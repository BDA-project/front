import { collection, query, where, getDoc, doc } from 'firebase/firestore'
import { db } from '../../../helpers/firebase'

export const fetchStudentName = async (studentIdRef) => {
   try {
      const studentId = studentIdRef._key.path.segments[6]
      const studentDocRef = doc(db, 'estudiantes', studentId)
      console.log(studentDocRef)
      const studentDocSnapshot = await getDoc(studentDocRef)

      if (studentDocSnapshot.exists()) {
         const studentData = studentDocSnapshot.data()
         const studentName = studentData.estudiante_nombre

         return studentName
      } else {
         console.log('No se encontró el estudiante con el ID:', studentId)
         return null
      }
   } catch (error) {
      console.log('Error al obtener el nombre del estudiante:', error)
      return null
   }
}
