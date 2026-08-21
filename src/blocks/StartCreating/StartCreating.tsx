import {ChevronLeft, ChevronRight, CircleCheck, Code, FaceRobot} from '@gravity-ui/icons';
import {Animatable, AnimateBlock, YFMWrapper} from '@gravity-ui/page-constructor';
import {Button, ClipboardButton, Icon, Tab, TabList} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash.js';
import React from 'react';

import {CustomScrollbar} from '../../components/CustomScrollbar';
import {SCROLL_TO_TEMPLATES_EVENT} from '../../constants';
import {block} from '../../utils';
import {CustomBlock} from '../constants';

import './StartCreating.scss';

const b = block('start-creating');

interface CommandProps {
    command: string;
}

const Command: React.FC<CommandProps> = ({command}) => {
    const html = Prism.highlight(command, Prism.languages.bash, 'bash');
    return (
        <div className={b('command')}>
            <CustomScrollbar element="pre" axis="horizontal">
                <code className={b('command-code')} dangerouslySetInnerHTML={{__html: html}} />
            </CustomScrollbar>
            <ClipboardButton text={command} className={b('command-copy')} size="m" />
        </div>
    );
};

export type StartCreatingProps = Animatable & {
    title: string;
    ai: {
        title: string;
        install: {
            title: string;
            description: string;
            command: string;
        };
        build: {
            title: string;
            examples: string[];
            label: string;
        };
    };
    manual: {
        title: string;
        description: string;
        command: string;
    };
};

export type StartCreatingModel = StartCreatingProps & {
    type: CustomBlock.StartCreating;
};

const AI_TAB = 'ai';
const MANUAL_TAB = 'manual';

export const StartCreatingBlock: React.FC<StartCreatingProps> = ({animated, title, ai, manual}) => {
    const {t} = useTranslation('home');
    const blockRef = React.useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = React.useState<string>(AI_TAB);
    const [exampleIndex, setExampleIndex] = React.useState(0);

    React.useEffect(() => {
        const scrollTo = () => {
            blockRef.current?.scrollIntoView({behavior: 'smooth'});
        };

        window.addEventListener(SCROLL_TO_TEMPLATES_EVENT, scrollTo);

        return () => {
            window.removeEventListener(SCROLL_TO_TEMPLATES_EVENT, scrollTo);
        };
    }, []);

    const examplesCount = ai.build.examples.length;
    const showPrevExample = () =>
        setExampleIndex((index) => (index - 1 + examplesCount) % examplesCount);
    const showNextExample = () => setExampleIndex((index) => (index + 1) % examplesCount);

    return (
        <React.Fragment>
            <div ref={blockRef} />
            <AnimateBlock className={b()} animate={animated}>
                <h2 className={b('title')} data-section="templates">
                    <YFMWrapper
                        content={title}
                        modifiers={{constructor: true}}
                        contentClassName={b('title-content')}
                    />
                </h2>
                <section className={b('card')}>
                    <div className={b('tabs-wrapper')}>
                        <TabList
                            size="xl"
                            className={b('tabs')}
                            value={activeTab}
                            onUpdate={setActiveTab}
                        >
                            <Tab value={AI_TAB} icon={<Icon data={FaceRobot} size={20} />}>
                                {ai.title}
                            </Tab>
                            <Tab value={MANUAL_TAB} icon={<Icon data={Code} size={20} />}>
                                {manual.title}
                            </Tab>
                        </TabList>
                    </div>
                    {activeTab === AI_TAB ? (
                        <div className={b('steps')}>
                            <div className={b('step')}>
                                <div className={b('step-header')}>
                                    <div className={b('step-number')}>1</div>
                                    <h3 className={b('step-title')}>{ai.install.title}</h3>
                                </div>
                                <p className={b('step-description')}>{ai.install.description}</p>
                                <Command command={ai.install.command} />
                            </div>
                            <div className={b('step')}>
                                <div className={b('step-header')}>
                                    <div className={b('step-number')}>2</div>
                                    <h3 className={b('step-title')}>{ai.build.title}</h3>
                                </div>
                                <div className={b('example')}>
                                    <div className={b('example-header')}>
                                        <Button
                                            view="flat-secondary"
                                            size="s"
                                            onClick={showPrevExample}
                                            aria-label={t('start_creating_example_prev')}
                                        >
                                            <Icon data={ChevronLeft} size={16} />
                                        </Button>
                                        <Button
                                            view="flat-secondary"
                                            size="s"
                                            onClick={showNextExample}
                                            aria-label={t('start_creating_example_next')}
                                        >
                                            <Icon data={ChevronRight} size={16} />
                                        </Button>
                                        <span className={b('example-counter')}>
                                            {t('start_creating_example_counter', {
                                                current: exampleIndex + 1,
                                                total: examplesCount,
                                            })}
                                        </span>
                                    </div>
                                    <div className={b('example-texts')} aria-live="polite">
                                        {ai.build.examples.map((example, index) => (
                                            <p
                                                key={index}
                                                className={b('example-text', {
                                                    hidden: index !== exampleIndex,
                                                })}
                                            >
                                                {example}
                                            </p>
                                        ))}
                                    </div>
                                    <div className={b('example-label')}>
                                        <Icon data={CircleCheck} size={16} />
                                        {ai.build.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={b('manual')}>
                            <p className={b('step-description')}>{manual.description}</p>
                            <Command command={manual.command} />
                        </div>
                    )}
                </section>
            </AnimateBlock>
        </React.Fragment>
    );
};

export default StartCreatingBlock;
