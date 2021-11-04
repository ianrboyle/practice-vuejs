/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      showInfo: false,
      fruits: ["apple", "banana"],
      newFruit: "",
    };
  },
  methods: {
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
  },
});
