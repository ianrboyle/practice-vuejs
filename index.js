/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "Learn JavaScript" }, { text: "Learn Vue" }, { text: "Build something awesome" }],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "",
    nextMessage: "",
  },
  methods: {
    reverseMessage: function () {
      let newMessage = this.message.split("").reverse().join("");
      if (this.message === newMessage) {
        this.nextMessage = this.message + " is a palindrome!";
      } else {
        this.nextMessage = this.message + " is not a palindrome!";
      }
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});

Vue.component("todo-item", {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ["prop"],
  template: "<li>{{ prop.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" },
    ],
  },
});

// var app8 = new Vue({
//   el: "#app-8",
//   data: function () {
//     return {
//       message: "",
//     };
//   },
//   methods: {
//     factorial: function () {

//     }
//     },
//   },
// });
