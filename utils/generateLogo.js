const { Circle, Square, Traingle } = require("../lib/shapes");

function generateLogo(logoDetails) {
  let shape;

  if (logoDetails.shape.toLowerCase() === "circle") {
    shape = new Circle(
      logoDetails.shapeColor,
      logoDetails.textColor,
      logoDetails.text,
      50
    );
    shape.generateSVG();
  }
  if (logoDetails.shape.toLowerCase() === "square") {
    shape = new Square(
      logoDetails.shapeColor,
      logoDetails.textColor,
      logoDetails.text
    );
    shape.generateSVG();
  }
  if (logoDetails.shape.toLowerCase() === "traingle") {
    shape = new Traingle(
      logoDetails.shapeColor,
      logoDetails.textColor,
      logoDetails.text
    );
    shape.generateSVG();
  }
}

module.exports = generateLogo;
