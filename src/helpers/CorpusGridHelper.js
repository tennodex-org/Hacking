import { CorpusGridTileType, CorpusGridTiles } from '../contracts/enums/CorpusGridType';
import { GetGridWithOneTileTestV4 } from './CorpusGridTestGrids';

export const CodeGenerator = (gridSize, rules) => {
    return GridTilesGenerator(gridSize, rules);
    //return GridTilesGeneratorTest(gridSize, rules);
}
export const GridTilesGeneratorTest = () => {
    let tiles = GetGridWithOneTileTestV4();
    return tiles;
}

export const GridTilesGenerator = (gridSize, rules) => {
    let tiles = [];
    let canBeSolved = false;
    do {
        tiles = GetGridWithOneTile(gridSize, rules);
        tiles = addTilesToInitialGrid(tiles, rules);

        canBeSolved = IsSolved(tiles, rules);
        if (!canBeSolved) {
            const problemTiles = getProblemTiles(tiles, rules);
            for (let problemTileIndex = 0; problemTileIndex < problemTiles.length; problemTileIndex++) {
                const problemTile = problemTiles[problemTileIndex];

                const problemTileMustBeConnectedToIndexs = [];
                const tilesToBeVerified = getListOfTilesToBeVerified(tiles, rules);
                for (let tilesToBeVerifiedIndex = 0; tilesToBeVerifiedIndex < tilesToBeVerified.length; tilesToBeVerifiedIndex++) {
                    const tileToBeVerified = tilesToBeVerified[tilesToBeVerifiedIndex];
                    if (tileToBeVerified && tileToBeVerified.tileIndex === problemTile) {
                        problemTileMustBeConnectedToIndexs.push(tileToBeVerified.connectedTo);
                    }
                }
                console.log('specialRulesForNewTile');
                const specialRulesForNewTile = getSpecialRulesForTile(tiles, problemTile, problemTileMustBeConnectedToIndexs, rules);
                const newTile = GetTileForGridItem(specialRulesForNewTile)
                tiles[problemTile] = newTile;
            }
            canBeSolved = IsSolved(tiles, rules);
        }
    } while (canBeSolved === false);

    return randomiseTiles(tiles);
    //return tiles;
}

const getSpecialRulesForTile = (tiles, selectedTileIndex, connectedToTileIndexes, rules) => {
    const availableTileIndexes = [];
    for (let tileIndex = 0; tileIndex < tiles.length; tileIndex++) {
        const tile = tiles[tileIndex];
        if (tile.tileType === 0) continue;

        availableTileIndexes.push(tileIndex);
    }

    let newMaxConnections = 0;
    let newAvailableTileConnPaths = [];
    let newAvailableTilePossibleConns = [];
    const availableTileRules = Object.assign({}, rules[selectedTileIndex]);
    for (let availTileConnPathIndex = 0; availTileConnPathIndex < availableTileRules.connectionPaths.length; availTileConnPathIndex++) {
        const availTileConnPath = availableTileRules.connectionPaths[availTileConnPathIndex];

        //if (firstTileIndex === availTileConnPath || availableTiles.includes(availTileConnPath)) {
        //if (firstTileIndex === availTileConnPath) {
        //if (connectedToTileIndexes.includes(availTileConnPath)) {
        if (connectedToTileIndexes.includes(availTileConnPath) || availableTileIndexes.includes(availTileConnPath)) {
            newMaxConnections = newMaxConnections + 1;
            newAvailableTileConnPaths.push(availTileConnPath);
            newAvailableTilePossibleConns.push(true);
        } else {
            newAvailableTileConnPaths.push(null);
            newAvailableTilePossibleConns.push(false);
        }
    }
    availableTileRules.maxConnections = newMaxConnections;
    availableTileRules.connectionPaths = newAvailableTileConnPaths;
    availableTileRules.possibleConnections = newAvailableTilePossibleConns;

    return availableTileRules;
}

const addTilesToInitialGrid = (tiles, rules) => {
    const newTiles = Object.assign([], tiles);

    let firstTileIndex = null;
    for (let tileSearchIndex = 0; tileSearchIndex < tiles.length; tileSearchIndex++) {
        const tile = tiles[tileSearchIndex];
        if (tile.tileType !== 0) {
            firstTileIndex = tileSearchIndex;
            break;
        }
    }

    let availableTiles = getAvailableTileIndexs(tiles, rules);

    for (let availTileIndex = 0; availTileIndex < availableTiles.length; availTileIndex++) {
        const availableTileIndex = availableTiles[availTileIndex];

        const connectedToTileIndexes = [firstTileIndex];
        const availableTileRules = getSpecialRulesForTile(tiles, availableTileIndex, connectedToTileIndexes, rules);
        const newTile = GetTileForGridItem(availableTileRules)
        newTiles[availableTileIndex] = newTile;
    }

    return newTiles;
}

export const IsSolved = (tiles, rules) => {
    const problemTiles = getProblemTiles(tiles, rules);

    return problemTiles.length === 0;
}

const getListOfTilesToBeVerified = (tiles, rules) => {
    const tilesToBeVerified = [];

    for (let tileIndex = 0; tileIndex < tiles.length; tileIndex++) {
        const tile = tiles[tileIndex];
        if (tile.tileType === 0) continue;

        const tileRules = rules[tileIndex];
        if (tileRules == null) continue;

        for (let tileConnIndex = 0; tileConnIndex < tile.connections.length; tileConnIndex++) {
            const connection = tile.connections[tileConnIndex];
            if (!connection) continue;

            const connectedPath = tileRules.connectionPaths[tileConnIndex];
            if (connectedPath == null) continue; //Tile is currently connected to nothing

            tilesToBeVerified.push({
                tileIndex: connectedPath,
                connectedTo: tileIndex
            });
        }
    }

    return tilesToBeVerified;
}

export const GetGridWithOneTile = (gridSize, rules) => {

    const startingTile = Math.floor(Math.random() * gridSize);
    const ruleForStartingTile = Object.assign({}, rules[startingTile]);

    let possibleTile = GetTileForGridItem(ruleForStartingTile, rules);

    const tiles = [];
    for (let tileNumber = 0; tileNumber < gridSize; tileNumber++) {
        if (tileNumber === startingTile) {
            tiles.push(possibleTile);
        } else {
            tiles.push({
                rotation: 0,
                displayRotation: 0,
                tileType: CorpusGridTileType.ZeroLine,
                connections: [false, false, false, false, false, false]
            });
        }
    }

    return tiles;
}

export const GetTileForGridItem = (rulesForTheTile) => {

    let possibleTile = CorpusGridTiles[0];
    let meetsRules = false;
    let numberOfLoops = 0;
    do {
        numberOfLoops++;
        meetsRules = false;
        const availableTiles = CorpusGridTiles.filter(gt => gt.numberOfRequiredConnections <= rulesForTheTile.maxConnections && gt.tileType !== CorpusGridTileType.ZeroLine);
        const gridTileIndex = Math.floor(Math.random() * availableTiles.length);
        const gridTile = availableTiles[gridTileIndex];
        if (gridTile == null) {
            continue;
        }

        for (let possibleRotation = 0; possibleRotation < 6; possibleRotation++) {
            if (possibleRotation !== 0) {
                possibleTile = RotateTile(possibleTile);
            } else {
                possibleTile = Object.assign({}, gridTile);
            }
            meetsRules = tileFits(rulesForTheTile, possibleTile);
            if (meetsRules) {
                break;
            }
        }
    } while (!meetsRules && numberOfLoops < 10);

    return possibleTile;
}

const randomiseTiles = (tiles) => {
    const newTiles = [];
    for (let tileIndex = 0; tileIndex < tiles.length; tileIndex++) {
        let newRotatedTile = tiles[tileIndex];
        if (tiles[tileIndex].tileType !== 0) {
            const numberOfRotations = Math.floor(Math.random() * 6) + 1
            for (let rotationIndex = 0; rotationIndex < numberOfRotations; rotationIndex++) {
                newRotatedTile = RotateTile(newRotatedTile);
            }
        }

        newTiles.push(newRotatedTile);
    }

    return newTiles;
}

const getProblemTiles = (tiles, rules) => {
    const tilesToBeVerified = getListOfTilesToBeVerified(tiles, rules);

    const problemTiles = [];
    for (let tilesToBeVerifiedIndex = 0; tilesToBeVerifiedIndex < tilesToBeVerified.length; tilesToBeVerifiedIndex++) {
        const verify = tilesToBeVerified[tilesToBeVerifiedIndex];
        const tile = tiles[verify.tileIndex];
        const tileRules = rules[verify.tileIndex];
        const isTileConnected = tileIsConnectedTo(tile, tileRules, verify.connectedTo);
        if (!isTileConnected) {
            problemTiles.push(verify.tileIndex);
        }
    }

    for (let tileIndex = 0; tileIndex < tiles.length; tileIndex++) {
        const tile = tiles[tileIndex];
        const doesTileFit = tileFits(rules[tileIndex], tile);

        if (doesTileFit) continue;
        if (problemTiles.includes(tileIndex)) continue;

        problemTiles.push(tileIndex);
    }

    return problemTiles;
}

const getAvailableTileIndexs = (tiles, rules) => {
    const availableTiles = [];
    for (let tileIndex = 0; tileIndex < tiles.length; tileIndex++) {
        const tile = tiles[tileIndex];
        if (tile.tileType !== 0) {
            const possiblePaths = rules[tileIndex];
            for (let tileConnections = 0; tileConnections < tile.connections.length; tileConnections++) {
                const tileConnection = tile.connections[tileConnections];
                if (!tileConnection) continue;

                const possiblePath = possiblePaths.possibleConnections[tileConnections];
                if (!possiblePath) continue;

                const connectionPath = possiblePaths.connectionPaths[tileConnections];
                if (connectionPath === null) continue;

                availableTiles.push(connectionPath);
            }
        }
    }

    return availableTiles;
}

export const RotateTile = (possibleTile, modifier = 1) => {
    const newRotation = possibleTile.rotation + modifier;
    const newConnections = modifier === 1
        ? RotateTileConnectionsClockwise(possibleTile.connections)
        : RotateTileConnectionsCounterClockwise(possibleTile.connections);
    return {
        rotation: newRotation >= 6 ? 0 : newRotation,
        displayRotation: possibleTile.displayRotation + modifier,
        tileType: possibleTile.tileType,
        connections: newConnections
    };
}

export const RotateTileConnectionsClockwise = (connections) => {
    const newConnections = [];
    newConnections.push(connections[connections.length - 1]);
    for (let possibilityIndex = 0; possibilityIndex < connections.length - 1; possibilityIndex++) {
        newConnections.push(connections[possibilityIndex]);
    }
    return newConnections;
}

export const RotateTileConnectionsCounterClockwise = (connections) => {
    const newConnections = []
    for (let possibilityIndex = 1; possibilityIndex < connections.length; possibilityIndex++) {
        newConnections.push(connections[possibilityIndex]);
    }
    newConnections.push(connections[0]);
    return newConnections;
}

const tileIsConnectedTo = (tile, tileRules, connectedToIndex) => {
    for (let tileRuleIndex = 0; tileRuleIndex < tileRules.connectionPaths.length; tileRuleIndex++) {
        const connectionPath = tileRules.connectionPaths[tileRuleIndex];
        if (connectionPath == null) continue;

        const isCurrentlyInThatPosition = tile.connections[tileRuleIndex];
        if (!isCurrentlyInThatPosition) continue;

        if (connectionPath === connectedToIndex) {
            return true;
        }
    }

    return false;
}

const tileFits = (tileRules, possibleTile) => {
    let tileDoesFits = true;
    for (let tileIndex = 0; tileIndex < possibleTile.connections.length; tileIndex++) {
        const hasConnection = possibleTile.connections[tileIndex];
        if (!hasConnection) continue;

        const possibleConnection = tileRules.possibleConnections[tileIndex];
        if (possibleConnection === false) {
            tileDoesFits = false;
        }
    }

    return tileDoesFits;
}
