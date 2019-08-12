export const CorpusGridTileType = {
    ZeroLine: 0,
    OneLine: 1,
    TwoLine30: 2,
    TwoLine60: 3,
    TwoLine90: 4,
    ThreeLineTree: 5,
    ThreeLineY: 6,
    ThreeLineYInverse: 7,
    ThreeLineEqual: 8,
    FourLineK: 9,
    FourLineTree: 10,
    FourLineX: 11,
    FiveLine: 12,
    SixLine: 13,
}

export const getCorpusGridTileImage = (enumNum) => {
    switch (enumNum) {
        case 0: return 'ZeroLine.png';
        case 1: return 'OneLine.png';
        case 2: return 'TwoLine30.png';
        case 3: return 'TwoLine60.png';
        case 4: return 'TwoLine90.png';
        case 5: return 'ThreeLineTree.png';
        case 6: return 'ThreeLineY.png';
        case 7: return 'ThreeLineYInverse.png';
        case 8: return 'ThreeLineEqual.png';
        case 9: return 'FourLineK.png';
        case 10: return 'FourLineTree.png';
        case 11: return 'FourLineX.png';
        case 12: return 'FiveLine.png';
        case 13: return 'SixLine.png';
        default: return 'ZeroLine.png';
    }
}

export const CorpusGridTiles = [
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 1,
        tileType: CorpusGridTileType.OneLine,
        connections: [true, false, false, false, false, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 2,
        tileType: CorpusGridTileType.TwoLine30,
        connections: [true, true, false, false, false, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 2,
        tileType: CorpusGridTileType.TwoLine60,
        connections: [true, false, true, false, false, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 2,
        tileType: CorpusGridTileType.TwoLine90,
        connections: [true, false, false, true, false, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 3,
        tileType: CorpusGridTileType.ThreeLineTree,
        connections: [true, true, true, false, false, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 3,
        tileType: CorpusGridTileType.ThreeLineY,
        connections: [true, true, false, true, false, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 3,
        tileType: CorpusGridTileType.ThreeLineYInverse,
        connections: [true, false, false, true, false, true]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 3,
        tileType: CorpusGridTileType.ThreeLineEqual,
        connections: [true, false, true, false, true, false,]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 4,
        tileType: CorpusGridTileType.FourLineK,
        connections: [true, true, true, true, false, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 4,
        tileType: CorpusGridTileType.FourLineTree,
        connections: [true, true, true, false, true, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 4,
        tileType: CorpusGridTileType.FourLineX,
        connections: [true, true, false, true, true, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 5,
        tileType: CorpusGridTileType.FiveLine,
        connections: [true, true, true, true, true, false]
    },
    {
        rotation: 0,
        displayRotation: 0,
        numberOfRequiredConnections: 6,
        tileType: CorpusGridTileType.SixLine,
        connections: [true, true, true, true, true, true]
    }
];


export const CorpusGridRules = {
    SevenTile: [
        {
            maxConnections: 3,
            possibleConnections: [false, true, true, true, false, false],
            connectionPaths: [null, 1, 3, 2, null, null]
        },
        {
            maxConnections: 3,
            possibleConnections: [false, false, true, true, true, false],
            connectionPaths: [null, null, 4, 3, 0, null]
        },
        {
            maxConnections: 3,
            possibleConnections: [true, true, true, false, false, false],
            connectionPaths: [0, 3, 5, null, null, null]
        },
        {
            maxConnections: 6,
            possibleConnections: [true, true, true, true, true, true],
            connectionPaths: [1, 4, 6, 5, 2, 0]
        },
        {
            maxConnections: 3,
            possibleConnections: [false, false, false, true, true, true],
            connectionPaths: [null, null, null, 6, 3, 1]
        },
        {
            maxConnections: 3,
            possibleConnections: [true, true, false, false, false, true],
            connectionPaths: [3, 6, null, null, null, 2]
        },
        {
            maxConnections: 3,
            possibleConnections: [true, false, false, false, true, true],
            connectionPaths: [4, null, null, null, 5, 3]
        },
    ],
    NineteenTile: [
        {
            maxConnections: 3
        },
        {
            maxConnections: 4
        },
        {
            maxConnections: 3
        },
        {
            maxConnections: 6
        },
        {
            maxConnections: 3
        },
        {
            maxConnections: 3
        },
        {
            maxConnections: 3
        },
    ]
}