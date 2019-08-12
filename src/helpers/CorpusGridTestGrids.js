import { CorpusGridTileType } from '../contracts/enums/CorpusGridType';

export const GetGridWithOneTileTestV1 = () => {
    const tiles = [];

    tiles.push({
        rotation: 1,
        displayRotation: 1,
        tileType: CorpusGridTileType.TwoLine60,
        connections: [false, true, false, true, false, false]
    });
    tiles.push({
        rotation: 4,
        displayRotation: 4,
        tileType: CorpusGridTileType.OneLine,
        connections: [false, false, false, false, true, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.OneLine,
        connections: [true, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });

    return tiles;
}
export const GetGridWithOneTileTestV2 = () => {
    const tiles = [];

    tiles.push({
        rotation: 2,
        displayRotation: 2,
        tileType: CorpusGridTileType.TwoLine30,
        connections: [false, false, true, true, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.TwoLine30,
        connections: [true, true, false, false, false, false]
    });
    tiles.push({
        rotation: 4,
        displayRotation: 4,
        tileType: CorpusGridTileType.OneLine,
        connections: [false, false, false, false, true, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });

    return tiles;
}

export const GetGridWithOneTileTestV3 = () => {
    const tiles = [];

    tiles.push({
        rotation: 1,
        displayRotation: 1,
        tileType: CorpusGridTileType.OneLine,
        connections: [false, true, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.OneLine,
        connections: [true, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });

    return tiles;
}

export const GetGridWithOneTileTestV4 = () => {
    const tiles = [];

    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ThreeLineTree,
        connections: [true, true, true, false, false, false]
    });
    tiles.push({
        rotation: 4,
        displayRotation: 4,
        tileType: CorpusGridTileType.OneLine,
        connections: [false, false, false, false, true, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.OneLine,
        connections: [true, false, false, false, false, false]
    });
    tiles.push({
        rotation: 5,
        displayRotation: 5,
        tileType: CorpusGridTileType.OneLine,
        connections: [false, false, false, false, false, true]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });
    tiles.push({
        rotation: 0,
        displayRotation: 0,
        tileType: CorpusGridTileType.ZeroLine,
        connections: [false, false, false, false, false, false]
    });

    return tiles;
}


/* Old codes */


// const isTileValid = (tiles, currentTileIndex, rules) => {
//     const tile = tiles[currentTileIndex];
//     if (tile == null) return false;

//     if (tile.tileType === 0) {
//         return true;
//     }

//     const tileRules = rules[tile.tileType];
//     if (tileRules == null) return false;

//     for (let tileConnectionIndex = 0; tileConnectionIndex < tile.connections.length; tileConnectionIndex++) {
//         const tileConnection = tile.connections[tileConnectionIndex];
//         if (tileConnection === false) continue;

//         const connectionPath = tileRules.connectionPaths[tileConnectionIndex];
//         if (connectionPath == null) return false;

//         const connectedTile = tiles[connectionPath];
//         if (connectedTile == null) return false;

//         const connectedTileRules = rules[connectedTile.tileType];
//         if (connectedTileRules == null) return false;

//         let connectedTileConnectsBack = false;
//         for (let connectedTileConnIndex = 0; connectedTileConnIndex < connectedTile.connections.length; connectedTileConnIndex++) {
//             const connectedTileConnection = connectedTile.connections[connectedTileConnIndex];
//             if (connectedTileConnection === false) continue;

//             const connectionPath = connectedTileRules.connectionPaths[connectedTileConnIndex];
//             if (connectionPath == null) return false;

//             if (connectionPath === currentTileIndex) {
//                 connectedTileConnectsBack = true;
//                 break;
//             }
//         }

//         if (!connectedTileConnectsBack) return false;
//     }

//     return true;
// }