// firebase-admin-config.js

const admin = require('firebase-admin');

try {
  const serviceAccount = require('./next-firebase-35299-firebase-adminsdk-gv0vy-31176805fa.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://next-firebase-35299.firebaseio.com'
  });

  const db = admin.firestore();
  const auth = admin.auth();

  module.exports = { admin, db, auth };

} catch (error) {
  console.error('Erreur lors de l\'initialisation Firebase Admin:', error);
}
