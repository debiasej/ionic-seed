import SideMenuBo from '../../../domain/entities/sideMenuBo'

class SideMenuMapper {

  sideMenuDtotoSideMenuBo (dto: Array<any>) : Array<SideMenuBo> {
    var result : Array<SideMenuBo> = new Array<SideMenuBo>()

    for (let element of dto) {
        var sideMenuBo : SideMenuBo  = new SideMenuBo()
        sideMenuBo.title = element["titulo"]
        sideMenuBo.nextPage = element["destino"]
        sideMenuBo.pageType = element["tipo"]
        result.push(sideMenuBo)
    }

    return result
  }
}

export default SideMenuMapper
