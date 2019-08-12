import React from 'react';
import { CodeGenerator, IsSolved, RotateTile } from '../../helpers/CorpusGridHelper';
import { CorpusGridRules, getCorpusGridTileImage } from '../../contracts/enums/CorpusGridType';

export class Grid extends React.Component {

    constructor() {
        super();

        const gridRules = CorpusGridRules.SevenTile;
        const tileArray = CodeGenerator(7, gridRules);
        this.state = {
            tileArray,
            gridRules,
            gridClass: '',
            isGridSolved: false
        }
    }

    contextMenu = (index) => (e) => {
        e.preventDefault();
        this.rotate(index, -1);
    }

    onTileClick = (index) => () => {
        this.rotate(index, 1);
    }

    rotate = (index, modifier) => {
        if (this.state.tileArray[index].tileType === 0) return;
        if (this.state.isGridSolved) return;

        this.setState(prevState => {
            let tileArray = prevState.tileArray;
            tileArray[index] = RotateTile(tileArray[index], modifier);

            let gridClass = prevState.gridClass;
            const isGridSolved = IsSolved(this.state.tileArray, this.state.gridRules);
            if (isGridSolved) {
                gridClass = 'invisible';
                setTimeout(() => {
                    this.setState(() => {
                        return {
                            gridClass,
                        };
                    })
                }, 250);
                setTimeout(() => {
                    this.setState(prevState => {
                        const tileArray = CodeGenerator(7, prevState.gridRules);
                        return {
                            tileArray,
                            isGridSolved: false
                        };
                    })
                }, 750);
                setTimeout(() => {
                    this.setState(() => {
                        return {
                            gridClass: ''
                        };
                    })
                }, 1000);
            }
            return {
                tileArray,
                isGridSolved
            };
        })
    }


    render() {
        return (
            <div className="grid-container">
                <div className={`corpus grid ${this.state.gridClass}`}>
                    {
                        this.state.tileArray.map((item, index) => {
                            return (
                                <div className={`item ${index}`} key={`gridItem-${item.tileType}-${index}`}>
                                    <div className="hexagon"
                                        onClick={this.onTileClick(index)}
                                        onContextMenu={this.contextMenu(index)}
                                        style={{ transform: `skewY(-30deg) rotate(${(item.displayRotation + 1) * 60}deg)` }}>
                                        <img
                                            className="hexagon-image"
                                            draggable="false"
                                            src={`/assets/img/corpus/${getCorpusGridTileImage(item.tileType)}`} alt={item.tileType}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}