import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from '@prisma/client';
@Controller('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Get()
  async getAllBoard(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }
  @Get(':id')
  async getOneBoard(@Param('id') id: string): Promise<Board | null> {
    return this.boardService.getOneBoards(id);
  }
  @Delete(':id')
  async getDeleteBoard(@Param('id') id: string): Promise<Board | null> {
    return this.boardService.getDeleteBoards(id);
  }
  @Post()
  async CreateBoard(@Body() data: Board): Promise<Board> {
    return this.boardService.CreateBoards(data);
  }
  @Put(':id')
  async getUpdateBoard(
    @Param('id') id: string,
    @Body() data: Board,
  ): Promise<Board> {
    return this.boardService.getUpdateBoards(id, data);
  }
}
