import {GetServerSideProps} from 'next';

import {SandboxComponent} from '../../../components/SandboxComponent';
import type {ComponentProps} from '../../../components/SandboxComponent/SandboxComponent';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const componentId = context.params?.componentId;
    const libId = context.params?.libId;

    return {
        props: {
            componentId,
            libId,
        },
    };
};

export const SandboxPage = ({componentId, libId}: ComponentProps) => {
    return <SandboxComponent libId={libId} componentId={componentId} />;
};

export default SandboxPage;
