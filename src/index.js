export default function (Alpine) {
  Alpine.directive(
    'head',
    (el, { expression, modifiers }, { evaluateLater, effect }) => {
      const headEl = document.head

      const isUsingJson = modifiers.includes('json')

      if (isUsingJson) {
        const headJson = JSON.parse(el.textContent)

        const hasTitle = !!headJson.title
        const hasMeta = !!headJson.meta

        if (hasTitle) {
          document.title = headJson.title
        }

        if (hasMeta) {
          headJson.meta.forEach((jsonMeta) => {
            const metaTag =
              headEl.querySelector(`meta[name="${jsonMeta.name}"]`) ||
              document.createElement('meta')

            assignAttributes(metaTag, jsonMeta)

            if (!headEl.querySelector(`meta[name="${jsonMeta.name}"]`)) {
              headEl.appendChild(metaTag)
            }
          })
        }

        return
      }

      const getValue = evaluateLater(expression)

      effect(() => {
        getValue((metaValue) => {
          const isTitle = modifiers.includes('title')
          const isMeta = modifiers.includes('meta')

          if (!isTitle && !isMeta) {
            return
          }

          if (isTitle) {
            document.title = metaValue

            return
          }

          const [_, metaName] = modifiers
          const metaEl = document.querySelector(`meta[name="${metaName}"]`)

          if (!metaEl) {
            return
          }

          metaEl.content = metaValue
        })
      })

      function assignAttributes(htmlElement, metaAttributes) {
        for (const [metaKey, metaValue] of Object.entries(metaAttributes)) {
          htmlElement.setAttribute(metaKey, metaValue)
        }
      }
    }
  )

  Alpine.magic('head', () => (metaKey, metaValue) => {
    const isTitle = metaKey === 'title'
    const isMeta = metaKey.includes('meta')

    if (!isTitle && !isMeta) {
      return
    }

    if (isTitle) {
      document.title = metaValue

      return
    }

    const [_, metaName] = metaKey.split('.')
    const metaEl = document.querySelector(`meta[name="${metaName}"]`)

    if (!metaEl) {
      return
    }

    metaEl.content = metaValue
  })
}
