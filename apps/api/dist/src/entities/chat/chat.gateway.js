"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const client_1 = require("../../../generated/prisma/client");
const socket_io_1 = require("socket.io");
const types = __importStar(require("../../types"));
const CLIENT_URI = 'http://localhost:5173';
const chat_service_1 = require("./chat.service");
const users = {};
let ChatGateway = class ChatGateway {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    server;
    async handleMessagesGet() {
        const messages = await this.appService.getMessages();
        this.server.emit('messages', messages);
    }
    async handleMessagesClear() {
        await this.appService.clearMessages();
    }
    async handleMessagePost(payload) {
        const createdMessage = await this.appService.createMessage(payload);
        this.server.emit('message:post', createdMessage);
        this.handleMessagesGet();
    }
    async handleMessagePut(payload) {
        const updatedMessage = await this.appService.updateMessage(payload);
        this.server.emit('message:put', updatedMessage);
        this.handleMessagesGet();
    }
    async handleMessageDelete(payload) {
        const removedMessage = await this.appService.removeMessage(payload);
        this.server.emit('message:delete', removedMessage);
        this.handleMessagesGet();
    }
    afterInit(server) {
        console.log('WebSocket Gateway initialized');
    }
    handleConnection(client, ...args) {
        const userName = client.handshake.query.userName;
        const socketId = client.id;
        users[socketId] = userName;
        client.broadcast.emit('log', `${userName} connected`);
    }
    handleDisconnect(client) {
        const socketId = client.id;
        const userName = users[socketId];
        delete users[socketId];
        client.broadcast.emit('log', `${userName} disconnected`);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('messages:get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessagesGet", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('messages:clear'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessagesClear", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message:post'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessagePost", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message:put'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessagePut", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message:delete'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessageDelete", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: CLIENT_URI,
        },
        serveClient: false,
        namespace: 'chat',
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map