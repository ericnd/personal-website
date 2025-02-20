"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const canvasWidth = 40;
const canvasHeight = 20;
const rotationSpeed = 0.02;

type Point3D = [number, number, number];
type Point2D = [number, number];

const vertices: Point3D[] = [
  [1, 1, 1],
  [-1, -1, 1],
  [-1, 1, -1],
  [1, -1, -1],
];

const faces: [number, number, number][] = [
  [0, 1, 2],
  [0, 1, 3],
  [0, 2, 3],
  [1, 2, 3],
];

const shades = [".", "-", "*", "#"];

/** Rotates a 3D point around the Y-axis */
function rotateY(point: Point3D, angle: number): Point3D {
  const [x, y, z] = point;
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  return [cosA * x + sinA * z, y, -sinA * x + cosA * z];
}

/** Rotates a 3D point around the X-axis */
function rotateX(point: Point3D, angle: number): Point3D {
  const [x, y, z] = point;
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  return [x, cosA * y - sinA * z, sinA * y + cosA * z];
}

/** Projects a 3D point onto a 2D plane */
function project(point: Point3D): Point2D {
  const [x, y, z] = point;
  const scale = 8 / (z + 15);
  return [
    Math.floor(((x * scale + 1) * canvasWidth) / 2),
    Math.floor(((y * scale + 1) * canvasHeight) / 2),
  ];
}

/** Draws a line on the ASCII canvas buffer */
function drawLine(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  char: string,
  buffer: string[]
): void {
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    if (x0 >= 0 && x0 < canvasWidth && y0 >= 0 && y0 < canvasHeight) {
      buffer[y0 * canvasWidth + x0] = char;
    }
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}

/** Spinning Tetrahedron React Component */
const SpinningTetrahedron: React.FC = () => {
  const [output, setOutput] = useState<string>("");
  const { theme } = useTheme();
  const angleRef = useRef<number>(0);
  const frameId = useRef<number | null>(null);

  /** Animation loop with proper cleanup */
  useEffect(() => {
    const drawFrame = () => {
      const angle = angleRef.current;
      const buffer: string[] = Array(canvasWidth * canvasHeight).fill(" ");
      const transformed = vertices.map((v) => rotateY(rotateX(v, angle), angle));
      const projected = transformed.map(project);

      faces.forEach(([a, b, c]) => {
        const [ax, ay] = projected[a]!;
        const [bx, by] = projected[b]!;
        const [cx, cy] = projected[c]!;
      
        const centroidZ =
          (transformed[a]![2] + transformed[b]![2] + transformed[c]![2]) / 3;
      
        const shadeIndex = Math.max(
          0,
          Math.min(
            shades.length - 1,
            Math.floor(((centroidZ + 1) * shades.length) / 2)
          )
        );
      
        const shadeChar: string = shades[shadeIndex] ?? "."; // ✅ Guaranteed to be a string
      
        drawLine(ax, ay, bx, by, shadeChar, buffer);
        drawLine(bx, by, cx, cy, shadeChar, buffer);
        drawLine(cx, cy, ax, ay, shadeChar, buffer);
      });      

      const screen = Array.from({ length: canvasHeight }, (_, y) =>
        buffer.slice(y * canvasWidth, (y + 1) * canvasWidth).join("")
      ).join("\n");

      setOutput(screen);
      angleRef.current += rotationSpeed;
      frameId.current = requestAnimationFrame(drawFrame);
    };

    frameId.current = requestAnimationFrame(drawFrame);

    return () => {
      if (frameId.current !== null) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <pre
      style={{
        color: theme === "light" ? "black" : "white",
        fontFamily: "monospace",
        lineHeight: "1em",
      }}
    >
      {output}
    </pre>
  );
};

export default SpinningTetrahedron;
