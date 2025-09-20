# Section Layout Component

The `<section>` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.

Get more info about the section tag on the [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

## Usage Example

```jsx
<Section>
  <p>Add content elements here</p>
</Section>
```

## Properties

### Prop Options

The following props are available on the `Main` component:

| Prop       | Purpose                                                                  | Default   | Options                                                                               |
| ---------- | ------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------- |
| `children` | Accepts children elements                                                |           |                                                                                       |
| `as`       | Changes the primary wrapping tag of the component                        | `section` | `section`, `div`                                                                      |
| `maxWidth` | Sets a `ui-max-width-${propValue}` class that targets direct descendants | `md`      | `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `max`, `full` |

### Prop Notes

- **`maxWidth`:** each option available in this prop relates to the [max-width classes](https://tailwindcss.com/docs/max-width) provided by Tailwind CSS
- **`noProse`:** currently prose classes of `prose prose-lg md:prose-xl` from the [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin are applied by default

## Dev Notes

- `ui-no-max-width`: using this class on the primary wrapping element of any component used inside the `Section` component will prevent the `maxWidth` prop from being applied, allowing that component to set its own max width, if desired (see `CardGroup` or `Column` for examples)
