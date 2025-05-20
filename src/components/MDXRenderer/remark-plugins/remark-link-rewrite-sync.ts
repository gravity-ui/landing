import {Plugin} from 'unified';
import {Literal} from 'unist';
import {visit} from 'unist-util-visit';
import {Node} from 'unist-util-visit/lib';

const defaultReplacer = (url: string) => url;

export const replaceMatches = function (
    str: string,
    regex: RegExp,
    fn: (v: string, ...args: string[]) => string,
) {
    return str.replace(regex, (match, ...args) => fn(match, ...args));
};

export const rewriteJSXURL = (value: string, replacer: (v: string) => string) =>
    replaceMatches(value, /href="(.*?)"/g, (_, url) => {
        const newUrl = replacer(url);
        return `href="${newUrl}"`;
    });

interface RemarkLinkRewriteSyncOptions {
    replacer?: (v: string) => string;
}

type LinkNode = Node & {type: 'link'; url: string};
type OtherNode = Literal & {type: 'jsx' | 'html'; value: string};

const RemarkLinkRewriteSync: Plugin<[RemarkLinkRewriteSyncOptions]> = (options) => {
    const {replacer = defaultReplacer} = options || {};
    return (tree) => {
        const nodes: (LinkNode | OtherNode)[] = [];

        visit(tree, (rawNode) => {
            const node = rawNode as LinkNode | OtherNode;
            if (node.type === 'link') {
                nodes.push(node);
            }
            if (node.type === 'jsx' || node.type === 'html') {
                if (/<a.*>/.test(node.value)) {
                    nodes.push(node);
                }
            }
        });

        nodes.forEach((node) => {
            if (node.type === 'link') {
                node.url = replacer(node.url);
            }
            if (node.type === 'jsx' || node.type === 'html') {
                node.value = rewriteJSXURL(node.value, replacer);
            }
        });

        return tree;
    };
};

export default RemarkLinkRewriteSync;
