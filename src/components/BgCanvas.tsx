import { useRef, useEffect } from 'react';

class Star {
  x: number;
  y: number;
  z: number;

  constructor(width: number, height: number) {
    this.x = (Math.random() - 0.5) * width * 2;
    this.y = (Math.random() - 0.5) * height * 2;
    this.z = Math.random() * width;
  }

  update(width: number, height: number, speed: number) {
    this.z -= speed;
    if (this.z < 1) {
      this.x = (Math.random() - 0.5) * width * 2;
      this.y = (Math.random() - 0.5) * height * 2;
      this.z = width;
    }
  }

  draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const sx = (this.x / this.z) * width + width / 2;
    const sy = (this.y / this.z) * height + height / 2;
    const r = Math.max(0, 10 - (this.z / width) * 10);

    ctx.fillStyle = '#8c8b8c';
    ctx.beginPath();
    ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function BgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const starsCount = 500;
    const speed = 5;
    const stars: Star[] = [];

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();

    const initialCanvas = canvasRef.current;
    if (initialCanvas) {
      for (let i = 0; i < starsCount; i++) {
        stars.push(new Star(initialCanvas.width, initialCanvas.height));
      }
    }

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < starsCount; i++) {
        stars[i].update(canvas.width, canvas.height, speed);
        stars[i].draw(ctx, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} id="bg__canvas"/>
  );
}

export default BgCanvas;