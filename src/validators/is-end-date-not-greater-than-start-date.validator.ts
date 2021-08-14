import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint()
class IsEndDateNotGreaterThanStartDateConstraint implements ValidatorConstraintInterface {
    validate(end_date: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return new Date(validationArguments.object['start_date']) < new Date(end_date);
    }
}

export function IsEndDateNotGreaterThanStartDate(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsEndDateNotGreaterThanStartDateConstraint,
      });
    };
  }
  