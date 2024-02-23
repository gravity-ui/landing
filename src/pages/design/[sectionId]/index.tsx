// Support for default locale without path prefix
import {GetStaticPaths} from 'next';

import {sections} from '../../../content/design';
import {DesignSectionPage, getStaticProps} from '../../[locale]/design/[sectionId]';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: sections.map((item) => ({params: {sectionId: item.id}})),
        fallback: false,
    };
};

export {DesignSectionPage, getStaticProps};

export default DesignSectionPage;
