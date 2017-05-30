import {Http} from "@angular/http";
import {BazListComponent} from "./bazList.component";
import {BazDetailsComponent} from "./bazDetail.component";
import {BazFooterComponent} from "./bazFooter.component";
import {Ng2StateDeclaration, Transition} from "@uirouter/angular";
/**
 * This file defines the states for the `baz` module.
 * The states are exported as an array and imported in the BazModule.
 */
export let BAZ_STATES: Ng2StateDeclaration[] = [

  // A state for the 'app.baz' submodule.
  // - Fills in the unnamed ($default) <ui-view> from `app` state with `BazListComponent`
  // - Fills in the footer <ui-view name="footer"> from `app` state with `BazFooterComponent`
  // - Fetches bazList data using a resolve, then the component displays the data
  {
    name: 'app.baz',
    url: '/baz',
    views: {
      $default: { component: BazListComponent },
      footer: { component: BazFooterComponent }
    },
    resolve: [
      // Inject 'Http' and fetch all the baz data
      {
        token: 'bazList',
        deps: [Http],
        resolveFn: (http: Http) =>
          http.get('/data/bazData.json').map(res => res.json()).toPromise()
      }
    ]
  },

  // A child state of app.baz
  // - This state fills the unnamed ($default) <ui-view> (in the `AppComponent` from  `app` state) with
  // `BazDetailsComponent`. This effectively replaces the baz list view with a baz detail view.
  // - Has a path parameter :bazId which appears in the URL
  // - Resolves bazDetail, then the component displays the data
  {
    name: 'app.baz.details',
    url: '/:bazId',
    views: {
      '$default@app': { component: BazDetailsComponent }
    },
    resolve: [
      // Inject the bazList (from the parent) and find the correct
      {
        token: 'bazDetail',
        deps: ['bazList', Transition],
        resolveFn: (bazList, trans) =>
          bazList.find(item => item.id == trans.params().bazId)
      }
    ]
  },
];


