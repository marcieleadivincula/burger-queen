const functions = require('firebase-functions');
const admin = require('firebase-admin');


admin.initializeApp();
admin.firestore().settings({ timestampsInSnapshots: true });


exports.createProfile = functions.auth.user().onCreate(
  user => admin.firestore().doc(`users/${user.uid}`).set({
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    createdAt: new Date(),
  })
);


exports.deleteProfile = functions.auth.user().onDelete(
  user => admin.firestore().doc(`users/${user.uid}`).delete()
);

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

// const createNotification = ((notification) => {
//   return admin.firestore().collection('notifications')
//     .add(notification)
//     .then(doc => console.log('notification added', doc));
// });


// exports.projectCreated = functions.firestore
//   .document('projects/{projectId}')
//   .onCreate(doc => {

//     const project = doc.data();
//     const notification = {
//       content: 'Added a new project',
//       user: `${project.authorFirstName} ${project.authorLastName}`,
//       time: admin.firestore.FieldValue.serverTimestamp()
//     }

//     return createNotification(notification);

// });

// exports.userJoined = functions.auth.user()
//   .onCreate(user => {
    
//     return admin.firestore().collection('users')
//       .doc(user.uid).get().then(doc => {

//         const newUser = doc.data();
//         const notification = {
//           content: 'Joined the party',
//           user: `${newUser.firstName} ${newUser.lastName}`,
//           time: admin.firestore.FieldValue.serverTimestamp()
//         };

//         return createNotification(notification);

//       });
// });

