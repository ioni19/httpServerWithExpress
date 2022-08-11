// app.js

const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];
let userId = 3;

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];
let postId = 3;

//미션 1
const createData = (req, res) => {
  const data = req.body;
  console.log(data);

  users.push({
    id: userId++,
    name: data.name,
    email: data.email,
    password: data.password,
  });

  console.log("after: ", users);

  res.json({ message: "USER_CREATED" });
};

//미션 2
const createPost = (req, res) => {
  const post = req.body;
  console.log(post);

  posts.push({
    id: postId++,
    title: post.title,
    content: post.content,
    userId: post.userId,
  });

  console.log("after: ", posts);

  res.json({ message: "postCreated" });
};

//미션 3

const postList = (req, res) => {
  let newPosts = posts.map((post) => {
    const correctUser = users.find((user) => 
      user.id === post.userId)

     return {
      userId: post.userId,
      userName: correctUser.name,
      postingId: post.id,
      postingTitle: post.title,
      postingContent: post.content,
    }});

    res.json({ data: newPosts });
  }


//server

const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());

app.post("/signup", createData);
app.post("/posting", createPost);
app.get("/postlist", postList);


const server = http.createServer(app);

server.listen(6000, () => {
  console.log("server is listening on PORT 6000");
});

//
