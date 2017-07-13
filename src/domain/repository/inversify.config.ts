import { Container } from 'inversify'
import { TYPES } from './types'
import { SideMenuRepositoryMock } from '../../data/repository/sideMenuRepositoryMock'
import { SideMenuRepository } from './sideMenuRepository'

var myContainer = new Container()
myContainer.bind<SideMenuRepository>(TYPES.SideMenuRepository).to(SideMenuRepositoryMock)

export { myContainer }
