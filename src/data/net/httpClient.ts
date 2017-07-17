import { ReflectiveInjector } from '@angular/core'
import { Http, BrowserXhr, RequestOptions, ResponseOptions, ConnectionBackend,
  XSRFStrategy, BaseRequestOptions, BaseResponseOptions, XHRBackend, CookieXSRFStrategy  } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

class HttpClient {

    instance: Http

    constructor() {
        let injector = ReflectiveInjector.resolveAndCreate([
            Http,
            BrowserXhr,
            {provide: RequestOptions, useClass: BaseRequestOptions},
            {provide: ResponseOptions, useClass: BaseResponseOptions},
            {provide: ConnectionBackend, useClass: XHRBackend},
            {provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()},
        ]);

        this.instance = injector.get(Http);
    }
}

export default HttpClient