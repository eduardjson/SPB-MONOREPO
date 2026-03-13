import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Prisma } from 'generated/prisma/client';
import { Server, Socket } from 'socket.io';
import * as types from 'src/types';
import { ChatService } from './chat.service';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly appService;
    constructor(appService: ChatService);
    server: Server;
    handleMessagesGet(): Promise<void>;
    handleMessagesClear(): Promise<void>;
    handleMessagePost(payload: Prisma.MessageCreateInput & {
        attachments?: any[];
    }): Promise<void>;
    handleMessagePut(payload: types.MessageUpdatePayload): Promise<void>;
    handleMessageDelete(payload: Prisma.MessageWhereUniqueInput): Promise<void>;
    afterInit(server: Server): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
}
