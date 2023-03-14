export default function (Alpine) {
  Alpine.directive(
    'head',
    (el, { expression, modifiers }, { evaluateLater, effect }) => {
      const htmlHead = document.head

      const usingJSON = modifiers.includes('json')

      if (usingJSON) {
        const jsonHead = JSON.parse(el.textContent)

        if (jsonHead.title) {
          document.title = jsonHead.title
        }

        if (jsonHead.meta) {
          jsonHead.meta.forEach((jsonMeta) => {
            const metaTag =
              htmlHead.querySelector(`meta[name="${jsonMeta.name}"]`) ||
              document.createElement('meta')

            assignAttributes(metaTag, jsonMeta)

            if (!htmlHead.querySelector(`meta[name="${jsonMeta.name}"]`)) {
              htmlHead.appendChild(metaTag)
            }
          })
        }

        if (jsonHead.links) {
          jsonHead.links.forEach((jsonLink) =>
            createAndAppendElement('link', jsonLink)
          )
        }

        if (jsonHead.scripts) {
          jsonHead.scripts.forEach((jsonScript) =>
            createAndAppendElement('script', jsonScript)
          )
        }

        return
      }

      const getValue = evaluateLater(expression)

      effect(() => {
        getValue((metaValue) => {
          if (modifiers.includes('title')) {
            document.title = metaValue

            return
          }

          if (modifiers.includes('meta')) {
            const metaName = modifiers[1]
            const metaTag = document.querySelector(`meta[name="${metaName}"]`)

            metaTag.content = metaValue
          }
        })
      })

      function assignAttributes(htmlElement, metaAttributes) {
        Object.keys(metaAttributes).forEach((metaKey) =>
          htmlElement.setAttribute(metaKey, metaAttributes[metaKey])
        )
      }

      function createAndAppendElement(metaType, metaAttributes) {
        const metaTag = document.createElement(metaType)

        assignAttributes(metaTag, metaAttributes)

        htmlHead.appendChild(metaTag)
      }
    }
  )

  Alpine.magic('head', () => (metaKey, metaValue) => {
    if (metaKey === 'title') {
      document.title = metaValue

      return
    }

    if (metaKey.includes('meta')) {
      const metaName = metaKey.split('.')[1]
      const metaTag = document.querySelector(`meta[name="${metaName}"]`)

      metaTag.content = metaValue
    }
  })
}
