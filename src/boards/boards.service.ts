import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Board } from '@prisma/client';

@Injectable()
export class BoardsService {
  constructor(private prismaService: PrismaService) {}

  async getAllBoards(): Promise<Board[]> {
    return this.prismaService.board.findMany();
  }

  async getOneBoards(id: string): Promise<Board | null> {
    return this.prismaService.board.findUnique({ where: { id: String(id) } });
  }

  async getDeleteBoards(id: string): Promise<Board | null> {
    return this.prismaService.board.delete({ where: { id: String(id) } });
  }

  async CreateBoards(data: Board): Promise<Board> {
    return this.prismaService.board.create({ data: data });
  }

  async getUpdateBoards(id: string, data: Board): Promise<Board> {
    return this.prismaService.board.update({
      where: { id: String(id) },
      data: data,
    });
  }
}
