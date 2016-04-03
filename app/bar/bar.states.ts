import {Http} from "angular2/http";
import {BarListComponent} from "./barList.component";
import {BarDetailsComponent} from "./barDetail.component";

// Resolves
const barList = ($transition$, http: Http) =>
    http.get('/data/barData.json').map(res => res.json()).toPromise()

const barDetail = ($transition$, barList) =>
    barList.find(item => item.id == $transition$.params().barId);

export let BAR_STATES = [
  { name: 'app.bar', url: '/bar', component: BarListComponent, resolve: { barList } },
  { name: 'app.bar.details', url: '/:barId', component: BarDetailsComponent, resolve: { barDetail } },
];


