# Main Layout Component

The `<main>` HTML element represents the dominant content of the `<body>` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

Get more info about the main tag on the [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)

## Usage Example

```jsx
<Main>
  <p>Add content elements here</p>
</Main>
```

## Properties

The following props are available on the `Main` component:

| Prop       | Purpose                                                  | Default | Options         |
| ---------- | -------------------------------------------------------- | ------- | --------------- |
| `children` | Accepts children elements                                |         |                 |
| `noProse`  | Removes the automatically applied Tailwind prose classes | `false` | `true`, `false` |

## Additional Info

- `noProse`: currently prose classes of `prose prose-lg md:prose-xl` from the [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin are applied by default
