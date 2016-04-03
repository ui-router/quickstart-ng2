
import {FooComponent} from "./foo.component";
import {Nest1Component} from "./nest1.component";
import {Nest2Component} from "./nest2.component";
import {Ng2StateDeclaration} from "ui-router-ng2/ng2/interface";

export let FOO_STATES: Ng2StateDeclaration = [
  { name: 'app.foo', url: '/foo', component: FooComponent },
  { name: 'app.foo.nest1', url: '/nest1', component: Nest1Component },
  { name: 'app.foo.nest2', url: '/nest2', component: Nest2Component }
];

