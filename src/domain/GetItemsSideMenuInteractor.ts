import { Injector, forwardRef, Injectable, ReflectiveInjector } from '@angular/core'

//import { GetSideMenuMock } from '../data/datasource/GetSideMenuMock'
//import { GetItemsSideMenuInteractorModule } from './getItemsSideMenuInteractor.module'
import { SideMenuBo } from './entities/sideMenuBo'

@Injectable()
export class GetItemsSideMenuInteractor {

  constructor() {

  }

  invoke() {
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

// var injector = ReflectiveInjector.resolveAndCreate([
//   GetItemsSideMenuInteractor,
//   GetSideMenuMock
// ])
//
// var interactor = injector.get(GetItemsSideMenuInteractor)
