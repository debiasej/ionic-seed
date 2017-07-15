import SideMenuDto from '../../../dto/sideMenuDto'

class SideMenuDataStoreLocalMock {

  getSideMenuItemsFromLocalMock() : Array<SideMenuDto> {

    var sideMenuItemsDto: Array<SideMenuDto> = new Array<SideMenuDto>()
    var sideMenuItemDto: SideMenuDto = new SideMenuDto()

    sideMenuItemDto['titulo'] = 'Portada'
    sideMenuItemDto['destino'] = 'PortadaPage'
    sideMenuItemDto['tipo'] = 'layoutDetail'
    sideMenuItemDto['tabBar'] = { visible: true, orden: 0 }
    sideMenuItemDto['sideBar'] =  { visible: true, orden: 0 }
    sideMenuItemsDto.push(sideMenuItemDto)

    return sideMenuItemsDto
  }
}

export default SideMenuDataStoreLocalMock
