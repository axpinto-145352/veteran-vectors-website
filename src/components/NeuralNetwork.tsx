import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

interface Connection {
  from: number;
  to: number;
  strength: number;
}

const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeNetwork();
    };

    const initializeNetwork = () => {
      const nodeCount = 50;
      const nodes: Node[] = [];
      const connections: Connection[] = [];

      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: []
        });
      }

      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) + 
            Math.pow(nodes[i].y - nodes[j].y, 2)
          );
          
          if (distance < 150 && Math.random() > 0.7) {
            connections.push({
              from: i,
              to: j,
              strength: Math.random()
            });
            nodes[i].connections.push(j);
            nodes[j].connections.push(i);
          }
        }
      }

      nodesRef.current = nodes;
      connectionsRef.current = connections;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const mouse = mouseRef.current;

      // Update node positions
      nodes.forEach((node, index) => {
        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(node.x - mouse.x, 2) + 
          Math.pow(node.y - mouse.y, 2)
        );
        
        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          const angle = Math.atan2(node.y - mouse.y, node.x - mouse.x);
          node.vx += Math.cos(angle) * force * 0.02;
          node.vy += Math.sin(angle) * force * 0.02;
        }

        // Apply velocity
        node.x += node.vx;
        node.y += node.vy;

        // Boundary collision
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Apply friction
        node.vx *= 0.99;
        node.vy *= 0.99;
      });

      // Draw connections
      connections.forEach(connection => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        const distance = Math.sqrt(
          Math.pow(fromNode.x - toNode.x, 2) + 
          Math.pow(fromNode.y - toNode.y, 2)
        );

        if (distance < 200) {
          const opacity = (200 - distance) / 200 * connection.strength;
          
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = `rgba(0, 212, 170, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Pulse effect near mouse
          const midX = (fromNode.x + toNode.x) / 2;
          const midY = (fromNode.y + toNode.y) / 2;
          const mouseDistanceToLine = Math.sqrt(
            Math.pow(midX - mouse.x, 2) + 
            Math.pow(midY - mouse.y, 2)
          );

          if (mouseDistanceToLine < 80) {
            const pulseOpacity = (80 - mouseDistanceToLine) / 80;
            ctx.strokeStyle = `rgba(0, 229, 255, ${pulseOpacity * 0.6})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      });

      // Draw nodes
      nodes.forEach((node, index) => {
        const mouseDistance = Math.sqrt(
          Math.pow(node.x - mouse.x, 2) + 
          Math.pow(node.y - mouse.y, 2)
        );

        let radius = 3;
        let opacity = 0.6;
        let color = '0, 212, 170';

        if (mouseDistance < 60) {
          radius = 3 + (60 - mouseDistance) / 60 * 3;
          opacity = 0.6 + (60 - mouseDistance) / 60 * 0.4;
          color = '0, 229, 255';
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.fill();

        // Glow effect
        if (mouseDistance < 60) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${opacity * 0.2})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default NeuralNetwork;