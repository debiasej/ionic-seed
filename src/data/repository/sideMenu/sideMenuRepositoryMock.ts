import { injectable } from 'inversify'

import SideMenuBo from '../../../domain/entities/sideMenuBo'
import { SideMenuRepository } from '../../../domain/repository/sideMenuRepository'
import { SideMenuDatasource } from './datasource/sideMenuDatasource'
import SideMenuDatasourceFactory from './datasource/sideMenuDatasourceFactory'

@injectable()
export class SideMenuRepositoryMock implements SideMenuRepository {

    sideMenuDatasourceFactory: SideMenuDatasourceFactory

    constructor() {
      this.sideMenuDatasourceFactory = new SideMenuDatasourceFactory()
    }

    public getSideMenuItems(): Promise<Array<SideMenuBo>> {

      var sideMenuDatasource : SideMenuDatasource = this.sideMenuDatasourceFactory.createLocalMock()
      var itemsBo: Promise<Array<SideMenuBo>> = sideMenuDatasource.getSideMenuItems()

      return itemsBo
    }
}
