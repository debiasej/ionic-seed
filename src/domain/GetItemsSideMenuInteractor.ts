import { Injectable } from '@angular/core'

import { myContainer } from './repository/inversify.config'
import { TYPES } from './repository/types'
import { SideMenuBo } from './entities/sideMenuBo'


@Injectable()
export class GetItemsSideMenuInteractor {

  invoke() {

    var sideMenuRepository = myContainer.get<SideMenuRepository>(TYPES.SideMenuRepository)
    console.log(sideMenuRepository.getSideMenuItems())

    return this.getSideMenuFromInteractor()
  }

  getSideMenuFromInteractor() {
    var dto : Array<object> = [{ titulo: "Portada", destino: "PortadaPage", tipo: "layoutDetail", tabBar: { visible: true, orden: 0 }, sideBar: { visible: true, orden: 0 }}]
    var mapper : Mapper = new Mapper()

    return mapper.sideMenuDtotoSideMenuBo(dto[0])
  }

}

class Mapper {

  sideMenuDtotoSideMenuBo (dto: object) : Array<SideMenuBo> {

    var sideMenuBo : SideMenuBo  = new SideMenuBo()
    sideMenuBo.title = dto["titulo"]
    sideMenuBo.nextPage = dto["destino"]
    sideMenuBo.pageType = dto["tipo"]

    var result : Array<SideMenuBo> = new Array<SideMenuBo>()
    result[0] = sideMenuBo

    return result
  }
}
