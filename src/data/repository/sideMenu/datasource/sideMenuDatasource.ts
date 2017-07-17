import SideMenuBo from '../../../../domain/entities/sideMenuBo'

interface SideMenuDatasource {

    getSideMenuItems(): Promise<Array<SideMenuBo>>
}

export { SideMenuDatasource }
