import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, User } from '@prisma/client';
import { CreateBoardDto } from 'src/dto/createboard.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/common/decorator/get-user.decorator';
@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}
  private logger = new Logger(BoardsController.name);

  @Get()
  async getAllBoard(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }
  @Get(':id')
  async getOneBoard(@Param('id') id: number): Promise<Board | null> {
    const reuse = this.boardService.getOneBoards(id);
    if (!reuse) {
      throw new NotFoundException(`The Board ${id}is not found`);
    }
    return reuse;
  }
  @Delete(':id')
  async getDeleteBoard(@Param('id') id: number): Promise<Board | null> {
    return this.boardService.getDeleteBoards(id);
  }
  @Post()
  async CreateBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    return this.boardService.CreateBoards(createBoardDto, user);
  }
  @Put(':id')
  async getUpdateBoard(
    @Param('id') id: number,
    @Body() createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    return this.boardService.getUpdateBoards(id, createBoardDto);
  }
}
