const PAINT_PER_M2 = 0.1;

/**
 *
 * @param {string} shapeType -shape type for painting
 * @param {number} param1 - edge for cube, radius for cylinder
 * @param {number} param2 - height for cylinder
 * @returns {number} area for painting
 */
const calculateSurfaceArea = function (shapeType, param1, param2 = 1) {
  if (shapeType === "cube") {
    return 6 * Math.pow(param1, 2);
  }
  if (shapeType === "cylinder") {
    return 2 * Math.PI * param1 * (param1 + param2);
  }
  return 0;
};

/**
 *
 * @param {number} area - area for painting
 * @param {number} layersCount - number of layers for painting
 * @returns {number} number of paint boxes
 */
const calculatePaintBoxes = function (area, layersCount = 1) {
  return Math.ceil(area * PAINT_PER_M2 * layersCount);
};

/**
 *
 * @param {string} shapeType -shape type for painting
 * @param {number} param1 - edge for cube, radius for cylinder
 * @param {number} param2 - height for cylinder
 * @param {number} layersCount - number of layers for painting
 * @returns {string} summary information for painting
 */
const getPaintInfo = function (shapeType, param1, param2 = 1, layersCount = 1) {
  const area = calculateSurfaceArea(shapeType, param1, param2);
  const boxes = calculatePaintBoxes(area, layersCount);
  return `Для фарбування фігури ${shapeType} у ${layersCount} шарів необхідно придбати ${boxes} банок фарби.`;
};
