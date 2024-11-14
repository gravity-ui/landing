import {Block, PageContent} from '@gravity-ui/page-constructor';
import {CustomBlockModel} from 'src/blocks/types';

export interface CustomPageContent {
    blocks: (Block | CustomBlockModel)[];
    menu?: PageContent['menu'];
    background?: PageContent['background'];
}
