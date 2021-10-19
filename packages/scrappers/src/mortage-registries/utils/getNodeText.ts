import type { Node } from 'node-html-parser';

export const getNodeText = (parentNode: Node): string => {
  // console.dir(parentNode);

  return parentNode.childNodes
    .map((node: Node) => {
      if (node.nodeType === 3) {
        return node.rawText;
      }

      // @ts-nocheck : yes it exists
      if (node.rawTagName === 'a') {
        return node.innerText;
      }

      return '';
    })
    .filter((text: string) => text !== '\n' && text !== '')
    .join(' ');
};
