import { HttpStatus } from '@nestjs/common';
import { ApiException } from 'src/app/exceptions/api.exception';

export class SurgerySolicitationErrors extends ApiException {
  static createEntity(): ApiException {
    return new SurgerySolicitationErrors(
      {
        code: 'SYSOL-001',
        message:
          'An error occurred while trying to create surgery solicitation, please try again later',
        shortMessage: 'createEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static readEntity(): ApiException {
    return new SurgerySolicitationErrors(
      {
        code: 'SYSOL-002',
        message:
          'An error occurred while trying to read surgery solicitation, please try again later',
        shortMessage: 'readEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static updateEntity(): ApiException {
    return new SurgerySolicitationErrors(
      {
        code: 'SYSOL-003',
        message:
          'An error occurred while trying to update surgery solicitation, please try again later',
        shortMessage: 'updateEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static deleteEntity(): ApiException {
    return new SurgerySolicitationErrors(
      {
        code: 'SYSOL-004',
        message:
          'An error occurred while trying to delete surgery solicitation, please try again later',
        shortMessage: 'deleteEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static notFound(): ApiException {
    return new SurgerySolicitationErrors(
      {
        code: 'SYSOL-005',
        message: 'The surgery solicitation was not found',
        shortMessage: 'surgerySolicitationNotFound',
      },
      HttpStatus.NOT_FOUND,
    );
  }

  static list(): ApiException {
    return new SurgerySolicitationErrors(
      {
        code: 'SYSOL-006',
        message:
          'An error occurred while trying to list surgery solicitation, please try again later',
        shortMessage: 'listEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
  static alreadyExists(): ApiException {
    return new SurgerySolicitationErrors(
      {
        code: 'SYSOL-007',
        message: 'One surgery solicitation with this code already exists',
        shortMessage: 'solicitationAlreadyExists',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
