<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD4QpeAvZKSZpEl7BiTQhKP9I3GRDcSXGA",
    authDomain: "kamus-webdev.firebaseapp.com",
    projectId: "kamus-webdev",
    storageBucket: "kamus-webdev.appspot.com",
    messagingSenderId: "495080524006",
    appId: "1:495080524006:web:2f66a7c4f1462b7c841327",
    measurementId: "G-N360DR0S0J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>