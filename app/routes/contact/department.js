import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model(params) {
    console.log(params);
    let url = `https://api.github.com/users/${params.username}`;
    return $.getJSON(url);
  }
});

// ES6 class
// export default class extends Route {
//   model(params) {
//     console.log(params);
//   }
// }
