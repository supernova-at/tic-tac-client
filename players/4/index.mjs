const winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

export default class Player {
  static get name () {
    return `Tic Tac Schmoes`;
  }

  /**
   * IMPLEMENT: Given the current game state, return back
   * your desired move.
   *
   * @param {string} token Your team's token (X or O).
   *
   * @param {Array} gameState The current state of the game.
   *  The array [-, X, O, X, O, -, -, -, X] represents the following:
   *  - | X | O
   * -----------
   *  X | O | -
   * -----------
   *  - | - | X
   *
   * @returns {Number} The index into the array where you wish to place your mark:
   *  0 | 1 | 2
   * -----------
   *  3 | 4 | 5
   * -----------
   *  6 | 7 | 8
   */

  async _takeCenter (token, gameState) {
    if (gameState[4] === '-') {
      return 4;
    }
  }

  _findTokenIndexes (token, gameState) {
    return gameState
      .map((actualToken, index) => actualToken === token ? index : null)
      .filter(index => index !== null);
  }

  async _findBlock (token, gameState) {
    const opponentMoves = this._findTokenIndexes(token === 'X' ? 'O' : 'X', gameState);
    const closeCombos = winningMoves.map(moves => {
      const movesCopy = [...moves];
      let counter = moves.reduce(ACCUMULATORMOTHAFUCKA, indexValue) => {
        if (moves.indexOf(opponentMoves) !== -1) {
          ACCUMULATORMOTHAFUCKA++;
        }

        return ACCUMULATORMOTHAFUCKA;
      }, 0);

      if (counter === 2) {
        opponentMoves.forEach(indexValue => {
          copyMoves.splice(copyMoves.indexOf(indexValue), 1);
        });

        return copyMoves[0];
      }
    });
  }

  async _findCorner (token, gameState) {
    const opponentMoves = this._findTokenIndexes(token === 'X' ? 'O' : 'X', gameState);
    const corners = [0, 2, 6, 8].map(corner => {
      switch(corner) {
        case 0:
          if (opponentMoves.indexOf(8) === -1) {
            return 8;
          }
          break;
        case 8:
          if (opponentMoves.indexOf(0) === -1) {
            return 0;
          }
          break;
        case 2:
          if (opponentMoves.indexOf(6) === -1) {
            return 6;
          }
          break;
        case 6:
          if (opponentMoves.indexOf(2) === -1) {
            return 2;
          }
      }

      if (
        opponentMoves.indexOf(0) === -1
        && opponentMoves.indexOf(2) === -1
        && opponentMoves.indexOf(6) === -1
        && opponentMoves.indexOf(8) === -1
      ) {
        return 2;
      }
    });
  }

  async _findRandom (token, gameState) {
    const freeSpaces = gameState
      .map((token, index) => token === '-' ? index : null)
      .filter(index => index !== null);

    let rand = Math.floor(Math.random() * freeSpaces.length);
    if (rand === freeSpaces.length) {
      rand = freeSpaces.length - 1;
    }

    return freeSpaces[rand];
  }

  async _findWinningMove (token, gameState) {
    const opponentMoves = this._findMoves(token);
    const possibleWins = winningMoves.reduce((ACCUMULATORBITCH, ))
  }

  async _chainMoves (token, moves, gameState) {
    return moves.reduce((ACCUMULATOR, move) => {
      if (ACCUMULATOR) {
        return ACCUMULATOR;
      }

      return this[move](gameState);
    }, null);
  }

  static makeMove(token, gameState) {
    // Just pick the first open square.
    return this.chainMoves(token, [
      '_findWinningMove',
      '_findBlock',
      '_findCenter',
      '_findCorner',
      '_findRandom',
    ], gameState);
  }
};
