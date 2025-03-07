# Alpine JS Head

![](https://img.shields.io/bundlephobia/min/alpinejs-head)
![](https://img.shields.io/npm/v/alpinejs-head)
![](https://img.shields.io/npm/dt/alpinejs-head)
![](https://img.shields.io/github/license/markmead/alpinejs-head)

# Alpine JS Head

Alpine JS Head is a simple plugin that lets you control your HTML `<head>`
elements using Alpine JS.

## What It Does

This plugin lets you dynamically update:

- 📄 Page title
- 📝 Meta descriptions
- 🔍 SEO elements

## Why Use It?

- **Simple**: Change head elements without writing complex JavaScript
- **Reactive**: Head elements update automatically when your data changes
- **Flexible**: Use JSON, directives, or methods - whatever fits your style
- **SEO-friendly**: Update meta tags on the fly for better search results

## Install

### CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-head@latest/dist/cdn.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
```

### Package

```shell
yarn add -D alpinejs-head
npm install -D alpinejs-head
```

```js
import Alpine from 'alpinejs'
import head from 'alpinejs-head'

Alpine.plugin(head)

Alpine.start()
```

## Examples

### JSON

### JSON

You can use `x-head.json` to set the initial dynamic values and update them
later through Alpine JS data binding.

This approach is ideal when you need to manage multiple head elements at once or
when working with complex metadata structures.

```html
<script x-data x-head.json type="application/json">
  {
    "title": "Alpine JS Head Demo",
    "meta": [
      {
        "name": "description",
        "content": "Dynamically control your page metadata with Alpine JS Head"
      },
      {
        "name": "theme-color",
        "content": "#00f"
      }
    ]
  }
</script>
```

### Directives

The directive approach offers a clean, declarative way to manage head elements
directly in your HTML structure. It's perfect for components that need to update
metadata based on their state.

```html
<div
  x-data="{
    title: 'Alpine JS Head Demo',
    description: 'Dynamically control your page metadata with Alpine JS Head',
    theme: '#00f'
  }"
  x-head.title="title"
  x-head.meta.description="description"
  x-head.meta.theme-color="theme"
>
  <input type="text" x-model="title" placeholder="Change page title" />

  <textarea
    x-model="description"
    placeholder="Update meta description"
  ></textarea>

  <div>
    <button type="button" @click="theme = '#00f'">Blue</button>
    <button type="button" @click="theme = '#f00'">Red</button>
    <button type="button" @click="theme = '#0f0'">Green</button>
  </div>
</div>
```

`x-head` will track the data of `title`, `description`, and `theme` and update
the HTML `<head>` elements targeted through the modifiers.

You can bind multiple head elements to the same component, making it easy to
update related metadata together.

### Method

```html
<button x-data @click="$head('title', 'Alpine JS Head Demo')"> Title </button>

<button
  x-data
  @click="$head('meta.description', 'Dynamically control your page metadata with Alpine JS Head')"
>
  Description
</button>
```
