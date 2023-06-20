import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import {CONTENT_WRAPPER_ID, MENU_ID} from '../constants';

const ADDITIONAL_OFFSET = 120;

export const useSectionScroll = () => {
    const router = useRouter();
    const [sectionId, setSectionId] = useState('');

    useEffect(() => {
        const currentPath = router.asPath;
        setSectionId(currentPath.split('#')[1] || '');
    }, [router]);

    useEffect(() => {
        const handleChangeHash = () => {
            const hash = window.location.hash;
            setSectionId(hash.split('#')[1]);
        };

        window.addEventListener('hashchange', handleChangeHash);

        return () => {
            window.removeEventListener('hashchange', handleChangeHash);
        };
    }, []);

    useEffect(() => {
        const content = document.getElementById(CONTENT_WRAPPER_ID);

        if (!content) {
            return;
        }

        if (sectionId) {
            const section = document.querySelector(`[data-section=${sectionId}]`);
            const menu = document.getElementById(MENU_ID);

            if (section) {
                const sectionTop = section.getBoundingClientRect().top;

                content.scrollTo({
                    top: sectionTop - (menu?.offsetHeight || 0) - ADDITIONAL_OFFSET,
                    behavior: 'smooth',
                });
            }
        } else {
            content.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, [sectionId]);
};
