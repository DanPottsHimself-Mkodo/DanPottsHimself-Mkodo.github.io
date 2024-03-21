import React, { useRef, useEffect } from 'react';
import paper, { Point, Raster} from 'paper';

function Results() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         <BouncingBalls />
        </p>
      </header>
    </div>
  );
}

const BouncingBalls: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Set up Paper.js on the canvas
        paper.setup(canvasRef.current);

        // Create an array to hold the balls and texts
        const balls: { path: paper.Raster, velocity: paper.Point }[] = [];

        // Create 40 balls
        for (let i = 0; i < 40; i++) {
            const position = new Point(Math.random() * paper.view.size!.width, Math.random() * paper.view.size!.height);

            const raster = new Raster({
                source: `/assets/balls/${i + 1}.png`,
                position: position,

            })

            raster.scale(0.5)

            // Set initial velocity for each ball
            const velocity = new Point(Math.random() * 10 - 5, Math.random() * 10 - 5);

            balls.push({ path: raster, velocity });
        }

        // Animation frame function
        const onFrame = (event: paper.Event) => {
            // Update position for each ball
            balls.forEach(ball => {
                ball.path.position = ball.path.position.add(ball.velocity);

                // Bounce off walls
                if (ball.path.bounds.left < 0 || ball.path.bounds.right > paper.view.size!.width) {
                    ball.velocity.x *= -1;
                }
                if (ball.path.bounds.top < 0 || ball.path.bounds.bottom > paper.view.size!.height) {
                    ball.velocity.y *= -1;
                }

                // Randomly change direction after each bounce
                if (Math.random() < 0.05) {
                    ball.velocity = new Point(Math.random() * 10 - 5, Math.random() * 10 - 5);
                }
            });
        };

        // Start animation
        paper.view.onFrame = onFrame;

        // Cleanup function
        return () => {
            paper.project.clear();
            paper.view.off('frame', onFrame);
        };
    }, []); // Only run on initial mount

    return <canvas className={"bg-white rounded-full"} ref={canvasRef} />;
};

export default Results;
