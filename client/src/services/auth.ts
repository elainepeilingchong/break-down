// import firebase from "firebase";
// export class AuthService {
//     signup(email: string, password: string) {
//         return firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser => {
//             firebase
//                 .database()
//                 .ref('/userProfile')
//                 .child(newUser.uid)
//                 .set({ email: email });
//         }));
//     }
//     signin(email: string, password: string) {
//         return firebase.auth().signInWithEmailAndPassword(email, password);
//     }
//     logout() {
//         firebase.auth().signOut();
//     }
//     resetPassword(email: string) {
//         return firebase.auth().sendPasswordResetEmail(email);
//     }
//     getActiveUser() {
//         return firebase.auth().currentUser;
//     }
// }