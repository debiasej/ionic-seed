import { injectable } from 'inversify'
//import 'reflect-metadata'
//import { TYPES } from '../../domain/repository/types'

import SideMenuBo from '../../../domain/entities/sideMenuBo'
import SideMenuDto from '../../dto/sideMenuDto'
import Mapper from './sideMenuMapper'
import { SideMenuRepository } from '../../../domain/repository/sideMenuRepository'
import SideMenuDataStoreLocalMock from './datasource/sideMenuDataStoreLocalMock'

@injectable()
export class SideMenuRepositoryImpl implements SideMenuRepository {

    mapper: Mapper

    constructor() {
      this.mapper = new Mapper()
    }

    public getSideMenuItems(): Array<SideMenuBo> {

      var service = new SideMenuDataStoreLocalMock()
      var itemsDto: Array<SideMenuDto> = service.getSideMenuItemsFromLocalMock()
      var itemsBo:  Array<SideMenuBo> = this.mapper.sideMenuDtotoSideMenuBo(itemsDto)

      return itemsBo
    }
}
