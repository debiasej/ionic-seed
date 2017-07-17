import { injectable } from 'inversify'
import HttpClient from '../../../net/httpClient'

import { SideMenuDatasource } from './sideMenuDatasource'
import SideMenuBo from '../../../../domain/entities/sideMenuBo'
import SideMenuDto from '../../../dto/sideMenu/sideMenuDto'
import Mapper from '../../../dto/sideMenu/mapper/sideMenuMapper'


@injectable()
class SideMenuDatasourceRest implements SideMenuDatasource {

  httpClient: HttpClient
  mapper: Mapper

  constructor() {
    this.mapper = new Mapper()
    this.httpClient = new HttpClient()
  }

  getSideMenuItems() : Promise<Array<SideMenuBo>> {

    var itemsBo: Array<SideMenuBo> 
    var promise: Promise<Array<SideMenuDto>> = this.httpClient.instance.get('https://demo5902092.mockable.io/v2.9/1916622435261787/leads')
      .map(res => {
        return res.json()
      })
      .toPromise()
      .catch(err => {
        console.error('Http error!')
    })
    
    return promise.then(itemsDto => itemsBo = this.mapToBo(itemsDto))
  }

  private mapToBo(itemsDto: Array<SideMenuDto>) : Array<SideMenuBo> {
    return this.mapper.sideMenuDtotoSideMenuBo(itemsDto)
  }
  
}

export default SideMenuDatasourceRest
