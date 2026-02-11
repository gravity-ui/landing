/* eslint-disable no-console */
import {computeEmbeddings} from './compute-embeddings';
import {renderSvgs} from './render-svgs';

async function main() {
    console.log('[1/2] Rendering SVGs...\n');
    await renderSvgs();

    console.log('\n[2/2] Computing embeddings...\n');
    await computeEmbeddings();

    console.log('\n\nDone!\n\n');
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
