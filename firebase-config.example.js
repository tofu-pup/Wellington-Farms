// Copy this file to firebase-config.js and fill in your values.
// firebase-config.js is gitignored — never commit real credentials.

export const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Google email addresses allowed to access the app.
// Anyone not on this list will be signed out automatically.
export const ALLOWED_EMAILS = [
  "your-email@gmail.com",
  "spouse-email@gmail.com",
];
