import { Injectable } from '@angular/core'

import { inversifyContainer } from '../../../global/inversify/repository.config'
import { TYPES } from '../../../global/inversify/types'
import { SideMenuRepository } from '../../repository/sideMenuRepository'
import SideMenuBo from '../../entities/sideMenuBo'


@Injectable()
export class GetItemsSideMenuInteractor {

  invoke(): Promise<Array<SideMenuBo>> {

    var sideMenuRepository = inversifyContainer.get<SideMenuRepository>(TYPES.SideMenuRepository)

    return sideMenuRepository.getSideMenuItems()
  }

}
