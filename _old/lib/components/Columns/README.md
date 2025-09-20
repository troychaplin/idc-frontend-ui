# Column Component

The `<column>` component represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.

## Usage Example

```jsx
<Column>
  <Column.Content>
    <p>Add content elements here</p>
  </Column.Content>
  <Column.Content>
    <p>Add content elements here</p>
  </Column.Content>
</Column>
```

## Properties

### Prop Options

The following props are available on the `Main` component:

| Prop       | Purpose                                                                  | Default | Options                                                                               |
| ---------- | ------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------- |
| `children` | Accepts children elements                                                |         |                                                                                       |
| `maxWidth` | Sets a `ui-max-width-${propValue}` class that targets direct descendants | `md`    | `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `max`, `full` |
| `cols`     | Sets the grid columns class                                              | `2`     | `2`, `3`, `4`, `6`, `1/3`, `2/3`                                                      |
| `gap`      | Sets the grid gap                                                        | `20`    | Unrestricted `number` field                                                           |

### Prop Notes

- **`maxWidth`:** each option available in this prop relates to the [max-width classes](https://tailwindcss.com/docs/max-width) provided by Tailwind CSS
