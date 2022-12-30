import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Board } from '@prisma/client';
import { CreateBoardDto } from 'src/dto/createboard.dto';

@Injectable()
export class BoardsService {
  private logger = new Logger(BoardsService.name);
  constructor(private prismaService: PrismaService) {}

  async getAllBoards(): Promise<Board[]> {
    return this.prismaService.board.findMany();
  }

  async getOneBoards(id: string): Promise<Board | null> {
    return this.prismaService.board.findUniqueOrThrow({
      where: { id: String(id) },
    });
  }

  async getDeleteBoards(id: string): Promise<Board | null> {
    return this.prismaService.board.delete({ where: { id: String(id) } });
  }

  async CreateBoards(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.prismaService.board.create({ data: createBoardDto });
  }

  async getUpdateBoards(
    id: string,
    createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    return this.prismaService.board.update({
      where: { id: String(id) },
      data: createBoardDto,
    });
  }
}
