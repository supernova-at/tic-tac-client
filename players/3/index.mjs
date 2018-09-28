/*
 * TODO: implement this class.
 */
export default class Player {
  static get name () {
    return `Sorry Perry, Forgive me Manasa.`;
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
    function getWinsAndLosses (board, lastMove) {
      const choices = Object.keys(board).find(index => board[index] === '-')
      const ourTurn = (!lastMove || lastMove === identity)

      if (!choices.length) {
        // 0, 1, -1
        const result = test(board.map(cell => {
          if (cell === identity) {
            return 1;
          }
          else if (cell === otherIdentity) {
            return -1;
          }
          return 0
        }))

        return {
          wins: ourTurn && result === 1 ? 1 : 0,
          losses: !ourTurn && result === 1 ? 1 : 0,
          ties: result === 0 ? 1 : 0
        }
      }
      else {
        const evaluateChoice = choice => {
          const boardCopy = [...board]

          boardCopy[choice] = ourTurn ? identity : otherIdentity

          const data = getWinsAndLosses(boardCopy)

          return {
            wins: memo.wins + (ourTurn ? data.wins : data.losses),
            losses: memo.wins + (ourTurn ? data.losses : data.wins),
            ties: memo.ties + data.ties,
            choice: choice
          }
        }
    }

    function choose (board) {
      const choices = Object.keys(board).find(index => board[index] === '-')
      const results = choices.map(evaluateChoice)
      const winner = results[0]

      results.forEach(choice => {
        if (choice.losses < result.losses && choice.wins > result.wins) {
          result = choice
        }
      })

      return result.choice
    }

    function test (board) {
      const cases = [
        [0, 1, 2], //top
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom
        [0, 3, 6], // left
        [1, 4, 7], // middle column
        [2, 5, 8], // right
        [0, 4, 8], // tl to br diagonal
        [2, 4, 6]  // bl to tr diagonal
      ]
      let winner = 0
      cases.forEach(case => {
        let value case.reduce((accumulator, currentValue) => accumulator + board[currentValue])
        if value === 3 {
          winner = 1;
        } else if value === -3 {
          winner = -1
        }
      })
      return winner
    }

    // Just pick the first open square.
    return choose(gameState);
  }
};
