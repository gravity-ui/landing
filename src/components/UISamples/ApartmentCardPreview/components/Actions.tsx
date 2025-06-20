import {BookOpen, CircleRuble, Heart, House, Person} from '@gravity-ui/icons';
import {Button, Divider, Icon, spacing} from '@gravity-ui/uikit';
import {Fragment} from 'react';

const ACTIONS = [
    [
        {title: 'Rent out housing', icon: House},
        {title: 'Bookings', icon: BookOpen},
        {title: 'Favorites', icon: Heart},
    ],
    [{title: 'Login', icon: Person}],
    [{title: 'RUB', icon: CircleRuble}],
];

interface ActionsProps {
    isCompact: boolean;
}

export function Actions({isCompact}: ActionsProps) {
    if (isCompact) {
        return null;
    }

    return (
        <Fragment>
            {ACTIONS.map((group, groupIndex) => {
                return (
                    <Fragment key={groupIndex}>
                        {group.map((action, actionIndex) => {
                            return (
                                <Fragment key={actionIndex}>
                                    <Button view="flat">
                                        <Icon data={action.icon} />
                                        {action.title}
                                    </Button>
                                </Fragment>
                            );
                        })}

                        <Divider orientation="vertical" className={spacing({my: 1})} />
                    </Fragment>
                );
            })}
        </Fragment>
    );
}
