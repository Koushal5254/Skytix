"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const LOCAL_STORAGE_KEY = "skytix_user";
const SESSION_STORAGE_KEY = "skytix_session_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [authLoading, setAuthLoading] =
    useState(true);

  /* ========================================
     RESTORE AUTH SESSION
  ======================================== */

  useEffect(() => {
    try {
      /*
        First check permanent login.

        This exists only when the user
        selected "Remember me".
      */

      const localUser =
        localStorage.getItem(
          LOCAL_STORAGE_KEY
        );

      if (localUser) {
        const parsedUser =
          JSON.parse(localUser);

        if (
          parsedUser?.isAuthenticated
        ) {
          setUser(parsedUser);
          return;
        }

        localStorage.removeItem(
          LOCAL_STORAGE_KEY
        );
      }

      /*
        Otherwise check the current
        browser-tab session.
      */

      const sessionUser =
        sessionStorage.getItem(
          SESSION_STORAGE_KEY
        );

      if (sessionUser) {
        const parsedUser =
          JSON.parse(sessionUser);

        if (
          parsedUser?.isAuthenticated
        ) {
          setUser(parsedUser);
          return;
        }

        sessionStorage.removeItem(
          SESSION_STORAGE_KEY
        );
      }

      setUser(null);
    } catch (error) {
      console.error(
        "Unable to restore authentication:",
        error
      );

      localStorage.removeItem(
        LOCAL_STORAGE_KEY
      );

      sessionStorage.removeItem(
        SESSION_STORAGE_KEY
      );

      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  }, []);

  /* ========================================
     LOGIN
  ======================================== */

  const login = (
    userData,
    remember = false
  ) => {
    const authenticatedUser = {
      ...userData,

      isAuthenticated: true,
    };

    setUser(authenticatedUser);

    /*
      Remove any previous authentication
      before creating the new session.
    */

    localStorage.removeItem(
      LOCAL_STORAGE_KEY
    );

    sessionStorage.removeItem(
      SESSION_STORAGE_KEY
    );

    if (remember) {
      /*
        Persistent login.

        Survives browser close/restart.
      */

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(
          authenticatedUser
        )
      );
    } else {
      /*
        Temporary login.

        Exists only for the current
        browser-tab session.
      */

      sessionStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify(
          authenticatedUser
        )
      );
    }
  };

  /* ========================================
     LOGOUT
  ======================================== */

  const logout = () => {
    localStorage.removeItem(
      LOCAL_STORAGE_KEY
    );

    sessionStorage.removeItem(
      SESSION_STORAGE_KEY
    );

    /*
      Also clear temporary auth flows.
    */

    sessionStorage.removeItem(
      "skytix_pending_registration"
    );

    sessionStorage.removeItem(
      "skytix_password_reset"
    );

    setUser(null);
  };

  /* ========================================
     UPDATE USER
  ======================================== */

  const updateUser = (
    updatedData
  ) => {
    setUser((currentUser) => {
      if (!currentUser) {
        return null;
      }

      const updatedUser = {
        ...currentUser,
        ...updatedData,
      };

      /*
        Update whichever storage currently
        contains the authentication session.
      */

      if (
        localStorage.getItem(
          LOCAL_STORAGE_KEY
        )
      ) {
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(
            updatedUser
          )
        );
      }

      if (
        sessionStorage.getItem(
          SESSION_STORAGE_KEY
        )
      ) {
        sessionStorage.setItem(
          SESSION_STORAGE_KEY,
          JSON.stringify(
            updatedUser
          )
        );
      }

      return updatedUser;
    });
  };

  /* ========================================
     CONTEXT
  ======================================== */

  return (
    <AuthContext.Provider
      value={{
        user,

        authLoading,

        isAuthenticated:
          Boolean(
            user?.isAuthenticated
          ),

        login,

        logout,

        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* ========================================
   AUTH HOOK
======================================== */

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}