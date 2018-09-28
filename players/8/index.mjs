/*
 * TODO: implement this class.
 */
export default class Player {
  static get name () {
    return `Andy is Awesomest`;
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
    // Just pick the last open square.
    return gameState.reverse().indexOf('-');
  }
};
