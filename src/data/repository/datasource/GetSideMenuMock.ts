import { Mapper } from '../../mapper'

export class GetSideMenuMock {
  mapper: Mapper

  constructor() {
    this.mapper = new Mapper()
  }

  getSideMenu() {
    var arr = [{
      titulo: "Portada",
      destino: "PortadaPage",
      tipo: "layoutDetail",
      tabBar: { visible: true, orden: 0 },
      sideBar: { visible: true, orden: 0 }
    }]
    return this.mapper.sideMenuDtotoSideMenuBo(arr)
  }
}
