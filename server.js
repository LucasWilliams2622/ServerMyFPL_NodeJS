const { Server } = require("socket.io");

const io = new Server({ /* options */ });


const port = 3001;
io.on("connection",socket =>{
  socket.on("sendMessage", (newMessage) => {
    console.log(newMessage);
    io.to(socket.roomName).emit("onMessage", newMessage)
  })

  socket.on("join-room", (roomName) => {
    socket.roomName = roomName
    socket.join(roomName)
  })
  console.log("A user connected :))))");
})


io.listen(port,()=>console.log("server running on port"+port));



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
