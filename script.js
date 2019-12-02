class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
};

class Park extends TownElement {
    // Inherit TownElement class
    constructor(name, buildYear, treeQuantity, area) {
        super(name, buildYear);
        this.treeQuantity = treeQuantity;
        this.area = area; // In acre, 1 acre is 4046.86 square metres
    }
};

class Street extends TownElement {
    // Inherit TownElement class
    constructor (name, buildYear, length, size = 'Normal') {
        super(name, buildYear);
        this.length = length; // In kilometre
        this.size = size;
    }
};

let parks, streets, treeDensity, age, carltonGarden, federationSquare, brimBankReserve, bourkeSt, wheatWlk, sunshineBlvd; taylorAve;

parks = new Map();
streets = new Map();

treeDensity = (treeQuantity, area) => (treeQuantity / area).toFixed(2);
age = buildYear => {
    const currentYear = new Date().getFullYear();
    return Math.floor(currentYear - buildYear);
}

carltonGarden  = new Park('Carlton Garden', 1950, 1200, 100);
federationSquare  = new Park('Federation Square', 1970, 1200, 50);
brimBankReserve  = new Park('Brimbank Reserve', 1990, 1200, 300);

bourkeSt = new Street('Bourke Street', 1920, 15, 'Huge');
wheatWlk = new Street('Wheat Walk', 1970, 0.7, 'Tiny');
sunshineBlvd = new Street('Sunshine Boulevard', 1965, 2, 'Big');
taylorAve = new Street('Taylor Avenue', 1920, 15, 'Huge');

parks.set(carltonGarden.name, carltonGarden);
parks.set(federationSquare.name, federationSquare);
parks.set(brimBankReserve.name, brimBankReserve);

streets.set(bourkeSt.name, bourkeSt);
streets.set(wheatWlk.name, wheatWlk);
streets.set(sunshineBlvd.name, sunshineBlvd);
streets.set(taylorAve.name, taylorAve);

