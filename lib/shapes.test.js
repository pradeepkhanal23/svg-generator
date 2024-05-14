const { Circle, Traingle, Square } = require("./shapes");

describe("Circle", () => {
  it("should render a proper SVG for a circle", () => {
    const circle = new Circle("black", "white", "SVG", 30);
    const expectedSVG = `<svg height="300" width="200">
                          <circle cx="50" cy="50" r=30 fill=black />
                          <text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill=white font-size="18">SVG</text>
                        </svg>`;

    expect(circle.render()).toBe(expectedSVG);
  });

  it("should be an instance of Circle", () => {
    const circle = new Circle("black", "white", "SVG", 30);
    expect(circle).toBeInstanceOf(Circle);
  });
});

describe("Triangle", () => {
  it("should render a proper SVG for a triangle", () => {
    const triangle = new Traingle("black", "white", "SVG");
    const expectedSVG = `<svg height="300" width="200">
                            <polygon points="50,10 100,80 0,80" fill=black />
                            <text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill=white font-size="18">SVG</text>
                          </svg>`;

    expect(triangle.render()).toBe(expectedSVG);
  });

  it("should be an instance of Triangle", () => {
    const triangle = new Traingle("black", "white", "SVG");
    expect(triangle).toBeInstanceOf(Traingle);
  });
});

describe("Square", () => {
  it("should render a proper SVG for a square", () => {
    const square = new Square("white", "purple", "SVG");
    const expectedSVG = `<svg height="300" width="200">
                          <rect x="50" y="50" width="100" height="100" fill=white />
                          <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" fill=purple font-size="30">SVG</text>
                        </svg>`;

    expect(square.render()).toBe(expectedSVG);
  });

  it("should be an instance of Square", () => {
    const square = new Square("white", "purple", "SVG");
    expect(square).toBeInstanceOf(Square);
  });
});
