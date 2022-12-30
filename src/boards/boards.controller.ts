import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Logger,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from '@prisma/client';
import { CreateBoardDto } from 'src/dto/createboard.dto';
@Controller('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}
  private logger = new Logger(BoardsController.name);

  @Get()
  async getAllBoard(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }
  @Get(':id')
  async getOneBoard(@Param('id') id: string): Promise<Board | null> {
    const reuse = this.boardService.getOneBoards(id);
    return reuse;
  }
  @Delete(':id')
  async getDeleteBoard(@Param('id') id: string): Promise<Board | null> {
    return this.boardService.getDeleteBoards(id);
  }
  @Post()
  async CreateBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.CreateBoards(createBoardDto);
  }
  @Put(':id')
  async getUpdateBoard(
    @Param('id') id: string,
    @Body() createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    return this.boardService.getUpdateBoards(id, createBoardDto);
  }
}
