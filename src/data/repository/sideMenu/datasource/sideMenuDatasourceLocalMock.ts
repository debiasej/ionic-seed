import { injectable } from 'inversify'

import { SideMenuDatasource } from './sideMenuDatasource'
import SideMenuBo from '../../../../domain/entities/sideMenuBo'
import SideMenuDto from '../../../dto/sideMenu/sideMenuDto'
import Mapper from '../../../dto/sideMenu/mapper/sideMenuMapper'

@injectable()
class SideMenuDatasourceLocalMock implements SideMenuDatasource {

  mapper: Mapper

  constructor() {
    this.mapper = new Mapper()
  }

  getSideMenuItems() : Array<SideMenuBo> {

    var itemsDto: Array<SideMenuDto> = new Array<SideMenuDto>()
    var dto: SideMenuDto = new SideMenuDto()

    dto['titulo'] = 'Portada'
    dto['destino'] = 'PortadaPage'
    dto['tipo'] = 'layoutDetail'
    dto['tabBar'] = { visible: true, orden: 0 }
    dto['sideBar'] =  { visible: true, orden: 0 }
    itemsDto.push(dto)

    var itemsBo:  Array<SideMenuBo> = this.mapToBo(itemsDto)

    return itemsBo
  }

  private mapToBo(itemsDto: Array<SideMenuDto>) : Array<SideMenuBo> {
    return this.mapper.sideMenuDtotoSideMenuBo(itemsDto)
  }
}

export default SideMenuDatasourceLocalMock
