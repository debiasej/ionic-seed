import { Injector, forwardRef, Injectable, ReflectiveInjector } from '@angular/core'

//import { GetSideMenuMock } from '../data/datasource/GetSideMenuMock'
//import { GetItemsSideMenuInteractorModule } from './getItemsSideMenuInteractor.module'

@Injectable()
export class GetItemsSideMenuInteractor {

  constructor() {

  }

  invoke() {
    return this.getSideMenuFromInteractor()
  }

  getSideMenuFromInteractor() {
    return [{ titulo: "Portada", destino: "PortadaPage", tipo: "layoutDetail", tabBar: { visible: true, orden: 0 }, sideBar: { visible: true, orden: 0 }}]
  }

}

// var injector = ReflectiveInjector.resolveAndCreate([
//   GetItemsSideMenuInteractor,
//   GetSideMenuMock
// ])
//
// var interactor = injector.get(GetItemsSideMenuInteractor)
