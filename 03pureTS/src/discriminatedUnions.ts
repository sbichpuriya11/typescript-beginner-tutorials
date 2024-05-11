interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

//type
type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
  if (shape.kind == "circle") return Math.PI * shape.radius ** 2;
  //return shape.side ** 2;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
