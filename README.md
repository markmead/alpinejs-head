# Alpine JS Head

Manage the HTML `<head>` with Alpine JS 👷‍♀️

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

## Examples

### JSON

You can use `x-head.json` to set the initial dynamic values.

```html
<script x-data x-head.json type="application/json">
  {
    "title": "Hello World 👋",
    "meta": [
      {
        "name": "description",
        "content": "How are you today?"
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

_Only with `x-head.json` can you set `<link>` and `<script>` elements._

### Directives

```html
<div
  x-data="{ title: 'Hello World 👋', description: 'How are you today?' }"
  x-head.title="title"
  x-head.meta.description="description"
>
  <input type="text" x-model="title" />

  <textarea x-model="description"></textarea>
</div>
```

`x-head` will track track the data of `title` and `description` and update the
HTML `<head>` elements targeted through the modifiers.

Here's an example of you can set the `theme-color`:

```html
<div x-data="{ theme: '#000' }" x-head.meta.theme-color="theme"> </div>
```

### Method

```html
<button x-data @click="$head('title', 'Hello World 👋')"> Title </button>

<button x-data @click="$head('meta.description', 'How are you today?')">
  Description
</button>
```

### Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-head)
![](https://img.shields.io/npm/v/alpinejs-head)
![](https://img.shields.io/npm/dt/alpinejs-head)
![](https://img.shields.io/github/license/markmead/alpinejs-head)
