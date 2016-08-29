import {Http} from "@angular/http";
import {BarListComponent} from "./barList.component";
import {BarDetailsComponent} from "./barDetail.component";
import {BarFooterComponent} from "./barFooter.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
/**
 * This file defines the states for the `bar` module.
 * The states are exported as an array and imported in the BarModule.
 */
export let BAR_STATES: Ng2StateDeclaration[] = [
    // A state for the 'app.bar' submodule.
    // - Fills in the unnamed <ui-view> ($default) from `app` state with `BarListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `BarFooterComponent`
    // - Fetches barList data using a resolve, then the component displays the data
    {
        name: 'app.bar',
        url: '/bar',
        views: {
            $default: { component: BarListComponent },
            footer: BarFooterComponent
        },
        resolve: [
          // Inject 'http' and fetch all the bar data
          { token: 'barList', deps: [Http], resolveFn: (http: Http) =>
            http.get('/data/barData.json').map(res => res.json()).toPromise() }
        ]
    },

    // A child state of app.bar
    // - This state fills the unnnamed <ui-view> (in `BarListComponent` from  `app.foo` state) with `BarDetailsComponent`
    // - Has a parameter :barId which appears in the URL
    // - Resolves barDetail, then the component displays the data
    {
      name: 'app.bar.details', url: '/?barId', component: BarDetailsComponent,
      resolve: [
        // Inject the barList (from the parent) and find the correct
        { token: 'barDetail', deps: ['barList', Transition], resolveFn: (barList, trans) =>
              barList.find(item => item.id == trans.params().barId) }
      ]
    },
];


