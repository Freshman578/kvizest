// ============================================================
// FIREBASE BEÁLLÍTÁSOK
// ============================================================
// 1. Menj a https://console.firebase.google.com oldalra
// 2. Hozz létre egy új projektet (ingyenes Spark csomag)
// 3. Kattints: Build -> Realtime Database -> Create Database
//    (Európai szerver, "Start in test mode")
// 4. Projekt beállítások (fogaskerék) -> Your apps -> Web (</>)
// 5. Másold be ide az ott kapott firebaseConfig adatokat!
//    FONTOS: a databaseURL sor mindenképp legyen benne!

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCzsKc-D0virXTDAqZxftFHQpCHqvODito",
  authDomain: "quizest-76cf8.firebaseapp.com",
  databaseURL: "https://quizest-76cf8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quizest-76cf8",
  storageBucket: "quizest-76cf8.firebasestorage.app",
  messagingSenderId: "737017177598",
  appId: "1:737017177598:web:c032cf46a800a3bd2c8caf"
};

// Segédfüggvény annak ellenőrzésére, hogy ki lett-e már töltve
window.isFirebaseConfigured = function () {
  const c = window.FIREBASE_CONFIG;
  return Boolean(
    c &&
    c.apiKey && !c.apiKey.includes("IDE_MASOLD") &&
    c.databaseURL && !c.databaseURL.includes("IDE_MASOLD")
  );
};
