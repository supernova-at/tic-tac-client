/*
 * TODO: implement this class.
 */
export default class Player {
  static get name () {
    return `Gold Team Rules`;
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

  static makeMove(myToken, gameState) {
    // If center is open...place there.
    if (gameState[4] === '-') {
      return 4;
    }


    // If index has enemy token, block left > down > diagonal
    const column1 = [0, 3, 6];
    const column2 = [1, 4, 7];
    const column3 = [2, 5, 8];

    const h1 = [0, 1, 2]
    const h2 = [3, 4, 5]
    const h3 = [6, 7, 8]

    const dg1 = [0, 4, 8];
    const dg2 = [2, 4 ,6];

    const columns = [ column1, column2, column3, dg2, dg1, h1, h2, h3 ];

    const myTokens = gameState.filter(token => token === myToken);

    for(let i; i < columns.length; i++) {
      let counter++;
      let missingIndex = -1;
      let opponent = 0;

      columns[i].forEach(index => {
        if( gameState[index] === myToken ) {
          counter++;
        } else if ( gameState[index] !== '-' ) {
          opponent++;
        } else {
          missingIndex = index;
        }
      })

      if( counter === 2 || opponent === 2 ) {
        if( gameState[missingIndex] === '-') {
          return missingIndex
        }
      }
    }

    return gameState.indexOf('-');
  }
};
