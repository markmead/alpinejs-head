import { kebabCase } from "lodash";

export default function (Alpine) {
  Alpine.directive(
    "head",
    (el, { expression, modifiers }, { evaluateLater, effect }) => {
      let isJson = modifiers.includes("json");
      let head = document.head;

      if (isJson) {
        let json = JSON.parse(el.textContent);

        if (json.title) document.title = json.title;

        if (json.meta) {
          json.meta.forEach((meta) => {
            let tag =
              head.querySelector(`meta[name="${meta.name}"]`) ||
              document.createElement("meta");

            assignAttributes(tag, meta);

            if (!head.querySelector(`meta[name="${meta.name}"]`)) {
              head.appendChild(tag);
            }
          });
        }

        if (json.links) {
          json.links.forEach((link) => createAndAppendElement("link", link));
        }

        if (json.scripts) {
          json.scripts.forEach((script) =>
            createAndAppendElement("script", script)
          );
        }
      }

      if (!isJson) {
        let getValue = evaluateLater(expression);

        effect(() => {
          getValue((value) => {
            if (modifiers.includes("title")) document.title = value;

            if (modifiers.includes("meta")) {
              let name = modifiers[1];
              let meta = document.querySelector(`meta[name="${name}"]`);

              meta.content = value;
            }
          });
        });
      }

      function assignAttributes(element, attributes) {
        Object.keys(attributes).forEach((key) =>
          element.setAttribute(key, attributes[key])
        );
      }

      function createAndAppendElement(type, attributes) {
        let tag = document.createElement(type);

        assignAttributes(tag, attributes);

        head.appendChild(tag);
      }
    }
  );
}
