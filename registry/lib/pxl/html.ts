import sanitizeHtml from "sanitize-html";

export function sanitize(content: string) {
  if (!content) {
    return '';
  }
  
  let html = sanitizeHtml(content, {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "br"],
  });

  const isHTML = html.includes("<");

  if (!isHTML) {
    html = html.replaceAll("\n", "<br />");
  }

  let startsWithBr = html.startsWith("<br />");

  while (startsWithBr) {
    html = html.replace("<br />", "");
    startsWithBr = html.startsWith("<br />");
  }

  return html;
}