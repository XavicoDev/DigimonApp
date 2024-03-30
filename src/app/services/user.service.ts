import { Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { Auth, GoogleAuthProvider, UserCredential, createUserWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from '@angular/fire/auth';
import { generateFirebaseAuthErrorMessage } from './Firebase/ErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register3({ email, password, name }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async register({ email, password, name }: any): Promise<boolean> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      // Update user profile
      await updateProfile(user, { displayName: name });
      await sendEmailVerification(user);
      alert(
        `A verification email has been sent to your email address ${name}!. Please verify your email to login.`
      );
    }
    catch (error) {
      if (error instanceof FirebaseError) {
        generateFirebaseAuthErrorMessage(error);
      }
      console.error(error);
      return false;
    } finally {
      return true;
    }

  }

  async login({ email, password }: any): Promise<UserCredential> {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);

    return userCredential
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}
