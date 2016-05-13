import {Http} from "@angular/http";
import {BazListComponent} from "./bazList.component";
import {BazDetailsComponent} from "./bazDetail.component";
import {BazFooterComponent} from "./bazFooter.component";
/**
 * This file defines the states for the `baz` module.
 * The states are exported as an array.  
 * The parent module imports this array and concats them into the master state list.
 */


/** Resolves for baz states */
// Note: see bootstrap/router.config.ts for notes on temporary string-based resolve injection (Angular 1 style)

const reject = (message) => new Promise((resolve, reject) => reject(message));

// Inject 'http' and fetch all the baz data
const bazList = (http: Http) =>
    http.get('/data/bazData.json').map(res => res.json()).toPromise();


// Inject the bazList (from the parent) and find the correct
const bazDetail = (bazList, $transition$) =>
    bazList.find(item => item.id == $transition$.params().bazId) || reject(`Unable to find baz #${$transition$.params().bazId}`);


/** The 'baz' submodule's states. */
export let BAZ_STATES = [
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
    resolve: { bazList }
  },

  // A child state of app.baz
  // - This state fills the unnnamed ($default) <ui-view> (in the `AppComponent` from  `app` state) with
  // `BazDetailsComponent`. This effectively replaces the baz list view with a baz detail view.
  // - Has a path parameter :bazId which appears in the URL
  // - Resolves bazDetail, then the component displays the data
  {
    name: 'app.baz.details',
    url: '/:bazId',
    views: {
      '$default@app': { component: BazDetailsComponent }
    },
    resolve: { bazDetail }
  },
];


