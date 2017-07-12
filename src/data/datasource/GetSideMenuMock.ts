import { Injectable } from '@angular/core';

@Injectable()
export class GetSideMenuMock {

  constructor() {
  }

  public getSideMenu() {
    return [{ titulo: "Portada", destino: "PortadaPage", tipo: "layoutDetail", tabBar: { visible: true, orden: 0 }, sideBar: { visible: true, orden: 0 }}]
  }
}
