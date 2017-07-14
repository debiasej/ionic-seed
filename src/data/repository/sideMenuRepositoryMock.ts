import { injectable } from 'inversify'
//import 'reflect-metadata'
//import { TYPES } from '../../domain/repository/types'

import SideMenuBo from '../../domain/entities/sideMenuBo'
import SideMenuDto from '../dto/sideMenuDto'
import Mapper from '../mapper'
import { SideMenuRepository } from '../../domain/repository/sideMenuRepository'
import GetSideMenuMock from './datasource/getSideMenuMock'

@injectable()
export class SideMenuRepositoryMock implements SideMenuRepository {

    mapper: Mapper

    constructor() {
      this.mapper = new Mapper()
    }

    public getSideMenuItemsBo(): Array<SideMenuBo> {

      var service = new GetSideMenuMock()
      var itemsDto: Array<SideMenuDto> = service.getSideMenuItemsFromMock()
      var itemsBo:  Array<SideMenuBo> = this.mapper.sideMenuDtotoSideMenuBo(itemsDto)
      
      return itemsBo
    }
}
