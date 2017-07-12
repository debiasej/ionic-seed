import { injectable } from 'inversify'
//import 'reflect-metadata'
//import { TYPES } from '../../domain/repository/types'

import { SideMenuBo } from '../../domain/entities/sideMenuBo'

@injectable()
export class SideMenuRepositoryMock implements SideMenuRepository {

    public getSideMenuItems() {
        return 'side menu items!'
    }

    public getSideMenuItems2() {
        return 'side menu items!'
    }

    public getSideMenuItems3(): Array<SideMenuBo> {

      var items : Array<SideMenuBo> = new Array()
      var item : SideMenuBo = new SideMenuBo()
      items.push(item)

      return items
    }
}
