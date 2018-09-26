import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', { path: '/about-me' });
  this.route('contact', function() {
    this.route('department', { path: ':username' });
  });
});

export default Router;
