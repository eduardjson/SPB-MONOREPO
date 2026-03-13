"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../entities/user/user.service");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const prisma_1 = require("../prisma");
const uuid_1 = require("uuid");
const dayjs_1 = __importDefault(require("dayjs"));
const config_1 = require("@nestjs/config");
let AuthService = AuthService_1 = class AuthService {
    userService;
    jwtService;
    prismaService;
    configService;
    logger = new common_1.Logger(AuthService_1.name);
    constructor(userService, jwtService, prismaService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.prismaService = prismaService;
        this.configService = configService;
    }
    register(registerDto) {
        const createUserDto = registerDto;
        const { repeatPassword: _, ...withoutRepeatPassword } = createUserDto;
        const createdUser = this.userService.create(withoutRepeatPassword);
        return createdUser;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userService.findByEmail(email).catch((err) => {
            this.logger.error(err);
            return null;
        });
        if (!user) {
            const textError = 'Неверные логин или пароль';
            this.logger.error(textError);
            throw new common_1.UnauthorizedException(textError);
        }
        const isPasswordMatch = user?.password
            ? (0, bcrypt_1.compareSync)(password, user.password)
            : false;
        if (!isPasswordMatch) {
            const textError = 'Неверные логин или пароль';
            this.logger.error(textError);
            throw new common_1.UnauthorizedException(textError);
        }
        return this.generateTokens(user);
    }
    async logout(refreshToken) {
        const existingToken = await this.prismaService.token.findUnique({
            where: { token: refreshToken },
        });
        if (existingToken) {
            await this.prismaService.token.delete({
                where: { token: refreshToken },
            });
        }
        return true;
    }
    async refreshTokens(refreshToken) {
        const token = await this.prismaService.token
            .delete({
            where: { token: refreshToken },
        })
            .catch(() => null);
        const today = (0, dayjs_1.default)();
        if (!token)
            return;
        const exDate = (0, dayjs_1.default)(token.expires);
        const isExpired = exDate.isBefore(today);
        if (!token || isExpired) {
            throw new common_1.UnauthorizedException();
        }
        const user = await this.userService.findById(token.userId);
        if (!user) {
            return;
        }
        return this.generateTokens(user);
    }
    generateTokens = async (user) => {
        const accessToken = this.jwtService.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
        });
        const refreshToken = await this.getRefreshToken(user.id);
        const tokens = { accessToken, refreshToken };
        return tokens;
    };
    getRefreshToken = async (userId) => {
        const currentDate = (0, dayjs_1.default)();
        this.logger.error(this.configService.get('TOKEN_EXPIRATION_UNIT'));
        const expireDate = currentDate.add(1, 'month').toDate();
        return this.prismaService.token.create({
            data: {
                token: (0, uuid_1.v4)(),
                expires: expireDate,
                userId,
            },
        });
    };
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        prisma_1.PrismaService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map