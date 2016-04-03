import {trace, UIROUTER_PROVIDERS, UiView, UIRouterConfig, Category} from "ui-router-ng2";
import {MyUIRouterConfig} from "./router.config";
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from "angular2/core";
import {bootstrap} from 'angular2/platform/browser';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

bootstrap(UiView, [
    ...UIROUTER_PROVIDERS,
    ...HTTP_PROVIDERS,
    provide(UIRouterConfig, { useClass: MyUIRouterConfig })
]);
