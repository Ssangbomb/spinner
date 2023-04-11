const curserSpin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let time = 100;
for(let curser of curserSpin) {
  setTimeout(() => {
    process.stdout.write(curser);
  }, time);
time += 200
}

setTimeout(() => {
  for(let curser of curserSpin) {
    process.stdout.write(curser);
    time += 200
  }  
}, time);
