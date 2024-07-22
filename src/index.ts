/**
 * Converts `radians` rad to degrees.
 *
 * @param radians
 * @returns the degrees
 */
function toDegrees(radians: number) {
  return radians * (180 / Math.PI);
}

/**
 * Converts `degrees` deg to radians.
 *
 * @param degrees
 * @returns the radians
 */
function toRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

/**
 * Normalizes `degrees` to be in the range [0, 360).
 *
 * @param degrees
 * @returns the normalized degrees
 */
function normalizeDegrees(degrees: number) {
  return ((degrees % 360) + 360) % 360;
}

/**
 * Generalized cosine function.
 *
 * @param p the norm to operate in (i.e. the exponent `p`
 *          such that |cosp|^p + |sinp|^p = 1)
 * @param radians the radians to compute the generalized cosine of
 * @returns the generalized cosine value
 */
export function cosp(p: number, radians: number): number {
  const degrees = toDegrees(radians);
  const normalizedDegrees = normalizeDegrees(degrees);

  // We just have to worry about the values
  // in the bottom half of the first quadrant,
  // everything else can be derived by symmetry.
  if (normalizedDegrees <= 45) {
    switch (p) {
      case 1: {
        return 1 - normalizedDegrees / 90;
      }
      case 2: {
        return Math.cos(radians);
      }
      case 3: {
        // Based on Taylor series from https://en.wikipedia.org/wiki/Dixon_elliptic_functions#Power_series
        const t = (normalizedDegrees / 360) * (1.76663875 * 4);
        return 1 - (1 / 3) * t ** 3 + (1 / 18) * t ** 6;
      }
      default: {
        throw new RangeError("Only p = 1, 2 or 3 is supported.");
      }
    }
  } else if (normalizedDegrees <= 90) {
    return sinp(p, toRadians(90 - degrees));
  } else if (normalizedDegrees <= 180) {
    return -1 * cosp(p, toRadians(180 - degrees));
  } else {
    return cosp(p, toRadians(360 - degrees));
  }
}

/**
 * Generalized sin function.
 *
 * @param p the norm to operate in (i.e. the exponent `p`
 *          such that |cosp|^p + |sinp|^p = 1)
 * @param radians the radians to compute the generalized sine of
 * @returns the generalized sine value
 */
export function sinp(p: number, radians: number): number {
  const degrees = toDegrees(radians);
  const normalizedDegrees = normalizeDegrees(degrees);

  if (normalizedDegrees <= 45) {
    switch (p) {
      case 1: {
        return normalizedDegrees / 90;
      }
      case 2: {
        return Math.sin(radians);
      }
      case 3: {
        // Based on Taylor series from https://en.wikipedia.org/wiki/Dixon_elliptic_functions#Power_series
        const t = (normalizedDegrees / 360) * (1.76663875 * 4);
        return t - (1 / 6) * t ** 4 + (2 / 63) * t ** 7;
      }
      default: {
        throw new RangeError("Only p = 1, 2 or 3 is supported.");
      }
    }
  } else if (normalizedDegrees <= 90) {
    return cosp(p, toRadians(90 - degrees));
  } else if (normalizedDegrees <= 180) {
    return sinp(p, toRadians(180 - degrees));
  } else {
    return -1 * sinp(p, toRadians(360 - degrees));
  }
}
