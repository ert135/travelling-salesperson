import Grid from './grid';

export const p5Wrapper = function( sketch: p5 ) {

    let grid: Grid;

    sketch.setup = function() {
        sketch.createCanvas(800, 800)
        grid = new Grid(sketch, 800, 800, 16);
    };

    sketch.draw = function() {
        grid.drawGrid();
    };
};
