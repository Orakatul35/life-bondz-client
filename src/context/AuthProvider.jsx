import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebas.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); 
  const [loading, setLoading] = useState(true);

  const saveUserToDB = async (newUser) => {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    });
  };

  const getUserRole = async (email) => {
    const res = await fetch(`http://localhost:5000/users/${email}`);
    const data = await res.json();
    return data?.role || "user";
  };

  // GOOGLE LOGIN
  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);

    const loggedInUser = result.user;

    await saveUserToDB({
      name: loggedInUser.displayName,
      email: loggedInUser.email,
      photoURL: loggedInUser.photoURL,
      role: "user",
      createdAt: new Date(),
    });

    return result;
  };

  // EMAIL REGISTER
  const createAccount = async (name, email, password, photoURL) => {
    setLoading(true);

    const result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });

    await saveUserToDB({
      name,
      email,
      photoURL,
      role: "user",
      createdAt: new Date(),
    });

    return result;
  };

  // EMAIL LOGIN
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LOGOUT
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // TRACK USER LOGIN STATE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const userRole = await getUserRole(currentUser.email);
        setRole(userRole);
      } else {
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    role,
    loading,
    googleLogin,
    createAccount,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
