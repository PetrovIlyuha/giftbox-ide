export type CellTypes = 'code' | 'text';
export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}
export type MoveDirection = 'up' | 'down';
