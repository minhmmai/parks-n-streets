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
        this.age = () => {
            const currentYear = new Date().getFullYear();
            return (currentYear - this.buildYear);
        };
        this.treeDensity = () => [this.name, (this.treeQuantity / this.area)];
    }
};

class Street extends TownElement {
    // Inherit TownElement class
    constructor(name, buildYear, length, size = 'Normal') {
        super(name, buildYear);
        this.length = length; // In kilometre
        this.size = size;
    }
};

let carltonGarden, federationSquare, brimBankReserve, bourkeSt, wheatWlk, sunshineBlvd, taylorAve;

carltonGarden = new Park('Carlton Garden', 1950, 1200, 100);
federationSquare = new Park('Federation Square', 1970, 600, 50);
brimBankReserve = new Park('Brimbank Reserve', 1990, 850, 300);

parks = [carltonGarden, federationSquare, brimBankReserve];

bourkeSt = new Street('Bourke Street', 1920, 15, 'Huge');
wheatWlk = new Street('Wheat Walk', 1970, 0.7, 'Tiny');
sunshineBlvd = new Street('Sunshine Boulevard', 1965, 2, 'Big');
taylorAve = new Street('Taylor Avenue', 1920, 30);

streets = [bourkeSt, wheatWlk, sunshineBlvd, taylorAve];

reportTreeDensities = (arr) => {
    arr.forEach(el => {
        console.log(`${el.name} has tree density of ${el.treeQuantity / el.area} per acre.`);
    });
}

reportAvgAge = (arr) => {
    let ages = [];
    arr.forEach(el => ages.push(el.age()));
    let agesSum = 0;
    for (const age of ages) {
        agesSum += age;
    }
    (agesSum % ages.length) > 0
        ? console.log(`The average age of all parks is ${(agesSum / ages.length).toFixed(2)} years.`)
        : console.log(`The average age of all parks is ${(agesSum / ages.length)} years.`)
}

reportParkTrees = (arr) => {
    let mostTrees = 0;
    let parkName = '';
    arr.forEach(el => {
        if (el.treeQuantity > mostTrees) {
            mostTrees = el.treeQuantity;
            parkName = el.name;
        }
    })
    console.log(`${parkName} has the most trees with ${mostTrees} trees.`);
}

reportStreetLength = (arr) => {
    let lengths = [];
    arr.forEach(el => {
        lengths.push(el.length);
    });
    let lengthsSum = 0;
    for (const length of lengths) {
        lengthsSum += length;
    }
    console.log(`Total length of all streets is ${lengthsSum} kms.`);
    console.log(`Average length of all streets is ${(lengthsSum / lengths.length).toFixed(2)} kms.`);
}

reportStreetSize = (arr) => {
    arr.forEach(el => {
        console.log(`${el.name}, built in ${el.buildYear}, is a ${el.size} street.`);
    })
}

reportTreeDensities(parks);
reportAvgAge(parks);
reportParkTrees(parks);
reportStreetLength(streets);
reportStreetSize(streets);
