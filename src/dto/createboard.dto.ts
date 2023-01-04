import { BoardStatus } from '@prisma/client';

export class CreateBoardDto {
  description: string;
  title: string;
  status: BoardStatus;
  makerId: number;
}
