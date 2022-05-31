import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'



  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAYdpsfp7A_qSPr1X-bwUUSgGzYSq4580k",
    authDomain: "sae203-mmi1-eliot-gros.firebaseapp.com",
    projectId: "sae203-mmi1-eliot-gros",
    storageBucket: "sae203-mmi1-eliot-gros.appspot.com",
    messagingSenderId: "450036712875",
    appId: "1:450036712875:web:57e1e8d63949bdcb0e3eee"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);

  const app = createApp(App)

app.use(router)

app.mount('#app')
