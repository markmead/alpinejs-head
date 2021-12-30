# Apline JS head

Alpine JS plugin `x-head` allows you to update the document `head` dynamically 🥳

## Example 👀

### JSON

```html
<script x-data x-head.json type="application/json">
  {
    "title": "Initial Title via Alpine JS",
    "meta": [
      {
        "name": "description",
        "content": "Hey there! I'm coming from Alpine JS"
      },
      {
        "name": "theme-color",
        "content": "#000"
      }
    ],
    "links": [
      {
        "type": "rel",
        "href": "popup.css"
      }
    ],
    "scripts": [
      {
        "src": "popup.js",
        "async": true
      }
    ]
  }
</script>
```

With the use of `x-head.json` we can pass the initial `head` setup via Alpine JS.

This is not needed if you have everything in your `head` already.

### Dynamically

```html
<div
  x-data="{ name: 'Mark', bio: 'Hello! I am Mark and I write code.' }"
  x-head.title="name"
  x-head.meta.description="bio"
>
  <input type="text" x-model="name" />
  <textarea x-model="bio"></textarea>
</div>
```

This will listen for changes to `name` and `bio` and update the values within the `head` element.

If you were to update `theme-color` for example, you'd pass it like so `x-head.meta.theme-color`.

_There is no way of updating `link` and `script` elements._

## Install 🌟

It's very easy to install Alpine JS plugins! 🙌

### CDN

```html
<script src="https://unpkg.com/alpinejs-head@1.x.x/dist/head.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-head

yarn add -D alpinejs-head
```

Then you can register the plugin.

```js
import Alpine from "alpinejs";
import head from "alpinejs-head";

Alpine.plugin(head);

window.Alpine = Alpine;

Alpine.start();
```

### Stats 📊

Here's some stats about the Alpine JS head package! As you can see, it's tiny 🤏

![](https://img.shields.io/bundlephobia/min/alpinejs-head)
![](https://img.shields.io/npm/v/alpinejs-head)
![](https://img.shields.io/npm/dt/alpinejs-head)
![](https://img.shields.io/github/license/markmead/alpinejs-head)
