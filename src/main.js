import { marked } from "marked";
import markdownSource from "../README.md?raw";
import "./styles.css";

marked.setOptions({
  breaks: true,
  gfm: true,
});

const app = document.querySelector("#root");

if (!app) {
  throw new Error("Root element not found.");
}

const cleanedMarkdownSource = markdownSource.replace(/^---\s*$/gm, "");
const renderedMarkdown = marked.parse(cleanedMarkdownSource);

app.innerHTML = `
  <main class="markdown-page">
    <article class="markdown-body">${renderedMarkdown}</article>
  </main>
`;

app.querySelectorAll("a[href]").forEach((anchor) => {
  const href = anchor.getAttribute("href") || "";
  if (href.startsWith("http://") || href.startsWith("https://")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer noopener";
  }
});
