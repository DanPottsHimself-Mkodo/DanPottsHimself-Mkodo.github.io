import React, {useEffect, useRef} from "react";
import paper, {Point, Raster} from "paper";
import {isMobile} from "../../util/isMobile";

export const BouncingBalls: React.FC = () => {
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

            raster.scale(isMobile() ? 0.2 : 0.6)

            // Set initial velocity for each ball
            const velocity = new Point(Math.random() * 8 - 5, Math.random() * 8 - 5);

            balls.push({ path: raster, velocity });
        }

        // Animation frame function
        const onFrame = (event: paper.Event) => {
            // Update position for each ball
            balls.forEach(ball => {
                ball.velocity.x *= 1.0;
                ball.path.position = ball.path.position.add(ball.velocity);

                // Bounce off walls
                if (ball.path.position.x < 0 || ball.path.position.x > paper.view.size!.width) {
                    ball.velocity.x *= -1;
                }
                if (ball.path.position.y < 0 || ball.path.position.y > paper.view.size!.height) {
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

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <canvas width={isMobile() ? 200 : 350} height={isMobile() ? 200 : 350}
                    className={"z-50 bg-white rounded-full border-4 border-slate-300"} ref={canvasRef}/>
            <img className={"absolute scale-70 md:scale-110 "} src={"/assets/image-removebg-preview.png"}/>
        </div>
    )
};