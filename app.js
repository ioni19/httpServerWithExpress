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

const createData = (req, res) => {
  const data = req.body.data;
  console.log(data);

  users.push({
    id: data.id,
    name: data.name,
    email: data.email,
    password: data.password,
  });

  console.log("after: ", users);

  res.json({ message: "USER_CREATED" });
};

const createPost = (req, res) => {
  const post = req.body.data;
  console.log(post);

  posts.push({
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
  });

  console.log("after: ", posts);

  res.json({ message: "postCreated" });
};

//

const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());

app.post("/signup", createData);
app.post("/posting", createPost); // 첫번째 인자에는 endpoint url 을 기입하고,

const server = http.createServer(app);

server.listen(6000, () => {
  console.log("server is listening on PORT 6000");
});

//
