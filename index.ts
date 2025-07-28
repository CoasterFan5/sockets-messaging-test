import { io } from "socket.io-client";

const socket = io("https://sockets.hosted.coasterfan5.com");

console.log("working...");

socket.on("error", () => {
  console.log("error");
});

socket.on("message", (args) => {
  console.log(args);
});

socket.on("connect", () => {
  console.log("connected");
  socket.emit("message", "Hello World");
});
