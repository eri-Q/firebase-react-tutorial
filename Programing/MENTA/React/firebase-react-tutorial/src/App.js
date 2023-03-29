import "./App.css";
import db from "./firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({...doc.data()})));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({...doc.data() })))
    })
  }, []);

  

  return (
    <div className="App">
      {posts.map((post) => {
        <div>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
