import { Container } from 'inversify'
import { TYPES } from './types'
import { SideMenuRepositoryMock } from '../../data/repository/sideMenuRepositoryMock'

var myContainer = new Container()
myContainer.bind<SideMenuRepository>(TYPES.SideMenuRepository).to(SideMenuRepositoryMock)

export { myContainer }
