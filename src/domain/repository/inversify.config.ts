import { Container } from 'inversify'
import { TYPES } from './types'
import { SideMenuRepositoryMock } from '../../data/repository/sideMenu/sideMenuRepositoryMock'
import { SideMenuRepositoryImpl } from '../../data/repository/sideMenu/sideMenuRepositoryImpl'
import { SideMenuRepository } from './sideMenuRepository'

var inversifyContainer = new Container()
//inversifyContainer.bind<SideMenuRepository>(TYPES.SideMenuRepository).to(SideMenuRepositoryMock)
inversifyContainer.bind<SideMenuRepository>(TYPES.SideMenuRepository).to(SideMenuRepositoryImpl)

export { inversifyContainer }
