const COLORS = {
    'border': '#52594e',
    'grass': '#92d14f',
    'mountain': '#948b52',
    'water': '#588ad0',
    'dragonRadar': 'rgba(255, 255, 255, 0.5)',
    'dragonBall': '#f39e00',
    'goku': '#000',
    'masterKamiIsland': '#c0504f',
}

const WIDTH = HEIGHT = 840;

const map = [
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "grass", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "grass", "grass"],
    ["mountain", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "mountain", "water", "water", "water", "water", "grass", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "mountain", "mountain"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "mountain", "mountain", "mountain", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "mountain", "grass", "mountain", "mountain", "mountain"],
    ["grass", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "mountain", "grass", "grass", "mountain", "grass", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "mountain", "grass", "grass", "mountain", "grass", "grass", "mountain", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "mountain", "mountain"],
    ["grass", "mountain", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "mountain", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "grass"],
    ["grass", "mountain", "mountain", "grass", "mountain", "grass", "grass", "mountain", "grass", "mountain", "grass", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "mountain"],
    ["grass", "grass", "grass", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "mountain", "grass", "mountain", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "mountain", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "grass", "mountain", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "mountain", "mountain"],
    ["grass", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "mountain", "mountain", "grass", "water", "water", "water", "water", "water", "water", "grass", "mountain", "grass", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "grass", "mountain", "grass", "mountain", "grass", "mountain", "mountain", "grass", "mountain", "mountain"],
    ["grass", "grass", "mountain", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "grass", "grass", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["mountain", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "mountain", "mountain", "grass", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "mountain", "grass"],
    ["water", "water", "water", "water", "water", "water", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "mountain", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "grass"],
    ["water", "water", "water", "water", "water", "water", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "mountain", "grass", "mountain", "grass"],
    ["water", "water", "water", "water", "water", "grass", "grass", "mountain", "mountain", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "water", "water", "water", "water", "water", "grass", "mountain", "mountain", "mountain", "mountain"],
    ["water", "water", "water", "mountain", "grass", "grass", "grass", "mountain", "grass", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "grass", "mountain", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass"],
    ["water", "water", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "grass", "mountain", "mountain", "water", "water", "water", "water", "grass", "mountain", "mountain", "grass"],
    ["grass", "grass", "mountain", "mountain", "grass", "grass", "grass", "mountain", "grass", "mountain", "mountain", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "grass", "mountain", "water", "water", "water", "water", "water", "water", "grass", "mountain", "grass"],
    ["mountain", "mountain", "mountain", "grass", "grass", "mountain", "mountain", "mountain", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "mountain", "mountain"],
    ["grass", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "grass", "grass"],
    ["mountain", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "mountain", "mountain", "mountain", "mountain", "water", "water", "water", "water", "water", "water", "water", "water"],
    ["grass", "grass", "grass", "grass", "mountain", "grass", "grass", "water", "water", "water", "water", "mountain", "mountain", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "mountain", "water", "water", "water", "water", "water", "water", "water", "water"],
    ["grass", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "water", "water", "water", "grass", "grass", "grass", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "grass", "grass", "grass", "grass", "grass", "mountain", "water", "water", "water", "grass", "grass", "water", "water", "water"],
    ["grass", "mountain", "grass", "grass", "grass", "grass", "mountain", "water", "water", "water", "water", "mountain", "mountain", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "grass", "grass", "grass", "water", "water"],
    ["grass", "mountain", "grass", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "mountain", "grass", "mountain", "grass", "mountain", "grass", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "water", "water"],
    ["grass", "grass", "grass", "grass", "mountain", "grass", "grass", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "mountain", "mountain", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "mountain", "grass", "grass", "grass", "mountain", "mountain", "grass", "mountain", "grass", "mountain", "grass", "water", "water"],
    ["water", "grass", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass", "mountain", "grass", "water", "water"],
    ["water", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "grass", "mountain", "mountain", "grass", "water", "water", "water", "grass", "grass", "mountain", "mountain", "grass", "grass", "water", "water", "water", "water", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "water", "water"],
    ["water", "water", "water", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "mountain", "grass", "grass", "water", "water", "water", "mountain", "grass", "grass", "mountain", "mountain", "grass", "water", "water", "water", "water", "grass", "mountain", "mountain", "mountain", "mountain", "mountain", "grass", "mountain", "mountain", "grass", "grass", "grass", "water", "water", "water", "water"],
    ["water", "water", "water", "grass", "mountain", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "mountain", "grass", "grass", "mountain", "grass", "water", "water", "water", "water", "water", "water", "mountain", "grass", "grass", "grass", "grass", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water"],
    ["water", "water", "water", "water", "water", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "mountain", "mountain", "mountain", "mountain", "mountain", "mountain", "water", "water", "water", "water", "mountain", "mountain", "mountain", "mountain"],
    ["grass", "water", "water", "water", "water", "mountain", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "mountain", "mountain", "grass", "grass", "grass"],
    ["grass", "grass", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "grass", "grass", "mountain", "grass"],
    ["grass", "grass", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "mountain", "grass"],
    ["grass", "water", "water", "water", "water", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "mountain", "mountain", "grass", "grass", "grass"],
    ["water", "water", "water", "water", "water", "grass", "mountain", "water", "water", "water", "water", "water", "water", "water", "water", "grass", "grass", "mountain", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "grass", "grass", "water", "water", "water", "water", "water", "grass", "grass", "grass", "water", "water", "water", "mountain", "mountain", "mountain", "mountain"],
    ["water", "water", "water", "water", "water", "grass", "grass", "grass", "water", "water", "water", "water", "water", "water", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "grass", "mountain", "mountain", "water", "water", "water", "water", "grass", "mountain", "grass", "mountain", "grass", "water", "water", "water", "water", "water", "water"],
    ["water", "water", "water", "grass", "grass", "grass", "grass", "grass", "water", "water", "water", "water", "water", "mountain", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "grass", "grass", "grass", "mountain", "grass", "water", "water", "grass", "mountain", "grass", "mountain", "grass", "water", "water", "water", "water", "water", "water"],
    ["water", "water", "water", "grass", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "water", "grass", "mountain", "grass", "grass", "mountain", "grass", "mountain", "mountain", "mountain", "mountain", "grass", "mountain", "mountain", "mountain", "grass", "mountain", "grass", "water", "water", "grass", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass", "water", "water", "water"],
    ["water", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "grass", "grass", "grass", "mountain", "mountain", "grass", "mountain", "mountain", "grass", "grass", "mountain", "grass", "water", "water"],
    ["water", "grass", "mountain", "mountain", "grass", "grass", "mountain", "mountain", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "mountain", "mountain", "grass", "grass", "grass", "mountain", "mountain", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "grass", "grass", "grass", "grass", "mountain", "grass", "grass", "grass", "water", "water"]
];

const dragonBalls = [
    {
        'coordinates': {
            x: 6,
            y: 0,
        },
        'collected': false,
    },
    {
        'coordinates': {
            x: 5,
            y: 1,
        },
        'collected': false,
    },
    {
        'coordinates': {
            x: 4,
            y: 2,
        },
        'collected': false,
    },
    {
        'coordinates': {
            x: 3,
            y: 3,
        },
        'collected': false,
    },
    {
        'coordinates': {
            x: 2,
            y: 4,
        },
        'collected': false,
    },
    {
        'coordinates': {
            x: 1,
            y: 5,
        },
        'collected': false,
    },
    {
        'coordinates': {
            x: 0,
            y: 6,
        },
        'collected': false,
    },
];

const masterKamiIsland = {
    coordinates: {
        x: 19,
        y: 19,
    }
}

const goku = {
    x: masterKamiIsland.coordinates.x,
    y: masterKamiIsland.coordinates.y,
    vx: .10,
    vy: .10,
    forward: true,
    return: false,
    draw() {
        fill(COLORS['goku'])
        noStroke();
        rect(this.x * 20, this.y * 20, 20, 20);
    }
}

const dragonRadar = {
    x: masterKamiIsland.coordinates.x -3,
    y: masterKamiIsland.coordinates.y -3,
    vx: .10,
    vy: .10,
    forward: true,
    draw() {
        fill(COLORS['dragonRadar'])
        stroke(color(255, 0, 0))
        rect(this.x * 20, this.y * 20, 140, 140);
    }
}


function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    for (let x = 0; x < map.length; x++) {
        for (let y = 0; y < map[x].length; y++) {
            fill(COLORS[map[x][y]]);

            if (x === masterKamiIsland.coordinates.x && y === masterKamiIsland.coordinates.x) {
                fill(COLORS['masterKamiIsland']);
            }

            stroke(COLORS['border']);
            rect(x * 20, y * 20, 20, 20);
        }
    }

    dragonRadar.draw();
    goku.draw();

    const path = new Path2D();
    path.rect(dragonRadar.x * 20, dragonRadar.y * 20, 140, 140);

    dragonBalls.forEach((dragonBall) => {
        const { x, y } = dragonBall.coordinates;

        if (!dragonBall.collected) {
            if (drawingContext.isPointInPath(path, x * 20, y * 20)) {
                fill(COLORS['dragonBall']);
                noStroke();
                rect(x * 20, y * 20, 20, 20);
            }

            if (Math.round(goku.x * 20) === x * 20 && Math.round(goku.y * 20) === y * 20) {
                dragonBall.collected = true;
            }
        }
    });

    if (goku.forward) {
        goku.x += .10;
        dragonRadar.x += .10;
    } else {
        goku.x -= .10;
        dragonRadar.x -= .10;
    }

    if (goku.x + .10 > (WIDTH / 20) - 1) {
        if (goku.y >= 41 || goku.return) {
            goku.y -= 1;
            goku.return = true;
            dragonRadar.y -= 1;
        } else {
            goku.y += 1;
            dragonRadar.y += 1;
        }

        goku.forward = false;
    }

    if (!goku.forward && goku.x - .10 < 0) {
        if (goku.return) {
            goku.y -= 1;
            dragonRadar.y -= 1;
        } else {
            goku.y += 1;
            dragonRadar.y += 1;
        }

        goku.forward = true;
    }

    if (goku.x + goku.vx > WIDTH / 20 || goku.x + goku.vx < 0) {
        dragonRadar.x = 0;
        dragonRadar.y += 1;

        goku.x = 3;
        goku.y += 1;
    }

    if (goku.y + goku.vy > HEIGHT / 20 || goku.y + goku.vy < 0) {
        goku.x = 3;
        goku.y = 3;

        dragonRadar.x = 0;
        dragonRadar.y = 0;
    }
}