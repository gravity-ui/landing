import {Link, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../../../utils';

const b = block('examples-dashboard');
import './Dashboard.scss';
import {AsideHeader, FooterItem} from '@gravity-ui/navigation';
import {footerMenuItems, menuItems} from './constants';

type DashboardProps = {};

const theme = 'dark';

// @todo-opensourcenight Make dashboard page
// https://www.figma.com/design/MnKaEyxPs9Zeyhg6pmf4uX/OS-Night-Design-(Published)?node-id=1-20362&t=cBOGiZgT0jwhnCOY-4
export const Dashboard: React.FC<DashboardProps> = () => {
    const [compact, setCompact] = React.useState(false);

    return (
        <div className={b()}>
            <main className={b('main')}>
                <ThemeProvider theme={theme} scoped>
                    <AsideHeader
                        compact={compact}
                        logo={{text:'Gravity B2B'}}
                        menuItems={menuItems}
                        renderFooter={({compact}) => (
                            <React.Fragment>
                                {footerMenuItems.map(item => (
                                    <FooterItem
                                        key={item.id}
                                        item={item}
                                        compact={compact}
                                    />
                                ))}
                            </React.Fragment>
                        )}
                        onChangeCompact={setCompact}
                    />
                </ThemeProvider>
            </main>
            <footer className={b('footer')}>
                <Link href={'/examples'}>Open in Examples page</Link>
                <Link href={'/examples/dashboard'}>Open in Separate page</Link>
            </footer>
        </div>
    );
};
