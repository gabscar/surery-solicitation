import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export function RequiredTakeIfPage(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'requiredTakeIfPage',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(page: any, args: ValidationArguments) {
          const { object } = args;
          return page && object['take'];
        },
        defaultMessage() {
          return `If 'page' is sent, 'take' is required.`;
        },
      },
    });
  };
}
