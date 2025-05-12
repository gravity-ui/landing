import {Plugin} from 'unified';
import {Literal} from 'unist';
import {visit} from 'unist-util-visit';
import {Node} from 'unist-util-visit/lib';

/**
 * Default URL replacer function that returns URL as-is.
 * @param {string} url - The URL to process
 * @returns {string} The original URL unchanged
 */
const defaultReplacer = (url: string) => url;

/**
 * Replaces all regex matches in a string using a replacement function.
 * @param {string} str - Input string to process
 * @param {RegExp} regex - Regular expression to match against
 * @param {(v: string, ...args: string[]) => string} fn - Replacement function that receives matches
 * @returns {string} String with all matches replaced
 */
export const replaceMatches = function (
    str: string,
    regex: RegExp,
    fn: (v: string, ...args: string[]) => string,
) {
    return str.replace(regex, (match, ...args) => fn(match, ...args));
};

/**
 * Rewrites URLs in JSX/HTML attribute values using provided replacer.
 * @param {string} value - JSX/HTML string to process
 * @param {(v: string) => string} replacer - Function to transform URLs
 * @returns {string} String with transformed href attributes
 */
export const rewriteJSXURL = (value: string, replacer: (v: string) => string) =>
    replaceMatches(value, /href="(.*?)"/g, (_, url) => {
        const newUrl = replacer(url);
        return `href="${newUrl}"`;
    });

interface RemarkLinkRewriteSyncOptions {
    replacer?: (v: string) => string;
}

type LinkNode = Node & {type: 'link'; url: string};
type OtherNode = Literal<string> & {type: 'jsx' | 'html'};

/**
 * Unified.js plugin to rewrite URLs in Markdown links and JSX/HTML anchors.
 * @param {RemarkLinkRewriteSyncOptions} [options] - Plugin options
 * @property {(v: string) => string} [replacer=defaultReplacer] - URL transformation function
 * @returns {Plugin} Unified.js plugin function
 */
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
