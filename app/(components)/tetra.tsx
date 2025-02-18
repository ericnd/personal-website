"use client";
import { useEffect, useState } from "react";

const canvasWidth = 100;
const canvasHeight = 40;
const distance = 10; // Increased distance for better visibility
const rotationSpeed = 0.02; // Smoother rotation

const vertices = [
    [1, 1, 1],
    [-1, -1, 1],
    [-1, 1, -1],
    [1, -1, -1]
];

const faces = [
    [0, 1, 2],
    [0, 1, 3],
    [0, 2, 3],
    [1, 2, 3]
];

const shades = ['.', '-', '*', '#']; // ASCII shading

function rotateY(point: number[], angle: number): number[] {
    const [x, y, z] = point;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    return [cosA * x + sinA * z, y, -sinA * x + cosA * z];
}

function rotateX(point: number[], angle: number): number[] {
    const [x, y, z] = point;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    return [x, cosA * y - sinA * z, sinA * y + cosA * z];
}

function project(point: number[]): [number, number] {
    const [x, y, z] = point;
    const scale = 8 / (z + 15);
    return [
        Math.floor((x * scale + 1) * canvasWidth / 2),
        Math.floor((y * scale + 1) * canvasHeight / 2)
    ];
}

const SpinningTetrahedron: React.FC = () => {
    const [output, setOutput] = useState<string>("");
    let angle = 0;

    useEffect(() => {
        const drawFrame = () => {
            let buffer = Array(canvasWidth * canvasHeight).fill(' ');
            const transformed = vertices.map(v => rotateY(rotateX(v, angle), angle));
            const projected = transformed.map(project);

            for (let i = 0; i < faces.length; i++) {
                const [a, b, c] = faces[i];
                const ax = projected[a][0], ay = projected[a][1];
                const bx = projected[b][0], by = projected[b][1];
                const cx = projected[c][0], cy = projected[c][1];
                
                const centroidZ = (transformed[a][2] + transformed[b][2] + transformed[c][2]) / 3;
                const shadeIndex = Math.max(0, Math.min(shades.length - 1, Math.floor((centroidZ + 1) * shades.length / 2)));
                
                drawLine(ax, ay, bx, by, shades[shadeIndex], buffer);
                drawLine(bx, by, cx, cy, shades[shadeIndex], buffer);
                drawLine(cx, cy, ax, ay, shades[shadeIndex], buffer);
            }

            let screen = "";
            for (let y = 0; y < canvasHeight; y++) {
                screen += buffer.slice(y * canvasWidth, (y + 1) * canvasWidth).join('') + "\n";
            }
            setOutput(screen);
            angle += rotationSpeed;
            requestAnimationFrame(drawFrame);
        };

        drawFrame();
        return () => {};
    }, []);

    return (
        <pre style={{ color: "white", fontFamily: "monospace", lineHeight: "1em" }}>
            {output}
        </pre>
    );
};

function drawLine(x0: number, y0: number, x1: number, y1: number, char: string, buffer: string[]) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    while (true) {
        if (x0 >= 0 && x0 < canvasWidth && y0 >= 0 && y0 < canvasHeight) {
            buffer[y0 * canvasWidth + x0] = char;
        }
        if (x0 === x1 && y0 === y1) break;
        let e2 = 2 * err;
        if (e2 > -dy) { err -= dy; x0 += sx; }
        if (e2 < dx) { err += dx; y0 += sy; }
    }
}

export default SpinningTetrahedron;
