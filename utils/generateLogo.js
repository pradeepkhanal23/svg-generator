const { Circle, Square, Traingle } = require("../lib/shapes");

function generateLogo(logoDetails) {
  let shape;

  if (logoDetails.shape.toLowerCase() === "circle") {
    let defaultRadius = 50;
    shape = new Circle(
      logoDetails.shapeColor,
      logoDetails.textColor,
      logoDetails.text,
      defaultRadius
    );

    return shape.render();
  }
  if (logoDetails.shape.toLowerCase() === "square") {
    shape = new Square(
      logoDetails.shapeColor,
      logoDetails.textColor,
      logoDetails.text
    );
    return shape.render();
  }
  if (logoDetails.shape.toLowerCase() === "traingle") {
    shape = new Traingle(
      logoDetails.shapeColor,
      logoDetails.textColor,
      logoDetails.text
    );
    return shape.render();
  }
}

module.exports = generateLogo;
