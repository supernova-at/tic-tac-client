/*
 * TODO: implement this class.
 */
export const PlayerClass = class Player {
  static name = 'ANDY';

  /**
   * IMPLEMENT: Given the current game state, return back
   * your desired move.
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
  static makeMove(gameState) {
    // Just pick the first open square.
    return gameState.indexOf('-');
  }
};
