import SideMenuBo from '../entities/sideMenuBo'

interface SideMenuRepository {

    getSideMenuItems(): Promise<Array<SideMenuBo>>
}

export { SideMenuRepository }
