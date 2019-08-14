
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("cars")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("cars").insert([
                {
                    id: 1,
                    vin: "2G1115SL8F9123851",
                    make: "Corvette",
                    model: "Stingray",
                    mileage: 5762,
                    transmissionType: "manual",
                    titleStatus: "clean"
                },
                {
                    id: 2,
                    vin: "7521asdtr3asd654",
                    make: "Ford",
                    model: "Galaxy 500",
                    mileage: 62,
                    transmissionType: "automatic",
                    titleStatus: "clean"
                },
                {
                    id: 3,
                    vin: "SHSRD68526U403706",
                    make: "Pontiac",
                    model: "GTO",
                    mileage: 9762,
                    transmissionType: "automatic",
                    titleStatus: "clean"
                },
                {
                    id: 4,
                    vin: "1GKS2MEF6DR292542",
                    make: "Ford",
                    model: "Mustang Shelby GT",
                    mileage: 999,
                    transmissionType: "manual",
                    titleStatus: "salvage"
                }
            ]);
        });
};
