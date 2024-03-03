interface Hero {
    title: string;
    _firstn?: string;
}


interface Superhero extends Hero {
    power: number;
}

let commonman: Hero = {
    title: "Bruce"
};

function addpower(power: number) {
    return function (hero: Hero): Superhero {
        return {
            title: hero.title,
            power: power
        };
    };
}

commonman = addpower(7)(commonman);

console.log(commonman);
