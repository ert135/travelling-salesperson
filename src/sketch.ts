export const p5Wrapper = function( sketch: p5 ) {

    let cities = [];
    let citiesLength = 5;

    //dirty swap
    function swap(array, firstIndex, secondIndex) {
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }

    function calculateDistance(points) {

    }

    sketch.setup = function() {
        sketch.createCanvas(800, 800);
        for (var i = 0; i < citiesLength; i++) {
            let vector = sketch.createVector(sketch.random(800), sketch.random(800));
            cities[i] = vector;
        }
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
    };
};
