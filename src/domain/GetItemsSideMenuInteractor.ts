import { Injectable } from '@angular/core'
import { myContainer } from './repository/inversify.config'
import { TYPES } from './repository/types'

import SideMenuBo from './entities/sideMenuBo'
import { SideMenuRepository } from './repository/sideMenuRepository'


@Injectable()
export class GetItemsSideMenuInteractor {

  invoke() {

    var sideMenuRepository = myContainer.get<SideMenuRepository>(TYPES.SideMenuRepository)

    return sideMenuRepository.getSideMenuItemsBo()
  }

}
