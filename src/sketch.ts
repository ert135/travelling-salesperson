export const p5Wrapper = function( sketch: p5 ) {

    let cities: Array<p5.Vector> = [];
    let citiesLength = 5;
    let recordDistance = 0;

    //dirty swap
    function swap(array, firstIndex, secondIndex) {
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }

    function calculateDistance(points: Array<p5.Vector>) {
        return points.reduce((totalDistance: number, currentPoint: p5.Vector, index: number, pointArray: Array<p5.Vector>) => {
            if(pointArray[index+1]){
                return totalDistance + sketch.dist(currentPoint.x, currentPoint.y, pointArray[index+1].x, pointArray[index+1].y)
            }
           return null;
        }, 0)
    };

    sketch.setup = function() {
        sketch.createCanvas(800, 800);
        for (var i = 0; i < citiesLength; i++) {
            let vector = sketch.createVector(sketch.random(800), sketch.random(800));
            cities[i] = vector;
        }

        recordDistance = calculateDistance(cities);
    };

    sketch.draw = function() {
        sketch.background(0);
        cities.forEach((city) => {
            sketch.ellipse(city.x, city.y, 5, 5);
        });

        sketch.stroke(255);
        sketch.noFill();
        sketch.beginShape();
            cities.forEach((city) => {
                sketch.vertex(city.x, city.y)
            });
        sketch.endShape();

        let index = Math.floor(sketch.random(cities.length));
        let j = Math.floor(sketch.random(cities.length));

        swap(cities, index, j);

        var d = calculateDistance(cities);

        if (d < recordDistance) {
            recordDistance = d;
        }
    };
};
