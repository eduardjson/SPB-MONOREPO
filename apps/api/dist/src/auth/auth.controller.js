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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("./dto/login.dto");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const dayjs_1 = __importDefault(require("dayjs"));
const cookies_decorator_1 = require("../decorators/cookies.decorator");
const REFRESH_TOKEN = 'refreshToken';
let AuthController = AuthController_1 = class AuthController {
    authService;
    logger = new common_1.Logger(AuthController_1.name);
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        const createdUser = this.authService.register(registerDto);
        if (!createdUser) {
            const textError = 'Ошибка при создании пользователя!';
            this.logger.error(textError);
            throw new common_1.BadRequestException(textError);
        }
        return createdUser;
    }
    async login(loginDto, res) {
        const tokens = await this.authService.login(loginDto);
        if (!tokens) {
            const textError = 'Ошибка при попытке входа!';
            this.logger.error(textError);
        }
        this.setRefreshTokenToCookies(tokens, res);
    }
    async logout(refreshToken, res) {
        try {
            if (!refreshToken) {
                throw new common_1.UnauthorizedException('No valid Refresh Token found in cookie');
            }
            await this.authService.logout(refreshToken);
            res.clearCookie(REFRESH_TOKEN, { path: '/' });
            return res
                .status(common_1.HttpStatus.OK)
                .send({ message: 'Вы успешно вышли из системы!' });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.UNAUTHORIZED).send({ error: err.message });
        }
    }
    async refreshTokens(refreshToken, res) {
        if (!refreshToken) {
            throw new common_1.UnauthorizedException();
        }
        const tokens = await this.authService.refreshTokens(refreshToken);
        if (!tokens) {
            throw new common_1.UnauthorizedException();
        }
        this.setRefreshTokenToCookies(tokens, res);
    }
    setRefreshTokenToCookies(tokens, res) {
        if (!tokens) {
            throw new common_1.UnauthorizedException();
        }
        const { token, expires } = tokens.refreshToken;
        const cookieExpTime = (0, dayjs_1.default)(expires).toDate();
        const cookieValue = token;
        const cookieOptions = {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            path: '/',
            expires: cookieExpTime,
        };
        res.cookie(REFRESH_TOKEN, cookieValue, cookieOptions);
        res.status(common_1.HttpStatus.CREATED).json({ accessToken: tokens.accessToken });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.Post)('logout'),
    __param(0, (0, cookies_decorator_1.Cookies)(REFRESH_TOKEN)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('refresh-tokens'),
    __param(0, (0, cookies_decorator_1.Cookies)(REFRESH_TOKEN)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
exports.AuthController = AuthController = AuthController_1 = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map