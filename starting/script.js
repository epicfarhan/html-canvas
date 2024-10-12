var canvas = document.querySelector("canvas"); // target the canvas
canvas.width = window.innerWidth; // set canvas width to window width
canvas.height = window.innerHeight; // set canvas height to window height

const c = canvas.getContext("2d");
// drawing boxes
c.fillStyle = "red"; //fill color in rectanges
c.fillRect(100, 100, 100, 100); // x,y,width, height, used to draw rectangular shapes on screen

// drawinh lines
c.beginPath(); // starting a line
c.moveTo(50, 50); // where the line will start
c.lineTo(200, 50); // where line will end
c.strokeStyle = "red"; // add color to the lines4
c.stroke(); // draw the line

//drawing a circle
c.beginPath(); // start drawing
c.arc(400, 200, 100, 0, Math.PI * 2, false); // x,y,radius, start angle in radians, end angle in radians, true is anticlock and false is clock
c.strokeStyle = "blue"; // add color
c.stroke();

for (let index = 0; index < 4; index++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath(); // start drawing
  c.arc(400, 200, 100, 0, Math.PI * 2, false); // x,y,radius, start angle in radians, end angle in radians, true is anticlock and false is clock
  c.strokeStyle = "purple"; // add color
  c.stroke();
}
