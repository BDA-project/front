// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyABhGtmnKl3k9NkHz4udqlz-xvKILrUgvQ',
   authDomain: 'bda-firebase-224fe.firebaseapp.com',
   projectId: 'bda-firebase-224fe',
   storageBucket: 'bda-firebase-224fe.appspot.com',
   messagingSenderId: '137171498132',
   appId: '1:137171498132:web:27d6864511922f1cf3b081',
   measurementId: 'G-QFLXB85JWV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { auth, db }
