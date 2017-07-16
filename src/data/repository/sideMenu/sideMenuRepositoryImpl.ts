import { injectable } from 'inversify'
//import 'reflect-metadata'
//import { TYPES } from '../../domain/repository/types'

import SideMenuBo from '../../../domain/entities/sideMenuBo'
import { SideMenuRepository } from '../../../domain/repository/sideMenuRepository'
import SideMenuDatasourceRest from './datasource/sideMenuDatasourceRest'

@injectable()
export class SideMenuRepositoryImpl implements SideMenuRepository {

    sideMenuDatasourceRest : SideMenuDatasourceRest

    constructor() {
        this.sideMenuDatasourceRest = new SideMenuDatasourceRest()
    }

    public getSideMenuItems(): Array<SideMenuBo> {

      var itemsBo: Array<SideMenuBo> = this.sideMenuDatasourceRest.getSideMenuItems()

      return itemsBo
    }
}
