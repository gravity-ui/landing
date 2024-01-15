import {ArrowLeft, ArrowRight} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text} from '@gravity-ui/uikit';
import {block} from 'src/utils';

const b = block('article-navigations');

import './ArticleNavigations.scss';

interface ArticleNavigationsProps {
    previousTitle: string;
    nextTitle: string;
    nextHandler: () => void;
    prevHandler: () => void;
}

export const ArticleNavigations = ({
    previousTitle,
    nextTitle,
    nextHandler,
    prevHandler,
}: ArticleNavigationsProps) => {
    return (
        <div className={b()}>
            <div className={b('item')}>
                <Button onClick={prevHandler} className={b('item-button')} width="max">
                    <Icon data={ArrowLeft} size={16} />
                </Button>
                <Flex direction="column" gap="1" style={{padding: '8px 0'}}>
                    <Text variant="body-short" color="light-complementary">
                        Previous
                    </Text>
                    <Text variant="body-2" color="primary">
                        {previousTitle}
                    </Text>
                </Flex>
            </div>
            <div className={b('item', {full: true})}>
                <Flex direction="column" gap="1" style={{padding: '8px 0'}}>
                    <Text variant="body-short" color="light-complementary">
                        Next
                    </Text>
                    <Text variant="body-2" color="primary">
                        {nextTitle}
                    </Text>
                </Flex>
                <Button onClick={nextHandler} className={b('item-button')} width="max">
                    <Icon data={ArrowRight} size={16} />
                </Button>
            </div>
        </div>
    );
};
