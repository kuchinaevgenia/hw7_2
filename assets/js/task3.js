const calculateSurfaceArea = function (shapeType, param1, param2 = 1) {
  if (shapeType === "cube") {
    return 6 * Math.pow(param1, 2);
  }
  if (shapeType === "cylinder") {
    return 2 * Math.PI * param1 * (param1 + param2);
  }
  return 0;
};

const calculatePaintBoxes = function (area, layersCount = 1) {
  return Math.ceil(area * 0.1 * layersCount);
};
