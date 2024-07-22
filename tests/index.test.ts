import { cosp, sinp } from "../src";

test("computes cosp1 and sinp1 correctly at 0 rad", () => {
  const cosp0 = cosp(1, 0);
  const sinp0 = sinp(1, 0);

  expect(cosp0).toBe(1);
  expect(sinp0).toBe(0);
});

test("computes cosp2 and sinp2 correctly at 0 rad", () => {
  const cosp0 = cosp(2, 0);
  const sinp0 = sinp(2, 0);

  expect(cosp0).toBe(1);
  expect(sinp0).toBe(0);
});

test("computes cosp3 and sinp3 correctly at 0 rad", () => {
  const cosp0 = cosp(3, 0);
  const sinp0 = sinp(3, 0);

  expect(cosp0).toBe(1);
  expect(sinp0).toBe(0);
});

test("computes cosp1 and sinp1 correctly at pi/4 rad", () => {
  const cosp1PiOver4 = cosp(1, Math.PI / 4);
  const sinp1PiOver4 = sinp(1, Math.PI / 4);

  expect(cosp1PiOver4).toBeCloseTo(sinp1PiOver4);
});

test("computes cosp2 and sinp2 correctly at pi/4 rad", () => {
  const cosp2PiOver4 = cosp(2, Math.PI / 4);
  const sinp2PiOver4 = sinp(2, Math.PI / 4);

  expect(cosp2PiOver4).toBeCloseTo(sinp2PiOver4);
});

test("computes cosp3 and sinp3 correctly at pi/4 rad", () => {
  const cosp3PiOver4 = cosp(3, Math.PI / 4);
  const sinp3PiOver4 = sinp(3, Math.PI / 4);

  expect(cosp3PiOver4).toBeCloseTo(sinp3PiOver4);
});

test("computes cosp1 and sinp1 correctly at pi/2 rad", () => {
  const cosp1PiOver2 = cosp(1, Math.PI / 2);
  const sinp1PiOver2 = sinp(1, Math.PI / 2);

  expect(cosp1PiOver2).toBe(0);
  expect(sinp1PiOver2).toBe(1);
});

test("computes cosp2 and sinp2 correctly at pi/2 rad", () => {
  const cosp1PiOver2 = cosp(2, Math.PI / 2);
  const sinp1PiOver2 = sinp(2, Math.PI / 2);

  expect(cosp1PiOver2).toBe(0);
  expect(sinp1PiOver2).toBe(1);
});

test("computes cosp3 and sinp3 correctly at pi/2 rad", () => {
  const cosp1PiOver2 = cosp(3, Math.PI / 2);
  const sinp1PiOver2 = sinp(3, Math.PI / 2);

  expect(cosp1PiOver2).toBe(0);
  expect(sinp1PiOver2).toBe(1);
});

test("computes cosp1 and sinp1 correctly at 3pi/2 rad", () => {
  const cosp13PiOver2 = cosp(1, (3 * Math.PI) / 2);
  const sinp13PiOver2 = sinp(1, (3 * Math.PI) / 2);

  expect(cosp13PiOver2).toBe(0);
  expect(sinp13PiOver2).toBe(-1);
});

test("computes cosp2 and sinp2 correctly at 3pi/2 rad", () => {
  const cosp13PiOver2 = cosp(2, (3 * Math.PI) / 2);
  const sinp13PiOver2 = sinp(2, (3 * Math.PI) / 2);

  expect(cosp13PiOver2).toBe(0);
  expect(sinp13PiOver2).toBe(-1);
});

test("computes cosp3 and sinp3 correctly at 3pi/2 rad", () => {
  const cosp13PiOver2 = cosp(3, (3 * Math.PI) / 2);
  const sinp13PiOver2 = sinp(3, (3 * Math.PI) / 2);

  expect(cosp13PiOver2).toBe(0);
  expect(sinp13PiOver2).toBe(-1);
});

test("computes cosp1 and sinp1 correctly at 5pi rad", () => {
  const cosp15Pi = cosp(1, 5 * Math.PI);
  const sinp15Pi = sinp(1, 5 * Math.PI);

  expect(cosp15Pi).toBe(-1);
  expect(sinp15Pi).toBe(0);
});

test("computes cosp2 and sinp2 correctly at 5pi rad", () => {
  const cosp15Pi = cosp(2, 5 * Math.PI);
  const sinp15Pi = sinp(2, 5 * Math.PI);

  expect(cosp15Pi).toBe(-1);
  // .toBeCloseTo needed because of floating point error
  expect(sinp15Pi).toBeCloseTo(0);
});

test("computes cosp3 and sinp3 correctly at 5pi rad", () => {
  const cosp15Pi = cosp(3, 5 * Math.PI);
  const sinp15Pi = sinp(3, 5 * Math.PI);
  expect(cosp15Pi).toBe(-1);
  expect(sinp15Pi).toBe(0);
});
