import Route from "@ember/routing/route";
import $ from "jquery";

export default Route.extend({
  async model() {
    let url = `https://www.reddit.com/r/javascript.json`;
    let payload = await $.getJSON(url);
    console.log(payload.data.children);
    return payload.data.children;
  }
});
