function Cereal(sugar, protein, fibre) {
    this.sugar = sugar;
    this.protein = protein;
    this.fibre = fibre;
}

Cereal.prototype.calculate = function(quantity) {
    return [
        (this.sugar * quantity),
        (this.protein * quantity),
        (this.fibre * quantity)
    ];
};

const cereals = {
    cheerios : new Cereal(8, 1.4, 2.4),
    miniwheats : new Cereal(10, 2, 4.3)
};

$('#calculator').submit(function(e) {
    e.preventDefault();
    var cerealChosen = $('select').val();
    var quantity = $('#serving').val();
    var result = cereals[cerealChosen].calculate(quantity);
    $(".item#sugar p").html(result[0]);
    $(".item#protein p").html(result[1]);
    $(".item#fibre p").html(result[2]);
});