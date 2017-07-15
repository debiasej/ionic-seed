import SideMenuBo from '../entities/sideMenuBo'

interface SideMenuRepository {

    getSideMenuItems(): Array<SideMenuBo>
}

export { SideMenuRepository }
