---
title: JavaScript for the Front End
category: js
parent: References
layout: resource_list
---

{% include summary_toc.html %}

## Basics

- [MDN JS Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [MDN JavaScript Basics Español](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web)
- [JS for Cats](http://jsforcats.com/) If you want a low-key walk through of basics that is full of 😺 😼 😹 🐈‍⬛ 🐈, this is pretty helpful. It’s older so you will see references to the `var` keyword instead of `let` or `const`.

## Truthy and Falsy

- [JS Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)
- [MDN Falsy in JS](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [MDN Truthy in JS](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [MDN Truthy in JS Español](https://developer.mozilla.org/es/docs/Glossary/Truthy)

## Arrays

- [MDN Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Bucles e iteración, Arrays en español](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)

## Map, Filter, and Reduce

- [A pretty good explanation of map, filter, and reduce](https://dev.to/chrisachard/map-filter-reduce-crash-course-5gan)
- [map, filter, and reduce in a tweet](https://twitter.com/steveluscher/status/741089564329054208)
- [A Visualization of What Reduce Does](http://reduce.surge.sh/)
- [Eloquent JavaScript Chapter 5: Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html) - This is a pretty intense read but it includes examples of map, filter, and reduce.

## Objects

- [MDN JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Eloquent JavaScript, chapter 4: Objects and Arrays](https://eloquentjavascript.net/04_data.html)
- [blog post on JS objects](https://blog.bitsrc.io/the-chronicles-of-javascript-objects-2d6b9205cd66)
- [More in-depth blog post on understanding objects in JS](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript)
- [Rebecca Murphey on using objects to write more concise code (short video)](https://youtu.be/hVQdlYgJqcY)

## The DOM

- [CSS-Tricks: What Is the DOM?](https://css-tricks.com/dom/)
- [DOM Manipulation with Vanilla JS](https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/)

## Events

- [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Element Events](https://developer.mozilla.org/en-US/docs/Web/API/Element#events) -> this is where you can see the events that are defined for elements (like "click" or "mouseover")
- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) -> this is a huge list of all the available events, useful mainly to get an idea of what's possible
- [How JS Event Delegation Works](https://davidwalsh.name/event-delegate)
- [JS Event Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)
- [Loupe: Visualizing the JS Event Loop](http://latentflip.com/loupe)

## Browser Rendering

- [About the browser rendering engine](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_rendering_engine)
- [How browser rendering works](https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/)

## APIs

- [Illustrated Dev: Meet the Robowaiter APIs Serving Us Data](https://maggieappleton.com/api)
- [Insomnia client](https://support.insomnia.rest/article/11-getting-started)
- [GitHub API Docs](https://developer.github.com/v3/)

## AJAX and Fetch

- [MDN AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
- [CSS-Tricks article on using Fetch](https://css-tricks.com/using-fetch/)
- [MDN Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [Code Academy Lesson on Fetch](https://www.codecademy.com/courses/learn-intermediate-javascript/lessons/js-requests-with-fetch-api/exercises/js-requests-with-fetch-api-intro)
- [AJAX explained by analogy](https://blog.codeanalogies.com/2018/01/15/ajax-basics-explained-by-working-at-a-fast-food-restaurant/)

## Promises

Fetch requests use JavaScript **promises** to handle responses. Promises are a _much_ bigger topic than we will get into right now, but if you want to know more about what a promise is and how to use it beyond the context of AJAX requests, MDN documentation is a great starting place.

- [MDN JS Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Working with Forms

- [MDN Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms) through "Validating and Submitting Form Data"
- [Code Academy Forms](https://www.codecademy.com/courses/learn-html/lessons/html-forms/)
- [Form Fields in Eloquent JavaScript, Chapter 18](https://eloquentjavascript.net/18_http.html#h_H222GOgM6T)
- [MDN Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN HTML form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [MDN HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)
- [MDN HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [MDN HTML label element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [MDN submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [MDN Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [MDN Using FormData Objects](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects)

### Form Validation

- [MDN Client-Side Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [MDN HTML5 Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)

## Working with Dates

- [MDN: JS Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Blog post: Understanding Date and Time in JS](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript )

## Debugging JavaScript

- [Notes: Debugging in JS]({{ site.team_notes_repo }}/blob/main/js-debugging.md)
- [JS Debugging Reference](https://developer.chrome.com/docs/devtools/javascript/reference/)
- [Chrome Developers JS Debugging Tutorial](https://developer.chrome.com/docs/devtools/javascript/)
- [The JS Error Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [Handling errors with try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_statement)

## Useful Libraries

- [Lodash](https://lodash.com/) - This is a JS utility library -- lots of handy little functions that can make it easier to do common things
- [Moment.js](https://momentjs.com/) - This is an older library that is widely used but no longer being updated. [More modern alternatives are mentioned in its documentation](https://momentjs.com/docs/#/-project-status/).

### Formatting and Linting

- [Prettier Code Formatter](https://prettier.io/) This is information about the extenstion that you can (and should) install in VS Code.
- [How to format code with Prettier](https://www.digitalocean.com/community/tutorials/code-formatting-with-prettier-in-visual-studio-code)
- [ESLint Plug-in for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [How to use Prettier in VS Code](https://www.robinwieruch.de/how-to-use-prettier-vscode/)
- [How to use ESLint in VS Code](https://www.robinwieruch.de/vscode-eslint/)
- [How to use Prettier with ESLint](https://www.robinwieruch.de/prettier-eslint/)
