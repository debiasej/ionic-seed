import { Injectable } from '@angular/core'
import { inversifyContainer } from '../../repository/inversify.config'
import { TYPES } from '../../repository/types'

import SideMenuBo from '../../entities/sideMenuBo'
import { SideMenuRepository } from '../../repository/sideMenuRepository'


@Injectable()
export class GetItemsSideMenuInteractor {

  invoke() {

    var sideMenuRepository = inversifyContainer.get<SideMenuRepository>(TYPES.SideMenuRepository)

    return sideMenuRepository.getSideMenuItems()
  }

}
