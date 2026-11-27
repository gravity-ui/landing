Adapted from the UIKit v8.2.0 List Storybook examples (MIT).

## ListExample

```tsx
import {List} from '@gravity-ui/uikit';
const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

export default function App() {
  return <List aria-label="Languages" items={languages} />;
}
```

## ListSizes

```tsx
import {Text, Flex, List} from '@gravity-ui/uikit';
const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

const sizes = ['s', 'm', 'l', 'xl'] as const;

export default function App() {
  return (
    <Flex gap="spacing-8">
      {sizes.map((size) => (
        <Flex key={size} direction="column" gap="spacing-2">
          <Text color="secondary" variant="caption-2">
            {size}
          </Text>
          <List aria-label={`Languages, size ${size}`} size={size} items={languages} />
        </Flex>
      ))}
    </Flex>
  );
}
```

## ListSections

```tsx
import {List} from '@gravity-ui/uikit';
const documents = [
  {
    id: 'recent',
    name: 'Recent',
    children: [
      {id: 'report', name: 'Annual report'},
      {id: 'plan', name: 'Marketing plan'},
    ],
  },
  {
    id: 'all',
    name: 'All',
    children: [
      {id: 'backlog', name: 'Backlog'},
      {id: 'sync', name: 'Team sync'},
    ],
  },
];

export default function App() {
  return (
    <List
      aria-label="Documents"
      items={documents}
      style={{width: 240}}
      getItemContent={(item) => item.name}
    />
  );
}
```

## ListItemContent

```tsx
import {CircleCheck, TriangleExclamation} from '@gravity-ui/icons';
import {Icon, Flex, List} from '@gravity-ui/uikit';
const services = [
  {id: 'api', name: 'API gateway', healthy: true},
  {id: 'database', name: 'Database', healthy: false},
  {id: 'cdn', name: 'CDN', healthy: true},
];

export default function App() {
  return (
    <List
      aria-label="Services"
      items={services}
      style={{width: 240}}
      getItemContent={(service) => (
        <Flex gap="spacing-2" alignItems="center">
          <Icon
            data={service.healthy ? CircleCheck : TriangleExclamation}
            size={14}
            style={{
              color: service.healthy
                ? 'var(--g-color-text-positive)'
                : 'var(--g-color-text-warning)',
            }}
          />
          {service.name}
        </Flex>
      )}
      getItemTextValue={(service) => service.name}
    />
  );
}
```

## ListActions

```tsx
import * as React from 'react';
import {Text, Flex, List} from '@gravity-ui/uikit';
const commands = [
  {id: 'copy', title: 'Copy'},
  {id: 'paste', title: 'Paste'},
  {id: 'duplicate', title: 'Duplicate'},
  {id: 'delete', title: 'Delete'},
];

export default function App() {
  const [currentId, setCurrentId] = React.useState<string>();
  return (
    <Flex direction="column" gap="spacing-2" style={{width: 240}}>
      <List
        aria-label="Actions"
        items={commands}
        getItemContent={(command) => command.title}
        onItemAction={setCurrentId}
      />
      <Text color="secondary" qa="applied-item-id">
        You applied item ID: {currentId}
      </Text>
    </Flex>
  );
}
```

## ListItemSlots

```tsx
import {Clock, Envelope, Star, TrashBin} from '@gravity-ui/icons';
import {Icon, Label, List} from '@gravity-ui/uikit';
const mailboxes = [
  {id: 'inbox', name: 'Inbox', description: 'Unread first', icon: Envelope, count: 24},
  {id: 'starred', name: 'Starred', description: 'Flagged by you', icon: Star, count: 3},
  {id: 'snoozed', name: 'Snoozed', description: 'Back later today', icon: Clock, count: 1},
  {id: 'trash', name: 'Trash', description: 'Cleared every 30 days', icon: TrashBin, count: 0},
];

export default function App() {
  return (
    <List
      aria-label="Mailboxes"
      items={mailboxes}
      style={{width: 300}}
      getItemTextValue={(box) => box.name}
      renderItem={(ctx, {getItemProps, getItemViewProps}) => (
        <List.ItemView
          {...getItemProps()}
          {...getItemViewProps()}
          startContent={<Icon data={ctx.item.icon} size={16} />}
          description={ctx.item.description}
          endContent={<Label theme="normal">{ctx.item.count}</Label>}
        >
          {ctx.item.name}
        </List.ItemView>
      )}
    />
  );
}
```

## ListCustomMarkup

```tsx
import * as React from 'react';
import {Avatar, Text, Flex, List} from '@gravity-ui/uikit';
const users = [
  {id: 'ada', name: 'Ada Lovelace', email: 'ada@example.com', role: 'Engineer'},
  {id: 'alan', name: 'Alan Turing', email: 'alan@example.com', role: 'Researcher'},
  {id: 'grace', name: 'Grace Hopper', email: 'grace@example.com', role: 'Manager'},
];

export default function App() {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  return (
    <List
      aria-label="Teammates"
      items={users}
      style={{gap: 8, width: 260}}
      getItemTextValue={(user) => user.name}
      renderItem={(ctx, {getItemProps}) => (
        <div
          {...getItemProps({
            onPointerEnter: () => setHoveredId(ctx.id),
            onPointerLeave: () => setHoveredId(null),
          })}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: 12,
            borderRadius: 12,
            cursor: 'pointer',
            // The keyboard cursor is drawn the way the
            // default row draws it: under the mouse, and once
            // the list has lost the focus, the outline does
            // not stay behind
            outline: `2px solid var(${
              ctx.state.active && ctx.state.cursorVisible
                ? '--g-color-line-brand'
                : '--g-color-line-generic'
            })`,
            // The hover of your own markup is yours: an app
            // usually leaves it to the CSS `:hover`
            backgroundColor: hoveredId === ctx.id ? 'var(--g-color-base-simple-hover)' : undefined,
          }}
        >
          <Avatar text={ctx.item.name} size="l" />
          <Flex direction="column">
            <Text variant="subheader-1">{ctx.item.name}</Text>
            <Text color="secondary" variant="caption-2">
              {ctx.item.role}
            </Text>
          </Flex>
        </div>
      )}
    />
  );
}
```

## ListLinks

```tsx
import {ArrowUpRightFromSquare} from '@gravity-ui/icons';
import {Icon, List} from '@gravity-ui/uikit';
const specs = [
  {
    id: 'listbox',
    name: 'ARIA listbox pattern',
    description: 'w3.org',
    href: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
  },
  {
    id: 'grid',
    name: 'ARIA grid pattern',
    description: 'w3.org',
    href: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
  },
  {
    id: 'components',
    name: 'Gravity UI components',
    description: 'gravity-ui.com',
    href: 'https://gravity-ui.com/components',
  },
];

export default function App() {
  return (
    <List
      aria-label="Specifications"
      items={specs}
      style={{width: 300}}
      getItemTextValue={(spec) => spec.name}
      onItemAction={(_id, spec, event) => {
        // A click is navigated by the browser itself, the modifiers
        // included (Ctrl/Cmd+click opens a background tab, Shift+click
        // a window); Enter is intercepted by the list, so the keyboard
        // navigates through the callback
        if ('key' in event) {
          window.open(spec.href, '_blank', 'noopener,noreferrer');
        }
      }}
      renderItem={(ctx, {getItemProps, getItemViewProps}) => (
        <List.ItemView
          component="a"
          href={ctx.item.href}
          // The anchor says the same thing the callback does — every
          // route out of the row (a click, Enter, the context menu, a
          // middle click) opens the same new tab
          target="_blank"
          rel="noopener noreferrer"
          {...getItemProps({
            'aria-description': 'Opens in a new tab',
          })}
          {...getItemViewProps()}
          description={ctx.item.description}
          endContent={<Icon data={ArrowUpRightFromSquare} size={14} />}
        >
          {ctx.item.name}
        </List.ItemView>
      )}
    />
  );
}
```

## ListControlledActivation

```tsx
import * as React from 'react';
import {Button, Text, Flex, List} from '@gravity-ui/uikit';
const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

export default function App() {
  const [activeItemId, setActiveItemId] = React.useState<string | null>(languages[1]);
  return (
    <Flex direction="column" gap="spacing-2" style={{width: 240}}>
      <Flex gap="spacing-2">
        <Button onClick={() => setActiveItemId(languages[0])}>First</Button>
        <Button onClick={() => setActiveItemId(languages[languages.length - 1])}>Last</Button>
        <Button onClick={() => setActiveItemId(null)}>None</Button>
      </Flex>
      <Text color="secondary" qa="controlled-active-id">
        activeItemId: {String(activeItemId)}
      </Text>
      <List
        aria-label="Languages"
        items={languages}
        activeItemId={activeItemId}
        // Every gesture asks the consumer for the update instead of
        // applying it: the list draws the value that came back, so
        // a rejected update leaves the cursor where it was
        onActiveItemUpdate={setActiveItemId}
      />
    </Flex>
  );
}
```

## ListSingleSelection

```tsx
import * as React from 'react';
import {List} from '@gravity-ui/uikit';
const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

export default function App() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([languages[0]]);
  return (
    <List
      aria-label="Languages"
      items={languages}
      selectionMode="single"
      selectedIds={selectedIds}
      onSelectedUpdate={setSelectedIds}
    />
  );
}
```

## ListMultipleSelection

```tsx
import * as React from 'react';
import {Text, Flex, List} from '@gravity-ui/uikit';
const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Kotlin'];

export default function App() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  return (
    <Flex direction="column" gap="spacing-2" style={{width: 240}}>
      <List
        aria-label="Languages"
        items={languages}
        selectionMode="multiple"
        selectedIds={selectedIds}
        onSelectedUpdate={setSelectedIds}
      />
      {/* The range gestures are easier to follow with the value in
                    sight: Shift+click, Shift+↑/↓ and Ctrl/Cmd+A change it in
                    bulk */}
      <Text color="secondary" qa="selected-ids">
        Selected: {selectedIds.join(', ') || 'nothing'}
      </Text>
    </Flex>
  );
}
```

## ListVirtualized

```tsx
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';
import {List} from '@gravity-ui/uikit';
interface TrackRecord {
  id: string;
  title: string;
}

const archive: TrackRecord[] = Array.from({length: 10_000}, (_, index) => ({
  id: `track-${index + 1}`,
  title: `${String(index + 1).padStart(5, '0')} · ${'Recorded track'}${
    index % 4 === 0 ? ` (${'indie'} remaster — ${'anniversary edition'})` : ''
  }`,
}));

const getTrackContent = (record: TrackRecord) => record.title;

export default function App() {
  return (
    <ListVirtualizer estimateItemSize={28}>
      {/* The List root is the scroll container: the consumer MUST limit its height */}
      <List
        aria-label="Archive"
        style={{height: 480, width: 400}}
        items={archive}
        getItemContent={getTrackContent}
      />
    </ListVirtualizer>
  );
}
```

## ListInteractiveRows

```tsx
import * as React from 'react';
import {TrashBin} from '@gravity-ui/icons';
import {Button, Icon, List} from '@gravity-ui/uikit';
const commands = [
  {id: 'copy', title: 'Copy'},
  {id: 'paste', title: 'Paste'},
  {id: 'duplicate', title: 'Duplicate'},
  {id: 'delete', title: 'Delete'},
];

export default function App() {
  const [tasks, setTasks] = React.useState(commands);
  return (
    <List
      role="grid"
      aria-label="Tasks"
      items={tasks}
      style={{width: 280}}
      getItemContent={(task) => task.title}
      renderItem={(ctx, {getItemProps, getItemViewProps, getCellProps}) => (
        <List.ItemView
          {...getItemProps()}
          {...getItemViewProps()}
          endContent={
            // Interactive content lives in a cell: role="row"
            // must own cells, and inside a gridcell a button
            // is valid (inside role="option" it is not)
            <span {...getCellProps()}>
              <Button
                view="flat"
                size="s"
                // A grid is a single tab stop: the button
                // of a cell is reached with ←/→, not Tab
                tabIndex={-1}
                aria-label={`Delete ${ctx.item.title}`}
                onClick={() => setTasks((prev) => prev.filter((task) => task.id !== ctx.id))}
              >
                <Icon data={TrashBin} size={14} />
              </Button>
            </span>
          }
        >
          <span {...getCellProps()}>{ctx.content}</span>
        </List.ItemView>
      )}
    />
  );
}
```

## ListDragAndDrop

```tsx
import * as React from 'react';
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';
import {List} from '@gravity-ui/uikit';
interface TrackRecord {
  id: string;
  title: string;
}

const tracks: TrackRecord[] = Array.from({length: 8}, (_, index) => ({
  id: `track-${index + 1}`,
  title: `${index + 1} · ${'Recorded track'}`,
}));

function DragAndDropHelloPangeaExample() {
  const [items, setItems] = React.useState(tracks);
  return (
    <ListHelloPangeaDnd items={items} onItemsUpdate={setItems}>
      <List
        role="grid"
        aria-label="Vinyl"
        items={items}
        style={{width: 320}}
        getItemContent={(record) => record.title}
      />
    </ListHelloPangeaDnd>
  );
}

export default function App() {
  return <DragAndDropHelloPangeaExample />;
}
```

## ListDragAndDropCustomRow

```tsx
import * as React from 'react';
import {Draggable} from '@hello-pangea/dnd';
import {
  HelloPangeaDragHandle,
  ListHelloPangeaDnd,
  getHelloPangeaRowProps,
} from '@gravity-ui/uikit/hello-pangea-dnd';
import {Avatar, Text, List} from '@gravity-ui/uikit';
interface Person {
  id: string;
  name: string;
  email: string;
}

const people: Person[] = Array.from({length: 6}, (_, index) => {
  const name = ['Alex Kim', 'Jordan Lee', 'Cameron Park', 'Drew Patel', 'Sam Rossi', 'Taylor Chen'][
    index
  ];
  return {id: `person-${index + 1}`, name, email: `speaker-${index + 1}@example.com`};
});

const cardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  // A margin rather than the gap of the list: the library measures the
  // margins of the rows, a CSS gap would break the shift of the neighbours
  marginBlockEnd: 8,
  padding: 12,
  borderRadius: 12,
  background: 'var(--g-color-base-float)',
};

function PersonCard({person}: {person: Person}) {
  return (
    <React.Fragment>
      <Avatar text={person.name} size="s" />
      <span>
        <Text as="div">{person.name}</Text>
        <Text as="div" color="secondary">
          {person.email}
        </Text>
      </span>
    </React.Fragment>
  );
}

function DragAndDropHelloPangeaCustomRowExample() {
  const [items, setItems] = React.useState(people);
  const ids = items.map((person) => person.id);
  return (
    <ListHelloPangeaDnd items={items} onItemsUpdate={setItems}>
      <List
        role="grid"
        aria-label="Speakers"
        items={items}
        style={{width: 360}}
        getItemTextValue={(person) => person.name}
        renderItem={(ctx, helpers) => (
          <Draggable draggableId={ctx.id} index={ids.indexOf(ctx.id)}>
            {(provided, snapshot) => {
              const {rowProps, handleProps, cellProps} = getHelloPangeaRowProps({
                ctx,
                helpers,
                provided,
                snapshot,
              });
              return (
                <div
                  {...rowProps}
                  style={{
                    ...cardStyle,
                    ...rowProps.style,
                    // The keyboard cursor is drawn the way the
                    // default row draws it (see the CustomMarkup story)
                    outline: `2px solid var(${
                      ctx.state.active && ctx.state.cursorVisible
                        ? '--g-color-line-brand'
                        : '--g-color-line-generic'
                    })`,
                  }}
                >
                  <span {...cellProps}>
                    <HelloPangeaDragHandle {...handleProps} />
                  </span>
                  <span {...cellProps} style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <PersonCard person={ctx.item} />
                  </span>
                </div>
              );
            }}
          </Draggable>
        )}
      />
    </ListHelloPangeaDnd>
  );
}

export default function App() {
  return <DragAndDropHelloPangeaCustomRowExample />;
}
```

## ListFocusOwner

```tsx
import * as React from 'react';
import {TextInput, Flex, List, useListFocusOwner} from '@gravity-ui/uikit';
const frameworks = ['React', 'Vue', 'Svelte', 'Solid', 'Angular', 'Qwik', 'Preact'];

const filterFrameworks = (query: string) => {
  const normalized = query.trim().toLowerCase();
  return frameworks.filter((name) => name.toLowerCase().includes(normalized));
};

export default function App() {
  const [query, setQuery] = React.useState('');
  // The activity is controlled: null means "nothing is active"
  const [activeItemId, setActiveItemId] = React.useState<string | null>(null);
  const focusOwner = useListFocusOwner();
  const {onKeyDown, ...inputProps} = focusOwner.getInputProps({'aria-label': 'Framework'});

  const handleQueryUpdate = (value: string) => {
    setQuery(value);
    // Typing is filtering rather than typeahead: the activity moves to
    // the first match, so Enter always applies what is visible
    setActiveItemId(filterFrameworks(value)[0] ?? null);
  };

  return (
    <Flex direction="column" gap="spacing-2" style={{width: 240}}>
      <TextInput
        value={query}
        onUpdate={handleQueryUpdate}
        placeholder="Filter the frameworks"
        controlProps={inputProps}
        // TextInput sets its own onKeyDown AFTER spreading
        // controlProps (it would overwrite the handler of the list
        // with undefined) — so the keyboard is handed to it through
        // a separate prop
        onKeyDown={onKeyDown}
      />
      <List
        focusOwner={focusOwner}
        aria-label="Frameworks"
        items={filterFrameworks(query)}
        activeItemId={activeItemId}
        onActiveItemUpdate={setActiveItemId}
        onItemAction={(id) => setQuery(id)}
      />
    </Flex>
  );
}
```
