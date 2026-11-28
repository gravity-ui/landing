## Short description

The purpose of `DFDialog` component is to ease of creating of forms, it is used react-final-form internally.
It supports several predefined types of fields but user can extend it by registering new ones by using `registerDialogControl`.

### Controls

- [Base controls](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - static text
  - `text` - editable text
  - `multi-text` - user defined array of string
  - `checkbox` - checkbox
  - `tumbler` - tumbler
  - `radio` - radio button
  - `editable-list` - list of removable strings
  - `multi-editable-list` - multi list of removable strings
  - `text area` - text area
  - `select` - select
  - `block` - allows to add ReactNode
- [Custom control registration](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Features

- Inplace and modal view
- [One tab](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) and [several tab forms](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [Vertical/Horizontal tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [Hidden fields and tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [Linked fields by values](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [Field-level validation](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [Form-level validation](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [Virtualized tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [Cloneable tabs](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [Groupped fields](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## Install

```bash
$ npm install @gravity-ui/dialog-fields
```

Depending on your package manager you may need to install `peerDependencies` manually.

Vertical tabs use UIKit's drag-and-drop and virtualization entry points,
and Select controls virtualize lists of 50 or more options.
Wrap your application in UIKit's `Provider` and import `@gravity-ui/uikit/styles/styles.css`.

## Migrating to UIKit 8

Replace the application's root `ThemeProvider` and `MobileProvider` with `Provider`.
Move their props to `Provider`, except for the removed `__experimentalMobileModals` prop:

```diff
-import {ThemeProvider, MobileProvider} from '@gravity-ui/uikit';
+import {Provider} from '@gravity-ui/uikit';

-<ThemeProvider theme="light">
-  <MobileProvider>
-    <App />
-  </MobileProvider>
-</ThemeProvider>
+<Provider theme="light">
+  <App />
+</Provider>
```

If your application already uses `Provider`, no additional wrapper around `DFDialog`
is needed. `DFDialog` keeps its `visible`, `size`, and `onClose` props; UIKit's changes
to `Dialog.open`, `maxWidth`, and `onOpenChange` are handled inside the library.

Review custom styles and visual snapshots:

- Dialog header, body, and footer spacing has changed, affecting both modal and inline forms.
- Desktop footer buttons now fit their content instead of having a minimum width of 128px.
  To restore the previous width, pass `{width: 'max', className: 'form-action'}` through
  both `footerProps.propsButtonApply` and `footerProps.propsButtonCancel`, and set
  `.form-action { min-width: 128px; }` in your stylesheet.
- Checkbox controls of size `l` now use a 13px label instead of 15px and an 18px indicator
  instead of 17px. Theme colors have also changed slightly.
- Vertical tabs use the new `List` without legacy components. Custom selectors targeting
  the old `.g-list__item` markup must be revised. The `onOrderChanged({oldIndex, newIndex})`
  callback is preserved.

Custom controls and UIKit props passed through field definitions must follow the
[UIKit migration guide](https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md).
In particular, `Select` no longer accepts `virtualizationThreshold`; the built-in
`select` control uses `ListVirtualizer` with a threshold of 50 options.

## Usage

This example includes the application provider. If your application already has a root
`Provider`, omit the wrapper shown here.

```tsx
import {DFDialog} from '@gravity-ui/dialog-fields';
import {Provider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <Provider theme="light">
      <DFDialog<FormValues>
        visible={true}
        headerProps={{
          title: 'My form',
        }}
        onAdd={(form) => {
          console.log(form.getState().values);
          return Promise.resolve();
        }}
        fields={[
          {
            name: 'firstName',
            type: 'text',
            caption: 'First name',
            tooltip: 'Description for first name field',
          },
          {
            name: 'lastName',
            type: 'text',
            caption: 'LastName',
            tooltip: 'Description for last name field',
          },
        ]}
      />
    </Provider>
  );
}
```

### Conditional visibility

Fields and tabs support `visibilityCondition`. With a string `when`, `isActive`
receives the value of that field:

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

Use an array of field names to depend on multiple values. `isActive` receives the
values as separate arguments in the same order as `when`:

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

Names are paths from the form root, including tab prefixes such as
`general.register`. Visibility updates when any referenced field changes.
A field hidden by its condition is unmounted, not just visually hidden.

See more examples in [storybook](https://preview.yandexcloud.dev/dialog-fields).
