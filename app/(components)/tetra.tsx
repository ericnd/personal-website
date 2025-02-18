"use client";
import { useEffect, useRef } from "react";

const SpinningTetrahedron: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let angle = 0;

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

    const rotateY = (point: number[], angle: number) => {
        const [x, y, z] = point;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        return [cosA * x + sinA * z, y, -sinA * x + cosA * z];
    };

    const rotateX = (point: number[], angle: number) => {
        const [x, y, z] = point;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        return [x, cosA * y - sinA * z, sinA * y + cosA * z];
    };

    const project = (point: number[], canvasWidth: number, canvasHeight: number) => {
        const [x, y, z] = point;
        const scale = 5 / (z + 9);
        return [
            (x * scale + 1) * canvasWidth / 2,
            (y * scale + 1) * canvasHeight / 2
        ];
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        const draw = () => {
            if (!canvas || !ctx) return;
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);
            
            const transformed = vertices.map(v => rotateY(rotateX(v, angle), angle));
            const projected = transformed.map(v => project(v, width, height));
            
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            
            for (const [a, b, c] of faces) {
                const [ax, ay] = projected[a];
                const [bx, by] = projected[b];
                const [cx, cy] = projected[c];
                
                ctx.beginPath();
                ctx.moveTo(ax, ay);
                ctx.lineTo(bx, by);
                ctx.lineTo(cx, cy);
                ctx.closePath();
                ctx.stroke();
            }

            angle += 0.01; // Slower rotation speed

            requestAnimationFrame(draw);
        };

        draw();
    }, []);

    return <canvas ref={canvasRef} width={400} height={400} />;
};

export default SpinningTetrahedron;
