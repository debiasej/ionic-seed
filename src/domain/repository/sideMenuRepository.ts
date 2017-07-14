import SideMenuBo from '../entities/sideMenuBo'

interface SideMenuRepository {

    getSideMenuItemsBo(): Array<SideMenuBo>
}

export { SideMenuRepository }
