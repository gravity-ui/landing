Adapted from the UIKit v8.2.0 ListItemView Storybook examples (MIT).

## ListItemViewExample

```tsx
import * as React from 'react';
import {Envelope} from '@gravity-ui/icons';
import {Icon, Flex, ListItemView} from '@gravity-ui/uikit';
const Rows = ({children}: React.PropsWithChildren) => (
  <Flex direction="column" width="280px">
    {children}
  </Flex>
);

export default function App() {
  return (
    <Rows>
      <ListItemView startContent={<Icon data={Envelope} size={16} />}>Inbox</ListItemView>
    </Rows>
  );
}
```

## ListItemViewSizes

```tsx
import * as React from 'react';
import {Envelope} from '@gravity-ui/icons';
import {Icon, Flex, ListItemView} from '@gravity-ui/uikit';
const Rows = ({children}: React.PropsWithChildren) => (
  <Flex direction="column" width="280px">
    {children}
  </Flex>
);

function SizesExample() {
  return (
    <Rows>
      {(['s', 'm', 'l', 'xl'] as const).map((size) => (
        <ListItemView key={size} size={size} startContent={<Icon data={Envelope} />}>
          {`Size ${size}`}
        </ListItemView>
      ))}
    </Rows>
  );
}

export default function App() {
  return <SizesExample />;
}
```

## ListItemViewSlots

```tsx
import * as React from 'react';
import {Clock, Envelope, Star} from '@gravity-ui/icons';
import {Icon, Label, Flex, ListItemView} from '@gravity-ui/uikit';
const Rows = ({children}: React.PropsWithChildren) => (
  <Flex direction="column" width="280px">
    {children}
  </Flex>
);

function SlotsExample() {
  return (
    <Rows>
      <ListItemView startContent={<Icon data={Envelope} size={16} />}>Inbox</ListItemView>
      <ListItemView startContent={<Icon data={Star} size={16} />} description="Flagged by you">
        Starred
      </ListItemView>
      <ListItemView startContent={<Icon data={Clock} size={16} />} endContent={<Label>1</Label>}>
        Snoozed
      </ListItemView>
    </Rows>
  );
}

export default function App() {
  return <SlotsExample />;
}
```

## ListItemViewStates

```tsx
import * as React from 'react';
import {Flex, ListItemView} from '@gravity-ui/uikit';
const Rows = ({children}: React.PropsWithChildren) => (
  <Flex direction="column" width="280px">
    {children}
  </Flex>
);

function StatesExample() {
  return (
    <Rows>
      <ListItemView>Plain</ListItemView>
      <ListItemView active>Active: the keyboard cursor</ListItemView>
      <ListItemView hovered>Hovered</ListItemView>
      <ListItemView disabled>Disabled</ListItemView>
    </Rows>
  );
}

export default function App() {
  return <StatesExample />;
}
```

## ListItemViewSelection

```tsx
import * as React from 'react';
import {Flex, ListItemView} from '@gravity-ui/uikit';
const Rows = ({children}: React.PropsWithChildren) => (
  <Flex direction="column" width="280px">
    {children}
  </Flex>
);

function SelectionExample() {
  return (
    <Rows>
      <ListItemView selected selectionStyle="highlight">
        Selected: highlight
      </ListItemView>
      <ListItemView selected selectionStyle="check">
        Selected: check
      </ListItemView>
      <ListItemView selectionStyle="check">Not selected: the check is kept</ListItemView>
      <ListItemView selected selectionStyle="none">
        Selected: shown by nothing
      </ListItemView>
    </Rows>
  );
}

export default function App() {
  return <SelectionExample />;
}
```

## ListItemViewNesting

```tsx
import * as React from 'react';
import {Flex, ListItemView} from '@gravity-ui/uikit';
const Rows = ({children}: React.PropsWithChildren) => (
  <Flex direction="column" width="280px">
    {children}
  </Flex>
);

function NestingExample() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Rows>
      <ListItemView collapsible collapsed={collapsed} onCollapseChange={setCollapsed}>
        Mailboxes
      </ListItemView>
      {collapsed ? null : (
        <React.Fragment>
          <ListItemView nestedLevel={1}>Inbox</ListItemView>
          <ListItemView nestedLevel={1}>Starred</ListItemView>
        </React.Fragment>
      )}
    </Rows>
  );
}

export default function App() {
  return <NestingExample />;
}
```

## ListItemViewDragHandle

```tsx
import * as React from 'react';
import {Grip} from '@gravity-ui/icons';
import {Icon, Flex, ListItemView} from '@gravity-ui/uikit';
const Rows = ({children}: React.PropsWithChildren) => (
  <Flex direction="column" width="280px">
    {children}
  </Flex>
);

function DragHandleExample() {
  return (
    <Rows>
      {['Intro', 'Verse', 'Chorus'].map((part) => (
        <ListItemView
          key={part}
          selectionStyle="check"
          dragHandle={
            <span style={{display: 'flex', cursor: 'grab'}} aria-hidden="true">
              <Icon data={Grip} size={12} />
            </span>
          }
        >
          {part}
        </ListItemView>
      ))}
    </Rows>
  );
}

export default function App() {
  return <DragHandleExample />;
}
```

## ListItemViewCustomElement

```tsx
import * as React from 'react';
import {Envelope, TrashBin} from '@gravity-ui/icons';
import {Button, Icon, Flex, ListItemView} from '@gravity-ui/uikit';
const Rows = ({children}: React.PropsWithChildren) => (
  <Flex direction="column" width="280px">
    {children}
  </Flex>
);

function CustomElementExample() {
  return (
    <Rows>
      <ListItemView
        component="a"
        componentProps={{
          href: 'https://gravity-ui.com',
          target: '_blank',
          rel: 'noreferrer',
        }}
        startContent={<Icon data={Envelope} size={16} />}
      >
        A row that is a link
      </ListItemView>
      <ListItemView
        component="button"
        componentProps={{type: 'button', onClick: () => console.log('onClick')}}
        startContent={<Icon data={TrashBin} size={16} />}
        endContent={
          <Button view="flat" size="s" onClick={() => console.log('onEndContentClick')}>
            Undo
          </Button>
        }
      >
        A row that is a button
      </ListItemView>
    </Rows>
  );
}

export default function App() {
  return <CustomElementExample />;
}
```
