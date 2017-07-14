import { injectable } from 'inversify'
//import 'reflect-metadata'
//import { TYPES } from '../../domain/repository/types'

import SideMenuBo from '../../domain/entities/sideMenuBo'
import { SideMenuRepository } from '../../domain/repository/sideMenuRepository'
import { GetSideMenuMock } from './datasource/GetSideMenuMock'

@injectable()
export class SideMenuRepositoryMock implements SideMenuRepository {

    public getSideMenuItems2() {
        return 'side menu items!'
    }

    public getSideMenuItems(): Array<SideMenuBo> {
      var service = new GetSideMenuMock()
      
      var items : Array<SideMenuBo> = service.getSideMenu()

      return items
    }
}
