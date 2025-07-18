import {
    ConnectionLayer,
    EAnchorType,
    ECanChangeBlockGeometry,
    Graph,
    GraphState,
    TBlock,
} from '@gravity-ui/graph';
import {
    GraphBlock,
    GraphCanvas,
    HookGraphParams,
    useGraph,
    useGraphEvent,
} from '@gravity-ui/graph/react';
import {LayoutColumns, LayoutSideContentRight} from '@gravity-ui/icons';
import {
    Button,
    Flex,
    Icon,
    SegmentedRadioGroup,
    SegmentedRadioGroupOptionProps,
    Text,
} from '@gravity-ui/uikit';
import random from 'lodash/random';
import {memo, useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';

import {block} from '../../../utils';

import {ActionBlock} from './ActionBlock';
import {ConfigEditor, ConfigEditorController} from './Editor';
import './Playground.scss';
import {GraphSettings} from './Settings';
import {TextBlock} from './TextBlock';
import {Toolbox} from './Toolbox';
import {
    GravityActionBlockIS,
    GravityTextBlockIS,
    createActionBlock,
    createTextBlock,
    generatePlaygroundActionBlocks,
} from './generateLayout';

const b = block('graph-playground');
const radioB = block('graph-playground-radio-buton');

const generated = generatePlaygroundActionBlocks(0, 5);

const textBlocks = [
    createTextBlock(
        -144,
        80,
        448,
        0,
        'To create new block, drag and drop new connection from edge',
    ),
    createTextBlock(-64, 160, 240, 1, 'Use scroll to zoom in or out'),
];

const config: HookGraphParams = {
    viewConfiguration: {
        colors: {
            selection: {
                background: 'rgba(255, 190, 92, 0.1)',
                border: 'rgba(255, 190, 92, 1)',
            },
            connection: {
                background: 'rgba(255, 255, 255, 0.5)',
                selectedBackground: 'rgba(234, 201, 74, 1)',
            },
            block: {
                background: 'rgba(37, 27, 37, 1)',
                border: 'rgba(229, 229, 229, 0.2)',
                selectedBorder: 'rgba(255, 190, 92, 1)',
                text: 'rgba(255, 255, 255, 1)',
            },
            anchor: {
                background: 'rgba(255, 190, 92, 1)',
            },
            canvas: {
                layerBackground: 'rgba(22, 13, 27, 1)',
                belowLayerBackground: 'rgba(22, 13, 27, 1)',
                dots: 'rgba(255, 255, 255, 0.2)',
                border: 'rgba(255, 255, 255, 0.3)',
            },
        },
        constants: {
            block: {
                SCALES: [0.1, 0.2, 0.5],
            },
        },
    },
    settings: {
        canDragCamera: true,
        canZoomCamera: true,
        canDuplicateBlocks: false,
        canChangeBlockGeometry: ECanChangeBlockGeometry.ALL,
        canCreateNewConnections: true,
        showConnectionArrows: false,
        scaleFontSize: 1,
        useBezierConnections: true,
        useBlocksAnchors: true,
        showConnectionLabels: false,
        blockComponents: {
            [GravityActionBlockIS]: ActionBlock,
            [GravityTextBlockIS]: TextBlock,
        },
    },
    layers: [
        [
            ConnectionLayer,
            {
                // @ts-expect-error TODO: Layer types do not propagate through the graph configuration
                drawLine: (start: {x: number; y: number}, end: {x: number; y: number}) => {
                    const path = new Path2D();
                    path.moveTo(start.x, start.y);
                    path.lineTo(end.x, end.y);
                    return {
                        path,
                        style: {
                            color: 'rgba(234, 201, 74, 1)',
                            dash: [5, 5], // Dashed line
                        },
                    };
                },
            },
        ],
    ],
};

const graphSizeOptions: SegmentedRadioGroupOptionProps[] = [
    {value: '1', content: '1'},
    {value: '100', content: '100'},
    {value: '1000', content: '1 000'},
    {value: '10000', content: '10 000'},
];

function useFn<ARG extends Array<unknown>, RT>(handler: (...args: ARG) => RT) {
    const handlerRef = useRef<typeof handler>(handler);

    handlerRef.current = handler;

    return useCallback((...args: ARG) => {
        return handlerRef.current(...args);
    }, []);
}

export const GraphPlayground = memo(({className}: {className: string}) => {
    const {graph, setEntities, updateEntities, start} = useGraph(config);
    const editorRef = useRef<ConfigEditorController>(null);

    const [editorOpened, setEditorOpened] = useState(true);

    const updateVisibleConfig = useFn(() => {
        const currentConfig = graph.rootStore.getAsConfig();
        editorRef.current?.setContent({
            blocks: currentConfig.blocks || [],
            connections: currentConfig.connections || [],
        });
    });

    useGraphEvent(graph, 'block-change', ({block}) => {
        editorRef.current?.updateBlocks([block]);
        editorRef.current?.scrollTo(block.id);
    });

    useGraphEvent(graph, 'blocks-selection-change', ({changes}) => {
        editorRef.current?.updateBlocks([
            ...changes.add.map((id) => ({
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ...graph.rootStore.blocksList.getBlock(id)!,
                selected: true,
            })),
            ...changes.removed.map((id) => ({
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ...graph.rootStore.blocksList.getBlock(id)!,
                selected: false,
            })),
        ]);
    });

    useGraphEvent(
        graph,
        'connection-created',
        ({sourceBlockId, sourceAnchorId, targetBlockId, targetAnchorId}, event) => {
            event.preventDefault();
            if (!sourceAnchorId) {
                return;
            }
            const pullSourceAnchor = graph.rootStore.blocksList
                .getBlockState(sourceBlockId)
                .getAnchorById(sourceAnchorId);
            if (pullSourceAnchor.state.type === EAnchorType.IN) {
                graph.api.addConnection({
                    sourceBlockId: targetBlockId,
                    sourceAnchorId: targetAnchorId,
                    targetBlockId: sourceBlockId,
                    targetAnchorId: sourceAnchorId,
                });
            } else {
                graph.api.addConnection({
                    sourceBlockId: sourceBlockId,
                    sourceAnchorId: sourceAnchorId,
                    targetBlockId: targetBlockId,
                    targetAnchorId: targetAnchorId,
                });
            }
            updateVisibleConfig();
        },
    );

    useGraphEvent(
        graph,
        'connection-create-drop',
        ({sourceBlockId, sourceAnchorId, targetBlockId, point}) => {
            if (targetBlockId) {
                return;
            }
            let block: TBlock;
            const pullSourceAnchor = graph.rootStore.blocksList
                .getBlockState(sourceBlockId)
                .getAnchorById(sourceAnchorId);
            if (pullSourceAnchor.state.type === EAnchorType.IN) {
                block = createActionBlock(
                    point.x - 126,
                    point.y - 63,
                    graph.rootStore.blocksList.$blocksMap.value.size + 1,
                );
                graph.api.addBlock(block);
                graph.api.addConnection({
                    sourceBlockId: block.id,
                    sourceAnchorId: block.anchors[1].id,
                    targetBlockId: sourceBlockId,
                    targetAnchorId: sourceAnchorId,
                });
            } else {
                block = createActionBlock(
                    point.x,
                    point.y - 63,
                    graph.rootStore.blocksList.$blocksMap.value.size + 1,
                );
                graph.api.addBlock(block);
                graph.api.addConnection({
                    sourceBlockId: sourceBlockId,
                    sourceAnchorId: sourceAnchorId,
                    targetBlockId: block.id,
                    targetAnchorId: block.anchors[0].id,
                });
            }
            graph.zoomTo([block.id], {transition: 250});
            updateVisibleConfig();
            editorRef.current?.scrollTo(block.id);
        },
    );

    useLayoutEffect(() => {
        setEntities({
            blocks: [...textBlocks, ...generated.blocks],
            connections: generated.connections,
        });
        updateVisibleConfig();
    }, [setEntities]);

    useGraphEvent(graph, 'state-change', ({state}) => {
        if (state === GraphState.ATTACHED) {
            start();
            graph.zoomTo('center', {padding: 300});
        }
    });

    const addNewBlock = useFn(() => {
        const rect = graph.api.getUsableRect();
        const x = random(rect.x, rect.x + rect.width + 100);
        const y = random(rect.y, rect.y + rect.height + 100);
        const block = createActionBlock(x, y, graph.rootStore.blocksList.$blocksMap.value.size + 1);
        graph.api.addBlock(block);
        graph.zoomTo([block.id], {transition: 250});
        updateVisibleConfig();
        editorRef.current?.scrollTo(block.id);
    });

    const renderBlockFn = useFn((graph: Graph, block: TBlock) => {
        const view = graph.rootStore.blocksList.getBlockState(block.id)?.getViewComponent();
        if (view instanceof ActionBlock) {
            return view.renderHTML();
        }
        if (view instanceof TextBlock) {
            return view.renderHTML();
        }
        return (
            <GraphBlock graph={graph} block={block}>
                Unknown block <>{block.id.toString()}</>
            </GraphBlock>
        );
    });

    useGraphEvent(graph, 'blocks-selection-change', ({list}) => {
        if (list.length === 1) {
            editorRef.current?.scrollTo(list[0]);
        }
    });

    useEffect(() => {
        const fn = (e: KeyboardEvent) => {
            if (e.code === 'Backspace') {
                graph.api.deleteSelected();
                updateVisibleConfig();
            }
        };
        document.body.addEventListener('keydown', fn);
        return () => document.body.removeEventListener('keydown', fn);
    });

    const updateGraphSize = async (value: string) => {
        let nextConfig;
        switch (value) {
            case graphSizeOptions[0].value: {
                nextConfig = generatePlaygroundActionBlocks(0, 5);
                break;
            }
            case graphSizeOptions[1].value: {
                nextConfig = generatePlaygroundActionBlocks(10, 100);
                break;
            }
            case graphSizeOptions[2].value: {
                nextConfig = generatePlaygroundActionBlocks(23, 150);
                setEditorOpened(false);
                break;
            }
            case graphSizeOptions[3].value: {
                graph.updateSettings({
                    useBezierConnections: false,
                });
                setEditorOpened(false);
                nextConfig = generatePlaygroundActionBlocks(50, 150);
                break;
            }
        }
        if (nextConfig) {
            await new Promise((resolve) => setTimeout(resolve, 200));
            setEntities({blocks: nextConfig?.blocks, connections: nextConfig?.connections});
            graph.zoomTo('center', {transition: 500});
            updateVisibleConfig();
        }
    };

    return (
        <Flex className={b(null, className)} gap={editorOpened ? 8 : 0}>
            <Button className={b('layout-button')} onClick={() => setEditorOpened(!editorOpened)}>
                <Icon data={editorOpened ? LayoutSideContentRight : LayoutColumns} />
            </Button>
            <Flex direction="column" grow={1} className={b('content', {graph: true})} gap={6}>
                <Flex direction="row" gap={4} alignItems="center">
                    <Text variant="header-1" className={b('title')}>
                        Blocks
                    </Text>
                    <SegmentedRadioGroup
                        className={radioB()}
                        options={graphSizeOptions}
                        defaultValue={graphSizeOptions[0].value}
                        onUpdate={updateGraphSize}
                        size="l"
                    />
                </Flex>
                <Flex grow={1} className={b('view', {'graph-editor': true})}>
                    <Flex className={b('graph-tools')} direction="column">
                        <Toolbox graph={graph} className={b('zoom', 'button-group')} />
                        <GraphSettings
                            className={b('graph-settings')}
                            radionButtonClass={radioB()}
                            graph={graph}
                        />
                    </Flex>
                    <GraphCanvas graph={graph} renderBlock={renderBlockFn} />
                </Flex>
            </Flex>

            <Flex
                direction="column"
                grow={1}
                className={b('content', {editor: true, hidden: !editorOpened})}
                gap={6}
            >
                <Text variant="header-1" className={b('title')}>
                    JSON Editor
                </Text>
                <Flex grow={1} className={b('view', {'config-editor': true})}>
                    <ConfigEditor
                        ref={editorRef}
                        onChange={({blocks, connections}) => {
                            updateEntities({blocks, connections});
                        }}
                        addBlock={addNewBlock}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
});
