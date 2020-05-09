import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

// Initialize Firebase
let config = {
    apiKey: "AIzaSyC_DwUkk11YTBchh5kI7QNEMUx-ObSn1UQ",
    authDomain: "contact-form-ripple-impact.firebaseapp.com",
    databaseURL: "https://contact-form-ripple-impact.firebaseio.com",
    projectId: "contact-form-ripple-impact",
    storageBucket: "contact-form-ripple-impact.appspot.com",
    measurementId: "G-ES2B0S3LZB"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }