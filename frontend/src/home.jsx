import React, { useContext, useEffect } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from './context/auth_context';
import { db } from './firebase';
import './home.css'
export default function Home() {

  const { currentUser } = useContext(AuthContext);
  const docRef = doc(db, "users", currentUser.uid);
  useEffect(() => {
    const handleLogin = async (e) => {
      const docSnap = await getDoc(docRef);

    };
    handleLogin();
  }, []);


  return (
    <>
      <svg class="arc" height="800" width="800">
        <path d="M 400 0 Q 600 450 300 850" fill="none" stroke-width="2" stroke="#807f7e" />
      </svg>

      <div class="parent">
        <nav>

          <div class="navleft">SKIN CARE</div>
          <div class="navright">
            <ul>
              <li>Home</li>
              <li>History</li>
              <li>Logout</li>
            </ul>
          </div>
        </nav>
        <div class="child">

          <svg class="semi" height="100" width="100">
            <path d="M 0 99 C 0 22 99 22 99 99 " fill="none" stroke-width="2" stroke="#807f7e" />
          </svg>
          <div class="left">
            <h3>Give me a skin image and i will look at it for you.</h3>
            <br />
            <h4>Did you know😲? Each inch of skin contains 19 million skin cells, 650 sweat glands, 20 blood
              vessels,
              and 1,000
              nerve endings. The skin accounts for about 15% of the body weight and is our first line of defense
              against irritants and allergens.</h4>
            <br />
            <br />
            <button class="upload">
              Drop or pick an image 👉
            </button>

          </div>
          <div class="right">
            <img src="./ss.png" alt="" srcset="" />
          </div>
        </div>
      </div></>

  )
}
