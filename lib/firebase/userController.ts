import { User } from "firebase/auth";
import { firestoreApp } from "."
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, arrayRemove, serverTimestamp } from "firebase/firestore"

export const firestore = getFirestore(firestoreApp)

export const addUserToFirestore  = async (user: User) => {
    //if user is already present than update the last seen of user
    //if not than add new user
    const userRef = doc(firestore, "users" , user.uid);
    await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        lastOnline: serverTimestamp(),
    }, { merge: true })
}