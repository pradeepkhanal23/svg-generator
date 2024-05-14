class Shape {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    throw new Error("Generate SVG method must be implemented");
  }
}

class Circle extends Shape {
  constructor(shapeColor, textColor, text, radius) {
    super(shapeColor, textColor, text);
    this.radius = radius;
  }

  setRadius(customRadius) {
    this.radius = customRadius;
  }

  render() {
    return `<svg height="300" width="200">
                          <circle cx="50" cy="50" r=30 fill=${this.shapeColor} />
                          <text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill=${this.textColor} font-size="18">${this.text}</text>
                        </svg>`;
  }
}

class Traingle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }

  render() {
    return `<svg height="300" width="200">
                            <polygon points="50,10 100,80 0,80" fill=${this.shapeColor} />
                            <text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill=${this.textColor} font-size="18">${this.text}</text>
                          </svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }

  render() {
    return `<svg height="300" width="200">
                          <rect x="50" y="50" width="100" height="100" fill=${this.shapeColor} />
                          <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" fill=${this.textColor} font-size="30">${this.text}</text>
                        </svg>`;
  }
}

module.exports = {
  Circle,
  Traingle,
  Square,
};
