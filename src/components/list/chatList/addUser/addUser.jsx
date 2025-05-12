import "./addUser.css";
import { db } from "../../../../lib/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    console.log('Searching for user:', username);

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        console.log('User found:', querySnapShot.docs[0].data());
        setUser(querySnapShot.docs[0].data());
      } else {
        console.log('No user found with username:', username);
        setUser(null);
      }
    } catch (err) {
      console.log('Error during search:', err);
      setError('Failed to search user');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    console.log('Adding user to chat');
    setLoading(true);
    setError(null);
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });
      console.log('New chat created with ID:', newChatRef.id);

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });
      console.log('Chat added to user:', user.id);

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
      console.log('Chat added to current user:', currentUser.id);
    } catch (err) {
      console.log('Error during add user to chat:', err);
      setError('Failed to add user to chat');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input type='text' placeholder='Username' name='username' />
        <button disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
      </form>
      {error && <div className="error">{error}</div>}
      {user && (
        <div className='user'>
          <div className='detail'>
            <img src={user.avatar || "./avatar.png"} alt='' />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd} disabled={loading}>{loading ? 'Adding...' : 'Add User'}</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
