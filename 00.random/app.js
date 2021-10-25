let i = 1;

setTimeout(() => {
  console.log("Listening to server...");
}, 3000);

setTimeout(() => {
  console.log("SYNbit=1...");
}, 6000);

setTimeout(() => {
  setInterval(() => {
    console.log(`Waiting For Package...${i}s`);
    i += 2;
  }, 2000);
}, 9000);
