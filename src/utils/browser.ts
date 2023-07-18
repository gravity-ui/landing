export async function downloadFile(url: string, nodeForAppendAnchor?: HTMLElement | null) {
    const response = await fetch(url);
    const blob = await response.blob();

    const filename = url.split('/').pop() || 'downloaded-file';

    const node = nodeForAppendAnchor || document.body;

    const link = document.createElement('a');
    link.style.opacity = '0';
    link.style.width = '0px';
    link.style.height = '0px';
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    node.appendChild(link);
    link.click();
    link.remove();
}
