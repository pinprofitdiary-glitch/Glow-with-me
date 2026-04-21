// PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_MSG",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

async function uploadPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const file = document.getElementById("image").files[0];
  const category = document.getElementById("category").value;

  const storageRef = storage.ref("images/" + file.name);

  await storageRef.put(file);

  const imageUrl = await storageRef.getDownloadURL();

  await db.collection("posts").add({
    title,
    content,
    category,
    image: imageUrl,
    createdAt: new Date()
  });

  alert("Post uploaded!");
}