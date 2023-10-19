import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { IPaginationOutput } from 'src/domain/interfaces/common/pagination.interface';
import { IPresenter } from 'src/domain/interfaces/common/presenter.interface';

export class SurgerySolicitationPresenter
  implements IPresenter<SurgerySolicitationEntity>
{
  present(
    surgerySolicitation: SurgerySolicitationEntity,
  ): SurgerySolicitationEntity {
    return {
      ...surgerySolicitation,
    };
  }

  list(
    solicitationList: IPaginationOutput<SurgerySolicitationEntity>,
  ): IPaginationOutput<SurgerySolicitationEntity> {
    const { data, meta } = solicitationList;

    return {
      data: data.map((surgerySolicitation) =>
        this.present(surgerySolicitation),
      ),
      meta,
    };
  }
}
