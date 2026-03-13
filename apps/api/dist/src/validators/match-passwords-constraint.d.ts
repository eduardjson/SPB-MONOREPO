import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class MatchPasswordsConstraint implements ValidatorConstraintInterface {
    validate(repeatPassword: string, validationArguments: ValidationArguments): boolean;
    defaultMessage(): string;
}
