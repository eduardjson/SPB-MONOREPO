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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma");
const bcrypt_1 = require("bcrypt");
let UserService = UserService_1 = class UserService {
    prismaService;
    logger = new common_1.Logger(UserService_1.name);
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createUserDto) {
        const hashedPassword = this.hashPassword(createUserDto.password);
        const userData = { ...createUserDto, password: hashedPassword };
        const existingUserByUsername = await this.findByUsername(createUserDto.username);
        if (existingUserByUsername) {
            const message = 'Пользователь с таким никнеймом уже существует!';
            this.logger.error(message);
            throw new common_1.ConflictException(message);
        }
        const existingUserByEmail = await this.findByEmail(createUserDto.email);
        if (existingUserByEmail) {
            const message = 'Пользователь с таким email уже существует!';
            this.logger.error(message);
            throw new common_1.ConflictException(message);
        }
        const existingUserByPhone = await this.findByPhone(createUserDto.phone);
        if (existingUserByPhone) {
            const message = 'Пользователь с таким номером телефона  уже существует!';
            this.logger.error(message);
            throw new common_1.ConflictException(message);
        }
        const newUser = await this.prismaService.user
            .create({
            data: userData,
        })
            .catch((error) => {
            this.logger.error('Ошибка при создании нового пользователя!', error);
            throw new common_1.BadRequestException('Ошибка при создании нового пользователя!');
        });
        const { password: _1, ...withoutPassword } = newUser;
        return withoutPassword;
    }
    findAll() {
        return this.prismaService.user.findMany();
    }
    async findAllWithoutPasswords() {
        try {
            const usersWithPasswords = await this.prismaService.user.findMany();
            const usersWithoutPasswords = usersWithPasswords.map(({ password, ...rest }) => rest);
            return usersWithoutPasswords;
        }
        catch (error) {
            this.logger.error('Ошибка при получении списка пользователей:', error);
            throw new Error('Ошибка при получении списка пользователей.');
        }
    }
    findById(id) {
        return this.prismaService.user
            .findUnique({
            where: { id },
        })
            .then((foundedUser) => {
            if (!foundedUser) {
                return null;
            }
            return foundedUser;
        })
            .catch((error) => {
            this.logger.error('Пользователь по ID не найден', error);
            throw new common_1.NotFoundException('Пользователь по ID не найден');
        });
    }
    async findByUsername(username) {
        return this.prismaService.user
            .findUnique({
            where: { username },
        })
            .then((foundedUser) => {
            if (!foundedUser) {
                return null;
            }
            return foundedUser;
        })
            .catch((error) => {
            this.logger.error('Пользователь по никнейму не найден', error);
            throw new common_1.NotFoundException('Пользователь по никнейму не найден');
        });
    }
    async findByEmail(email) {
        return this.prismaService.user
            .findUnique({
            where: { email },
        })
            .then((foundedUser) => {
            if (!foundedUser) {
                return null;
            }
            return foundedUser;
        })
            .catch((error) => {
            this.logger.error('Пользователь по email не найден', error);
            throw new common_1.NotFoundException('Пользователь по email не найден');
        });
    }
    async findByPhone(phone) {
        return this.prismaService.user
            .findUnique({
            where: { phone },
        })
            .then((foundedUser) => {
            if (!foundedUser) {
                return null;
            }
            return foundedUser;
        })
            .catch((error) => {
            this.logger.error('Пользователь по номеру телефона не найден', error);
            throw new common_1.NotFoundException('Пользователь по номеру телефона не найден');
        });
    }
    update(id, updateUserDto) {
        return this.prismaService.user.update({
            data: updateUserDto,
            where: { id },
        });
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    hashPassword(password) {
        return (0, bcrypt_1.hashSync)(password, (0, bcrypt_1.genSaltSync)(10));
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map