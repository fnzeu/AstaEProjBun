// import React, {useContext, useEffect, useState} from "react";
// import app from "../firebase";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({children}) {
//   const [currentUser, setCurrentUser] = useState();

//   function register(fisrtName, lastName, email, password) {
//     return app.createUserWithEmailandPassword(
//       fisrtName,
//       lastName,
//       email,
//       password
//     );
//   }
//   useEffect(() => {
//     const unsubscribe = app.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     register,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
