import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Board, User } from '@prisma/client';
import { CreateBoardDto } from 'src/dto/createboard.dto';

@Injectable()
export class BoardsService {
  private logger = new Logger(BoardsService.name);
  constructor(private prismaService: PrismaService) {}

  async getAllBoards(): Promise<Board[]> {
    return this.prismaService.board.findMany();
  }

  async getOneBoards(id: number): Promise<Board | null> {
    return this.prismaService.board.findUniqueOrThrow({
      where: { id: Number(id) },
    });
  }

  async getDeleteBoards(id: number): Promise<Board | null> {
    return this.prismaService.board.delete({ where: { id: Number(id) } });
  }

  async CreateBoards(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    return this.prismaService.board.create({
      data: createBoardDto,
    });
  }

  async getUpdateBoards(
    id: number,
    createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    return this.prismaService.board.update({
      where: { id: Number(id) },
      data: createBoardDto,
    });
  }
}
