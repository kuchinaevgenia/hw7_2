const calculateSurfaceArea = function (shapeType, param1, param2 = 1) {
  if (shapeType === "cube") {
    return 6 * Math.pow(param1, 2);
  }
  if (shapeType === "cylinder") {
    return 2 * Math.PI * param1 * (param1 + param2);
  }
  return 0;
};
