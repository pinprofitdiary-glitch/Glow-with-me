const posts = [
  {
    title: "7 Skincare Mistakes",
    image: "images/skincare.jpg",
    text: "Stop doing these mistakes if you want clear skin."
  },
  {
    title: "Morning Skincare Routine",
    image: "images/skincare.jpg",
    text: "Start your day with the right routine."
  }
];

const feed = document.getElementById("feed");

posts.forEach((post) => {
  const postEl = document.createElement("div");
  postEl.classList.add("post");

  postEl.innerHTML = `
    <img src="${post.image}" class="post-img">

    <div class="post-content">
      <h3>${post.title}</h3>

      <div class="actions">
        <span class="like-btn">❤️</span>
        <span class="share-btn">📤</span>
      </div>

      <p>${post.text}</p>
    </div>
  `;

  feed.appendChild(postEl);
});

// LIKE
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("like-btn")) {
    e.target.classList.toggle("liked");
  }
});

// FIREBASE CONFIG
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

const feed = document.getElementById("feed");

db.collection("posts")
  .orderBy("createdAt", "desc")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      const post = doc.data();

      const postEl = document.createElement("div");
      postEl.classList.add("post");

      postEl.innerHTML = `
        <img src="${post.image}" class="post-img">

        <div class="post-content">
          <h3>${post.title}</h3>

          <div class="actions">
            <span class="like-btn">❤️</span>
            <span class="share-btn">📤</span>
          </div>

          <p>${post.content}</p>
        </div>
      `;

      feed.appendChild(postEl);
    });
  });

// SHARE
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("share-btn")) {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  }
});
