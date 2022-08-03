# Alpine JS Head

Manage the HTML head with JSON and Alpine JS directives 🗿

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-head@latest/dist/head.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
npm i -D alpinejs-head

yarn add -D alpinejs-head
```

```js
import Alpine from 'alpinejs'
import head from 'alpinejs-head'

Alpine.plugin(head)

Alpine.start()
```

## Example

### With JSON

You'd use the JSON approach when you want to load/update items in the HTML `<head>` when Alpine JS inits.

It's not needed if you have everything in your HTML `<head>` on load that you need.

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

### With Alpine JS

```html
<div
  x-data="{ name: 'Mark', bio: 'I am Mark and I write code.' }"
  x-head.title="name"
  x-head.meta.description="bio"
>
  <input type="text" x-model="name" />

  <textarea x-model="bio"></textarea>
</div>
```

The `x-head` directives will track the data of `name` and `bio` and update the HTML `<head>` elements targeted through the modifiers.

For example, if you wanted to update the `<meta name="theme-color" />`, then you'd write the `x-head` directive like so.

```html
<div x-data="{ color: '#000' }" x-head.meta.theme-color="color"> ... </div>
```

With the Alpine JS approach there is no way of updating `<link>` and `<script>` elements.

### Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-head)
![](https://img.shields.io/npm/v/alpinejs-head)
![](https://img.shields.io/npm/dt/alpinejs-head)
![](https://img.shields.io/github/license/markmead/alpinejs-head)
