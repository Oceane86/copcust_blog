// export-users.js

const { admin, auth } = require('./firebase-admin-config');

async function exportUsers() {
  try {
    const userRecords = await auth.listUsers();
    userRecords.users.forEach((user) => {
      console.log('User:', user.toJSON());
    });
  } catch (error) {
    console.error('Erreur lors de l\'export des utilisateurs:', error);
  }
}

exportUsers();
