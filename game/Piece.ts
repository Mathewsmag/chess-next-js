export class Piece {
  constructor(
    type: "King" | "Rook" | "Knight" | "Bishop" | "Pawn" | "Queen",
    color: "W" | "B"
  ) {
    this.type = type;
    this.color = color;
    const multiplier = color === "W" ? 1 : -1;
    if (type === "King") this.importance = 1000 * multiplier;
    else if (type === "Queen") this.importance = 500 * multiplier;
    else if (type === "Knight") this.importance = 30 * multiplier;
    else if (type === "Rook") this.importance = 15 * multiplier;
    else if (type === "Bishop") this.importance = 15 * multiplier;
    else this.importance = 50 * multiplier;
  }

  type: String = "";
  color: String = "";
  canMoveTo: boolean[][] = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];
  numOfMoves: number = 0;
  turnsSinceLastMove: number = 0;
  importance: number;
}
