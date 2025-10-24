import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, '..', 'public', 'locales');

function getAllJsonFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            results = results.concat(getAllJsonFiles(filePath));
        } else if (path.extname(file) === '.json') {
            results.push(filePath);
        }
    });

    return results;
}

function processJsonFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8').trim();
    let modified = false;

    // Remove ```json at the beginning of the file
    if (content.startsWith('```json')) {
        content = content.substring(7);
        modified = true;
    }

    // Remove ``` at the end of the file
    if (content.endsWith('```')) {
        content = content.substring(0, content.length - 3);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
        console.log(`File ${filePath} was corrected`);
    }
}

function main() {
    console.log(`Fixing AI translations in directory: ${localesDir}`);

    try {
        const jsonFiles = getAllJsonFiles(localesDir);
        jsonFiles.forEach(processJsonFile);
        console.log('Processing completed successfully');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
