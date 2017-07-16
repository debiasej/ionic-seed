import { localMockContainer, restContainer } from './sideMenu.inversify.config'
import { TYPES } from '../../../../global/inversify/types'
import SideMenuDatasourceLocalMock from './sideMenuDatasourceLocalMock'
import SideMenuDatasourceRest from './sideMenuDatasourceRest'
import { SideMenuDatasource } from './sideMenuDatasource'

class SideMenuDatasourceFactory {

  sideMenuDatasourceLocalMock : SideMenuDatasourceLocalMock
  sideMenuDatasourceRest : SideMenuDatasourceRest

  constructor() {

    this.sideMenuDatasourceLocalMock = new SideMenuDatasourceLocalMock()
    this.sideMenuDatasourceRest = new SideMenuDatasourceRest()
  }

  createLocalMock(): SideMenuDatasource {

    return this.sideMenuDatasourceLocalMock
  }

  createRemoteMock(): SideMenuDatasource {

    return this.sideMenuDatasourceRest
  }

}

export default SideMenuDatasourceFactory
