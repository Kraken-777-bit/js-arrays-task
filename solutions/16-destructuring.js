const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) {
    return null; 
  }

  let nearestLocation = null;
  let shortestDistance = Infinity;

  for (const [name, coordinates] of locations) {
    const distance = getDistance(coordinates, point);
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestLocation = [name, coordinates];
    }
  }

  return nearestLocation;
}

// END
