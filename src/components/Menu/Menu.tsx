import {Col, Grid, Row} from '@gravity-ui/page-constructor';
import {Icon} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import React from 'react';

import nextI18nextConfig from '../../../next-i18next.config';
import linkArrowIcon from '../../assets/icons/link-arrow.svg';
import menuCloseIcon from '../../assets/icons/menu-close.svg';
import menuOpenIcon from '../../assets/icons/menu-open.svg';
import newLabelIcon from '../../assets/icons/new-label.svg';
import soonLabelIcon from '../../assets/icons/soon-label.svg';
import {MenuItem, menu} from '../../content/menu';
import {socialLinks} from '../../content/social-links';
import {EnvironmentContext} from '../../contexts';
import {useLocale} from '../../hooks/useLocale';
import {block} from '../../utils';
import {Link} from '../Link';

import {LocalePicker} from './LocalePicker';
import './Menu.scss';

const b = block('menu');

const LINK_ICON_SIZE = 8;

export const Menu: React.FC = () => {
    const {t} = useTranslation();
    const locale = useLocale();

    const router = useRouter();

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const {hideLocalePicker} = React.useContext(EnvironmentContext);

    // Filter menu items based on locale - blog is only available for en and ru
    const filteredMenu = React.useMemo(() => {
        if (locale === 'en' || locale === 'ru') {
            return menu;
        }
        return menu.filter((item) => item.url !== '/blog');
    }, [locale]);

    const renderItem = (item: MenuItem) => {
        if (item.isComingSoon) {
            return (
                <div className={b('link', {lg: true, disabled: true})}>
                    <div className={b('comming-soon')}>
                        <div className={b('comming-soon-text')}>{t(item.titleKey)}</div>
                        <div className={b('comming-soon-label')}>
                            <Icon data={soonLabelIcon} width={46} height={20} />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <Link href={item.url} className={b('link', {lg: true})}>
                {t(item.titleKey)}
                {item.isNew ? (
                    <div className={b('new-label')}>
                        <Icon data={newLabelIcon} width={46} height={20} />
                    </div>
                ) : null}
            </Link>
        );
    };

    return (
        <div className={b()}>
            <div className={b('wrapper', {open: mobileMenuOpen})}>
                <Link href="/" className={b('logo')}>
                    <span className={b('logo-image')} />
                </Link>

                <div className={b('desktop-menu')}>
                    <div className={b('desktop-menu-items')}>
                        {filteredMenu.map((item) => (
                            <div
                                key={item.titleKey}
                                className={b('desktop-menu-item', {
                                    active: (locale === nextI18nextConfig.i18n.defaultLocale
                                        ? router.asPath
                                        : router.asPath.replace(`/${locale}`, '')
                                    ).startsWith(item.url),
                                })}
                            >
                                {renderItem(item)}
                            </div>
                        ))}
                    </div>
                    {!hideLocalePicker && (
                        <div className={b('desktop-menu-locale-picker')}>
                            <LocalePicker />
                        </div>
                    )}
                </div>

                <nav className={b('desktop-social-links')}>
                    {socialLinks.map((item) => (
                        <div key={item.title} className={b('desktop-social-links-item')}>
                            <a
                                className={b('link', {social: true})}
                                href={item.url}
                                target="_blank"
                            >
                                <Icon data={item.icon} size={20} />
                            </a>
                        </div>
                    ))}
                </nav>

                <div className={b('mobile-menu-button-wrapper')}>
                    <div
                        className={b('mobile-menu-button', {open: mobileMenuOpen})}
                        onClick={() => {
                            setMobileMenuOpen(!mobileMenuOpen);
                        }}
                    >
                        <Icon data={mobileMenuOpen ? menuCloseIcon : menuOpenIcon} size={16} />
                    </div>
                </div>
            </div>

            <div className={b('mobile-menu', {open: mobileMenuOpen})}>
                <Grid>
                    <Row>
                        <Col sizes={{sm: 12}}>
                            <div className={b('mobile-menu-items')}>
                                {filteredMenu.map((item) => (
                                    <div className={b('mobile-menu-item')} key={item.titleKey}>
                                        {renderItem(item)}
                                    </div>
                                ))}
                            </div>
                            <div className={b('mobile-social-links')}>
                                {socialLinks.map((item) => (
                                    <div className={b('mobile-social-link')} key={item.title}>
                                        <a
                                            className={b('link', {social: true})}
                                            href={item.url}
                                            target="_blank"
                                        >
                                            <span>{item.title}</span>
                                            <Icon
                                                className={b('link-icon')}
                                                data={linkArrowIcon}
                                                size={LINK_ICON_SIZE}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            {!hideLocalePicker && (
                                <div className={b('mobile-menu-locale-picker')}>
                                    <LocalePicker />
                                </div>
                            )}
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};
