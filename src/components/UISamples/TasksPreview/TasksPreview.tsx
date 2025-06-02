import {
    ArrowDownToSquare,
    ArrowRightFromSquare,
    ArrowUpArrowDown,
    Calendar,
    Check,
    ChevronDown,
    CircleQuestion,
    Clock,
    FolderTree,
    Gear,
    House,
    Link,
    ListUl,
    Lock,
    Magnifier,
    Paperclip,
    PencilToSquare,
    Plus,
    ThumbsDown,
    ThumbsUp,
    Xmark,
} from '@gravity-ui/icons';
import {MarkdownEditorView, useMarkdownEditor} from '@gravity-ui/markdown-editor';
import {Logo, LogoProps} from '@gravity-ui/navigation';
import {
    Alert,
    Box,
    Button,
    Card,
    Checkbox,
    Disclosure,
    Divider,
    Flex,
    Icon,
    IconData,
    Label,
    LabelProps,
    Switch,
    Tab,
    TabList,
    Text,
    TextInput,
    User,
    spacing,
} from '@gravity-ui/uikit';
import {Fragment} from 'react';

import gravityUi from '../../../assets/icons/gravity-ui.svg';
import user1 from '../../../assets/preview-apartments/user-1.png';
import {PreviewWrapper, PreviewWrapperProps} from '../PreviewWrapper/PreviewWrapper';

interface MenuItem {
    id: string;
    title: string;
    icon: IconData;
    current?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
    {
        id: 'home',
        title: 'Home',
        icon: House,
    },
    {
        id: 'my-tasks',
        title: 'My Tasks',
        icon: ListUl,
        current: true,
    },
    {
        id: 'inbox',
        title: 'Inbox',
        icon: ArrowDownToSquare,
    },
    {
        id: 'portfolios',
        title: 'Portfolios',
        icon: PencilToSquare,
    },
];

const BOTTOM_MENU_ITEMS: MenuItem[] = [
    {
        id: 'faq',
        title: 'FAQ',
        icon: CircleQuestion,
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: Gear,
    },
    {
        id: 'logout',
        title: 'Logout',
        icon: ArrowRightFromSquare,
    },
];

const LOGO_PROPS: LogoProps = {
    text: 'Gravity UI',
    href: '#',
    icon: gravityUi,
    iconSize: 32,
};

const ACTIVE_TAB = 'list';
const TAB_ITEMS = [
    {id: 'list', title: 'List', counter: 25},
    {id: 'calendar', title: 'Calendar', counter: 2},
    {id: 'files', title: 'Files', counter: 200},
];

const COLLAPSIBLE_MENUS: Array<{
    title: string;
    defaultExpanded: boolean;
    expanded?: boolean;
    items: Array<{
        title: string;
        imageSrc?: string;
    }>;
}> = [
    {
        title: 'Favorities',
        defaultExpanded: true,
        items: [
            {
                title: 'Recruiting meeting',
            },
            {
                title: 'Weekly meeting',
            },
            {
                title: 'Editorial Calendar',
            },
            {
                title: 'Website Launch',
            },
            {
                title: 'Rebranding',
            },
            {
                title: 'Marketing',
            },
        ],
    },
    {
        title: 'Reports',
        defaultExpanded: false,
        expanded: false,
        items: [],
    },
    {
        title: 'Teams',
        defaultExpanded: true,
        items: [
            {
                title: 'User name',
                imageSrc: user1.src,
            },
            {
                title: 'User name',
                imageSrc: user1.src,
            },
            {
                title: 'User name',
                imageSrc: user1.src,
            },
            {
                title: 'User name',
                imageSrc: user1.src,
            },
            {
                title: 'User name',
                imageSrc: user1.src,
            },
            {
                title: 'User name',
                imageSrc: user1.src,
            },
            {
                title: 'User name',
                imageSrc: user1.src,
            },
            {
                title: 'User name',
                imageSrc: user1.src,
            },
            {
                title: 'User name',
                imageSrc: user1.src,
            },
        ],
    },
];

const TASKS: Array<{
    title: string;
    isPrivate: boolean;
    label: {
        title: string;
        theme: LabelProps['theme'];
    };
}> = [
    {
        title: 'Consider updating your project progress',
        isPrivate: true,
        label: {
            theme: 'info',
            title: 'Sales',
        },
    },
    {
        title: "Consider delegating Gearóid's tasks",
        isPrivate: false,
        label: {
            theme: 'warning',
            title: 'H2 Marking',
        },
    },
    {
        title: 'Consider updating your project progress',
        isPrivate: false,
        label: {
            theme: 'warning',
            title: 'H2 Marking',
        },
    },
    {
        title: 'Progress on team goals and objectives',
        isPrivate: false,
        label: {
            theme: 'warning',
            title: 'H2 Marking',
        },
    },
    {
        title: 'Consider updating your project progress',
        isPrivate: false,
        label: {
            theme: 'warning',
            title: 'H2 Marking',
        },
    },
    {
        title: 'Progress on team goals and objectives',
        isPrivate: false,
        label: {
            theme: 'success',
            title: 'Customer',
        },
    },
    {
        title: 'Progress on team goals and objectives',
        isPrivate: false,
        label: {
            theme: 'success',
            title: 'Customer',
        },
    },
    {
        title: 'Consider updating your project progress',
        isPrivate: false,
        label: {
            theme: 'success',
            title: 'Customer',
        },
    },
    {
        title: 'New customer shout out',
        isPrivate: false,
        label: {
            theme: 'info',
            title: 'Sales',
        },
    },
    {
        title: 'Meet with stakeholders',
        isPrivate: false,
        label: {
            theme: 'info',
            title: 'Sales',
        },
    },
    {
        title: 'Meeting with sales department',
        isPrivate: false,
        label: {
            theme: 'info',
            title: 'Sales',
        },
    },
    {
        title: 'Consider updating your project progress',
        isPrivate: false,
        label: {
            theme: 'success',
            title: 'Customer',
        },
    },
    {
        title: 'Aracte camarian',
        isPrivate: false,
        label: {
            theme: 'success',
            title: 'Customer',
        },
    },
];

export function TasksPreview(props: Pick<PreviewWrapperProps, 'styles'>) {
    const editor = useMarkdownEditor({
        initial: {
            mode: 'wysiwyg',
            toolbarVisible: true,
        },
        md: {
            html: true,
            linkify: true,
            breaks: true,
        },
    });

    return (
        <PreviewWrapper {...props}>
            {({isLightTheme, themeSwitcher}) => {
                const contrastBackgroundColor = isLightTheme
                    ? 'rgba(0,0,0,0.05)'
                    : 'rgba(255,255,255,0.1)';

                return (
                    <Flex height="100%" maxHeight="100%" minWidth="1080px">
                        {/* Sidebar */}
                        <Flex
                            direction="column"
                            maxHeight="100%"
                            minHeight="100%"
                            overflow="auto"
                            height="100%"
                            width="200px"
                            maxWidth="200px"
                            minWidth="200px"
                            alignItems="flex-start"
                        >
                            <Box spacing={{px: 4, py: 2}} width="100%" minWidth="100%">
                                <Logo {...LOGO_PROPS} className={spacing({mx: 7, mb: 2})} />

                                <Divider orientation="horizontal" className={spacing({mb: 3})} />

                                <Menu items={MENU_ITEMS} />

                                <Divider orientation="horizontal" className={spacing({my: 3})} />

                                {COLLAPSIBLE_MENUS.map((menu, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <Disclosure
                                                expanded={menu.expanded}
                                                defaultExpanded={menu.defaultExpanded}
                                                summary={
                                                    <Text
                                                        variant="body-1"
                                                        color="secondary"
                                                        className={spacing({mx: 3, my: 1})}
                                                    >
                                                        {menu.title}
                                                    </Text>
                                                }
                                                size="l"
                                                arrowPosition="right"
                                            >
                                                <Flex direction="column" gap={1} spacing={{my: 2}}>
                                                    {menu.items.map((item, itemIndex) => {
                                                        return (
                                                            <Button
                                                                key={itemIndex}
                                                                width="max"
                                                                view="flat"
                                                                style={{
                                                                    justifyContent: 'flex-start',
                                                                }}
                                                            >
                                                                <Flex gap={0.5}>
                                                                    {item.imageSrc && (
                                                                        <User
                                                                            avatar={{
                                                                                imgUrl: item.imageSrc,
                                                                            }}
                                                                            className={spacing({
                                                                                mr: 1,
                                                                            })}
                                                                            size="xs"
                                                                        />
                                                                    )}

                                                                    {item.title}
                                                                </Flex>
                                                            </Button>
                                                        );
                                                    })}
                                                </Flex>
                                            </Disclosure>

                                            <Divider
                                                orientation="horizontal"
                                                className={spacing({my: 3})}
                                            />
                                        </Fragment>
                                    );
                                })}

                                <Menu items={BOTTOM_MENU_ITEMS} />
                            </Box>
                        </Flex>

                        <Divider orientation="vertical" />

                        {/* Content */}
                        <Flex grow={1} direction="column" overflow="auto" position="relative">
                            {/* Top bar */}
                            <Flex
                                direction="column"
                                style={{backgroundColor: 'var(--g-color-base-background)', top: 0}}
                                position="sticky"
                                gap={2}
                            >
                                <Flex
                                    gap={2}
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={{px: 5, pt: 2}}
                                >
                                    <User
                                        name="Blake's Tasks - Apollo Enterprises"
                                        avatar={{imgUrl: user1.src}}
                                    />
                                    <Flex alignItems="center" gap={2}>
                                        <TextInput
                                            placeholder="Search"
                                            startContent={
                                                <Text color="secondary" style={{display: 'flex'}}>
                                                    <Icon
                                                        data={Magnifier}
                                                        className={spacing({ml: 2, mr: 0.5})}
                                                        size={14}
                                                    />
                                                </Text>
                                            }
                                        />
                                        {themeSwitcher}
                                    </Flex>
                                </Flex>
                                <Flex>
                                    <TabList value={ACTIVE_TAB} className={spacing({px: 5})}>
                                        {TAB_ITEMS.map((tab) => {
                                            return (
                                                <Tab key={tab.id} value={tab.id} counter={25}>
                                                    {tab.title}
                                                </Tab>
                                            );
                                        })}
                                    </TabList>

                                    <Flex grow={1}></Flex>
                                </Flex>
                            </Flex>

                            <Divider orientation="horizontal"></Divider>

                            {/* Tasks */}
                            <Flex
                                grow={1}
                                gap={5}
                                spacing={{p: 5}}
                                overflow="auto"
                                style={{backgroundColor: contrastBackgroundColor}}
                            >
                                <Card
                                    overflow="auto"
                                    view="raised"
                                    style={{
                                        flexGrow: 1,
                                        flexBasis: '50%',
                                        backgroundColor: 'var(--g-color-base-background)',
                                        border: 'none',
                                    }}
                                >
                                    <Flex direction="column" overflow="auto" height="100%">
                                        <Flex
                                            spacing={{mt: 4, mx: 5}}
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <Flex alignItems="center">
                                                <Text variant="subheader-2">Today</Text>
                                                <Button view="flat-secondary">
                                                    <Icon data={Calendar} />
                                                </Button>
                                            </Flex>
                                            <Flex gap={2}>
                                                <Button view="flat-secondary">
                                                    <Icon data={ArrowUpArrowDown} />
                                                    Sort
                                                </Button>
                                                <div>
                                                    <Button
                                                        view="action"
                                                        pin="round-brick"
                                                        style={{marginRight: '1px'}}
                                                    >
                                                        <Icon data={Plus} />
                                                        Add Task
                                                    </Button>
                                                    <Button view="action" pin="brick-round">
                                                        <Icon data={ChevronDown} />
                                                    </Button>
                                                </div>
                                            </Flex>
                                        </Flex>

                                        <div>
                                            <TabList value="active" className={spacing({mx: 5})}>
                                                <Tab value="active" counter={25}>
                                                    Active
                                                </Tab>
                                                <Tab value="closed" counter={2}>
                                                    Closed
                                                </Tab>
                                            </TabList>
                                        </div>

                                        <div
                                            style={{overflow: 'auto'}}
                                            className={spacing({mt: 1})}
                                        >
                                            <TasksList />
                                        </div>

                                        <Flex grow={1} spacing={{px: 5, pb: 5, mt: 10}}>
                                            <Button>
                                                More
                                                <Icon data={ChevronDown} />
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </Card>

                                <Card
                                    overflow="auto"
                                    view="raised"
                                    position="relative"
                                    style={{
                                        flexGrow: 1,
                                        flexBasis: '50%',
                                        backgroundColor: 'var(--g-color-base-background)',
                                        border: 'none',
                                    }}
                                >
                                    <Box height="100%" maxHeight="100%" overflow="auto">
                                        <Flex
                                            direction="column"
                                            position="sticky"
                                            style={{
                                                backgroundColor: 'var(--g-color-base-background)',
                                                top: 0,
                                            }}
                                        >
                                            <Flex
                                                spacing={{p: 5}}
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                <Button view="outlined-action">
                                                    <Icon data={Check} />
                                                    Mark Complete
                                                </Button>

                                                <Flex gap={1}>
                                                    <Button view="flat-secondary">
                                                        <Icon data={Paperclip} />
                                                    </Button>
                                                    <Button view="flat-secondary">
                                                        <Icon data={FolderTree} />
                                                    </Button>
                                                    <Button view="flat-secondary">
                                                        <Icon data={Link} />
                                                    </Button>
                                                    <Button view="flat-success">
                                                        <Icon data={ThumbsUp} />
                                                    </Button>
                                                    <Button view="flat-danger">
                                                        <Icon data={ThumbsDown} />
                                                    </Button>
                                                    <Button view="flat-secondary">
                                                        <Icon data={Clock} />
                                                    </Button>
                                                    <Button view="flat-secondary">
                                                        <Icon data={Xmark} />
                                                    </Button>
                                                </Flex>
                                            </Flex>

                                            <Alert
                                                corners="square"
                                                view="filled"
                                                message="This task is private to you, please take care"
                                                icon={
                                                    <Text color="secondary">
                                                        <Icon data={Lock} size={18} />
                                                    </Text>
                                                }
                                            />
                                        </Flex>

                                        <Flex
                                            direction="column"
                                            spacing={{p: 5}}
                                            gap={5}
                                            overflow="auto"
                                        >
                                            <Text variant="subheader-2">
                                                Consider updating your project progress
                                            </Text>
                                            <Flex gap={3} direction="column">
                                                {[
                                                    {
                                                        title: 'Assignee',
                                                        content: (
                                                            <User
                                                                size="s"
                                                                avatar={{imgUrl: user1.src}}
                                                                name="Blake"
                                                            />
                                                        ),
                                                    },
                                                    {
                                                        title: 'Due date',
                                                        content: (
                                                            <Flex gap={1} alignItems="center">
                                                                <Text>2017-04-05 09:30 PM</Text>
                                                                <Text color="secondary">
                                                                    <Icon
                                                                        data={Calendar}
                                                                        size={16}
                                                                    />
                                                                </Text>
                                                            </Flex>
                                                        ),
                                                    },
                                                    {
                                                        title: 'Projects',
                                                        content: (
                                                            <Button size="s" view="flat-secondary">
                                                                <Icon data={Plus} />
                                                                Add project
                                                            </Button>
                                                        ),
                                                    },
                                                    {
                                                        title: 'Labels',
                                                        content: (
                                                            <Flex gap={1} alignItems="center">
                                                                <Label
                                                                    size="s"
                                                                    theme={TASKS[0].label.theme}
                                                                >
                                                                    {TASKS[0].label.title}
                                                                </Label>
                                                                <Button
                                                                    size="s"
                                                                    view="flat-secondary"
                                                                >
                                                                    <Icon data={Plus} />
                                                                </Button>
                                                            </Flex>
                                                        ),
                                                    },
                                                    {
                                                        title: 'Private task',
                                                        content: <Switch defaultChecked />,
                                                    },
                                                    {
                                                        title: 'Description',
                                                        content: (
                                                            <Text whiteSpace="break-spaces">
                                                                Contrary to popular belief, Lorem
                                                                Ipsum is not simply random text. It
                                                                has roots in a piece of classical
                                                                Latin literature from 45 BC, making
                                                                it over 2000 years old. Richard
                                                                McClintock, a Latin professor at
                                                                Hampden-Sydney College in Virginia,
                                                                looked up one of the more obscure
                                                                Latin words, consectetur, from a
                                                                Lorem Ipsum passage, and going
                                                                through the cites of the word in
                                                                classical literature, discovered the
                                                                undoubtable source. Lorem Ipsum
                                                                comes from sections 1.10.32 and
                                                                1.10.33 of "de Finibus Bonorum et
                                                                Malorum" (The Extremes of Good and
                                                                Evil) by Cicero, written in 45 BC.{' '}
                                                            </Text>
                                                        ),
                                                    },
                                                ].map(({title, content}, index) => {
                                                    return (
                                                        <Flex
                                                            key={index}
                                                            alignItems="аlex-start"
                                                            gap={4}
                                                        >
                                                            <Text
                                                                style={{
                                                                    display: 'inline-block',
                                                                    width: '74px',
                                                                }}
                                                                variant="body-1"
                                                                color="secondary"
                                                            >
                                                                {title}
                                                            </Text>
                                                            {content}
                                                        </Flex>
                                                    );
                                                })}
                                            </Flex>
                                        </Flex>

                                        <Flex
                                            height="200px"
                                            direction="column"
                                            position="sticky"
                                            style={{
                                                backgroundColor: 'var(--g-color-base-background)',
                                                bottom: 0,
                                            }}
                                        >
                                            <Divider style={{width: '100%'}} />

                                            <Card
                                                view="outlined"
                                                spacing={{mx: 5, mt: 5, px: 2, py: 2}}
                                                style={{flexGrow: 1}}
                                            >
                                                <MarkdownEditorView stickyToolbar editor={editor} />
                                            </Card>

                                            <Flex
                                                spacing={{m: 5}}
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                <Flex gap={1} alignItems="center">
                                                    <Text color="secondary">Collaborators</Text>
                                                    <Button view="flat">
                                                        <Icon data={Plus} />
                                                    </Button>
                                                </Flex>

                                                <Button view="outlined-action" disabled>
                                                    Send
                                                </Button>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </Card>
                            </Flex>

                            {/* Footer */}
                            <Flex
                                spacing={{px: 5, py: 2}}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text color="secondary">
                                    © 2011—{new Date().getFullYear()} Copyright
                                </Text>

                                <Flex gap={4} alignItems="center">
                                    <Text>Privacy Policy</Text>
                                    <Text>Terms of Use</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                );
            }}
        </PreviewWrapper>
    );
}

function Menu({items}: {items: MenuItem[]}) {
    return (
        <Flex direction="column" gap={1} width="100%">
            {items.map((menuItem) => {
                return (
                    <Button
                        key={menuItem.id}
                        width="max"
                        view="flat"
                        selected={menuItem.current}
                        style={{justifyContent: 'flex-start'}}
                    >
                        <Icon data={menuItem.icon} size={16} />
                        {menuItem.title}
                    </Button>
                );
            })}
        </Flex>
    );
}

function TasksList() {
    const activeTaskIndex = 0;

    return (
        <Fragment>
            {TASKS.map((task, index) => {
                const isActive = activeTaskIndex === index;

                return (
                    <Flex
                        key={index}
                        height="44px"
                        alignItems="center"
                        spacing={isActive ? {pl: 5, pr: 3, mr: 3} : {px: 5, pr: 3}}
                        gap={2}
                        style={{
                            cursor: 'pointer',
                            ...(isActive
                                ? {
                                      backgroundColor: 'var(--g-color-private-brand-200)',
                                  }
                                : {}),
                        }}
                    >
                        <Checkbox />
                        <Text ellipsis style={{flexGrow: 1}} color={isActive ? 'brand' : undefined}>
                            {task.title}
                        </Text>
                        <Flex
                            style={{maxWidth: '80px', width: '80px'}}
                            justifyContent="flex-end"
                            alignItems={'center'}
                            gap={2}
                        >
                            <Label theme={task.label.theme}>{task.label.title}</Label>
                            {task.isPrivate && (
                                <Text color="secondary">
                                    <Icon data={Lock} />
                                </Text>
                            )}
                        </Flex>
                    </Flex>
                );
            })}
        </Fragment>
    );
}
