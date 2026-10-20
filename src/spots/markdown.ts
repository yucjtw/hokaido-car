// A tiny renderer for the free-text body of each place. The text is our own data,
// but it is still escaped first so a stray "<" cannot break the page.

function escape(text: string): string {
  return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
}

function inline(text: string): string {
  return escape(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/~~(.+?)~~/g, '<s>$1</s>')
}

/** Lines starting with "- " become a list; blank lines separate paragraphs; other line breaks are kept. */
export function renderBody(body: string): string {
  const html: string[] = []
  let paragraph: string[] = []
  let list: string[] = []
  const flush = () => {
    if (paragraph.length) html.push(`<p>${paragraph.map(inline).join('<br>')}</p>`)
    if (list.length) html.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`)
    paragraph = []
    list = []
  }
  for (const raw of body.trim().split('\n')) {
    const line = raw.trim()
    if (!line) {
      flush()
    } else if (line.startsWith('- ')) {
      if (paragraph.length) flush()
      list.push(line.slice(2))
    } else {
      if (list.length) flush()
      paragraph.push(line)
    }
  }
  flush()
  return html.join('')
}
