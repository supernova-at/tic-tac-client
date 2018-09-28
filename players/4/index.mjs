/*
 * TODO: implement this class.
 */
export default class Player {
  static get name () {
    return `Team 4 rules`;
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
  static makeMove(token, gameState) {
    let move;

    let antitoken;
    if (token === 'X') {
      antitoken = 'O'
    } else {
      antitoken = 'X'
    }

    gameState.forEach((item, index) => {
      if (gameState[index] === '-') {
        neighborObject[index].forEach(neighbor => {
          if (gameState[neighbor] == token) {
            move = Number(index)
          }
        })
      }
    })

    if (checkForDiagonalVic(antitoken, gameState)) {
      move = checkForDiagonalVic(antitoken, gameState)
    }
    if (checkForHorizVic(antitoken, gameState)) {
      move = checkForHorizVic(antitoken, gameState)
    }
    if (checkForVertVic(antitoken, gameState)) {
      move = checkForVertVic(antitoken, gameState)
    }

    if (checkForDiagonalVic(token, gameState)) {
      move = checkForDiagonalVic(token, gameState)
    }
    if (checkForHorizVic(token, gameState)) {
      move = checkForHorizVic(token, gameState)
    }
    if (checkForVertVic(token, gameState)) {
      move = checkForVertVic(token, gameState)
    }

    return move || gameState.indexOf('-');
  }
};

const neighborObject = {
  '0': ['1','3','4'],
  '1': ['0', '2', '3', '4', '5'],
  '2': ['1', '4', '5'],
  '3': ['0', '1', '4', '6', '7'],
  '4': ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
  '5': ['1', '2', '4', '7', '8'],
  '6': ['3', '4', '7'],
  '7': ['3', '4', '5', '6', '8'],
  '8': ['4', '5', '7'],
}

// tokenObject = {
//   '0': 0,
//   '1': 0,
//   '2': 0,
//   '3': 0,
//   '4': 0,
//   '5': 0,
//   '6': 0,
//   '7': 0,
//   '8': 0,
// }

function checkForDiagonalVic(token, gameState) {
  if (gameState[0] === token && gameState[4] === token) {
    return 8;
  }
  if (gameState[0] === token && gameState[8] === token) {
    return 4;
  }
  if (gameState[4] === token && gameState[8] === token) {
    return 0;
  }

  if (gameState[2] === token && gameState[4] === token) {
    return 6;
  }
  if (gameState[2] === token && gameState[6] === token) {
    return 4;
  }
  if (gameState[4] === token && gameState[6] === token) {
    return 2;
  }
}

function checkForHorizVic(token, gameState) {
  if (gameState[0] === token && gameState[1] === token) {
    return 2;
  }
  if (gameState[0] === token && gameState[2] === token) {
    return 1;
  }
  if (gameState[1] === token && gameState[2] === token) {
    return 0;
  }

  if (gameState[3] === token && gameState[4] === token) {
    return 5;
  }
  if (gameState[3] === token && gameState[5] === token) {
    return 4;
  }
  if (gameState[4] === token && gameState[5] === token) {
    return 3;
  }

  if (gameState[6] === token && gameState[7] === token) {
    return 8;
  }
  if (gameState[6] === token && gameState[8] === token) {
    return 7;
  }
  if (gameState[7] === token && gameState[8] === token) {
    return 6;
  }
}

function checkForVertVic(token, gameState) {
  if (gameState[0] === token && gameState[3] === token) {
    return 6;
  }
  if (gameState[0] === token && gameState[6] === token) {
    return 3;
  }
  if (gameState[3] === token && gameState[6] === token) {
    return 0;
  }

  if (gameState[1] === token && gameState[4] === token) {
    return 7;
  }
  if (gameState[1] === token && gameState[7] === token) {
    return 4;
  }
  if (gameState[4] === token && gameState[7] === token) {
    return 1;
  }

  if (gameState[2] === token && gameState[5] === token) {
    return 8;
  }
  if (gameState[5] === token && gameState[8] === token) {
    return 2;
  }
  if (gameState[2] === token && gameState[8] === token) {
    return 5;
  }
}