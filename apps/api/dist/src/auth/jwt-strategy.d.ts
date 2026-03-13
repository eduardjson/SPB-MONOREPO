import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/entities/user/user.service';
import { JWTPayload } from './interfaces/interfaces';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userService;
    private readonly logger;
    constructor(configService: ConfigService, userService: UserService);
    validate(JWTPayload: JWTPayload): Promise<import("./interfaces/interfaces").IAccessToken>;
}
export {};
