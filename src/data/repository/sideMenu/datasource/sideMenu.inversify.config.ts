import { Container } from 'inversify'

import { TYPES } from '../../../../global/inversify/types'
import SideMenuDatasourceRest from './sideMenuDatasourceRest'
import SideMenuDatasourceLocalMock from './sideMenuDatasourceRest'
import { SideMenuDatasource } from './sideMenuDatasource'

var localMockContainer = new Container()
localMockContainer.bind<SideMenuDatasource>(TYPES.SideMenuDatasource).to(SideMenuDatasourceRest)

var restContainer = new Container()
restContainer.bind<SideMenuDatasource>(TYPES.SideMenuDatasource).to(SideMenuDatasourceLocalMock)

export { localMockContainer, restContainer }
