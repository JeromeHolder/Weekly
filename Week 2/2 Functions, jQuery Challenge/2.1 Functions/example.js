//courtesy our friends at Kelloggs (j/k)

let crispix = { sugar : 6, starch : 9, fibre : 1 };
let frootLoops = { sugar : 14, starch : 6, fibre : 0.5 };
let frostedFlakes = { sugar : 11, starch : 7, fibre : 0.4 };

//1. add theh sugar-to-carb ratio

//ratio = sugar / (sugar + starch + fibre) 

/*
the following is inefficient! not DRY
crispix.ratio = crispix.sugar / (crispix.sugar + crispix.starch + crispix.fibre);
frootLoops.ratio = frootLoops.sugar / (frootLoops.sugar + frootLoops.starch + frootLoops.fibre);
frostedFlakes.ratio = frostedFlakes.sugar / (frostedFlakes.sugar + frostedFlakes.starch + frostedFlakes.fibre);
*/

function calculateRatio(cereal) {
    cereal.ratio = cereal.sugar / (cereal.sugar + cereal.starch + cereal.fibre);
}

//crispix has no ratio property
calculateRatio(crispix);
//crispix has a ratio property

calculateRatio(frootLoops);
calculateRatio(frostedFlakes);

//2. developer cereals have sugar-to-carb ratio > 0.5. Is Crispix one?

