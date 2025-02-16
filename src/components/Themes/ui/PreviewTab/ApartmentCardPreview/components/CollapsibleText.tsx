import {ChevronDown, ChevronUp} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text, spacing} from '@gravity-ui/uikit';
import {useState} from 'react';

interface CollapsibleTextProps {
    text: string;
}

export function CollapsibleText({text}: CollapsibleTextProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <Flex gap={2} direction="column" alignItems="flex-start">
                {text
                    .split('\n')
                    .slice(0, isExpanded ? undefined : 1)
                    .map((paragraph, index) => {
                        return (
                            <Text key={index} variant="body-1" className={spacing({m: 0, p: 0})}>
                                {paragraph}
                            </Text>
                        );
                    })}
            </Flex>
            <Button
                view="flat"
                size="s"
                className={spacing({mt: 1})}
                onClick={() => setIsExpanded((value) => !value)}
            >
                {isExpanded ? 'Hide' : 'More'}
                <Icon data={isExpanded ? ChevronUp : ChevronDown} size={12} />
            </Button>
        </div>
    );
}
