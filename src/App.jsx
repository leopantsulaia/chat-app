import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <>
      <p style={{ backgroundColor: "red" }}>
        some data is already created to avoid payments. Whhile filling the login
        fields, refresh the website {"<3"}
      </p>
      <p style={{ backgroundColor: "red" }}>
        sign in example 1: Username: Levan , Email: levan@gmail.com , password:
        Levan123
      </p>
      <p style={{ backgroundColor: "red" }}>
        sign in example 2: Username: Pantsu , Email: pantsu@gmail.com ,
        password: Pantsu123
      </p>
      <p style={{ backgroundColor: "red" }}>
        sign in example 3: Username: localhost , Email: localhost@localhost.com
        , password: localhost
      </p>
      <p style={{ backgroundColor: "red" }}>
        If you still want to create your own account, remember upload the dummy
        image first, note: pls upload small image and inform me if you got
        suggestions
      </p>
      <div className="container">
        {currentUser ? (
          <>
            <List />

            {chatId && <Chat />}
            {chatId && <Detail />}

            <button
              style={{ backgroundColor: "red", height: "50px", width: "100px" }}
              onClick={() => auth.signOut()}>
              Logout
            </button>
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </>
  );
};

export default App;
