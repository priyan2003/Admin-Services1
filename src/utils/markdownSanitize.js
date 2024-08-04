const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownServiceLibrary = require('turndown');


function  sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurndownServiceLibrary();
    console.log(markdownContent);
    // 1. convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    console.log("converted Html",convertedHtml);
    // 2. Sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });
    console.log("Sanitized Html",sanitizedHtml)
    // 3. convert sanitizedHtml into Markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    
    console.log("sanitized Markdown",sanitizedMarkdown)
    return sanitizedMarkdown;
}


module.exports = sanitizeMarkdownContent;