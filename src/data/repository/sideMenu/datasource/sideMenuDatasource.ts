import SideMenuBo from '../../../../domain/entities/sideMenuBo'

interface SideMenuDatasource {

    getSideMenuItems(): Array<SideMenuBo>
}

export { SideMenuDatasource }
