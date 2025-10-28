// For future reuse in other components

// convert polar coordinates (angle in degrees, distance) to cartesian (x, y)

export const convertPolarToCartesian = (
  angle: number,
  distance: number
): [number, number] => {
  const angleInRadians = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRadians) * distance;
  const y = Math.sin(angleInRadians) * distance;

  return [x, y];
};

export const convertDegreesToRadians = (angle: number): number =>
  (angle * Math.PI) / 180;
