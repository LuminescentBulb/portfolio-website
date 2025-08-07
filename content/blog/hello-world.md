---
title: "Hello World"
date: "2025-08-08"
excerpt: "A test post to explore various markdown features and ensure the blog system is working properly."
---
Welcome to my first blog post! This is a test post to explore various markdown features and ensure the blog system is working properly.

## Text Formatting

Let's test some basic text formatting:

**This is bold text** and *this is italic text*. You can also have ***bold and italic together***.

Here's some `inline code` and some ~~strikethrough text~~.

## Lists

### Unordered Lists
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered Lists
1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

## Code Blocks

### JavaScript Example
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to my blog, ${name}!`;
}

const message = greet('World');
console.log(message);
```

### Python Example
```python
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Calculate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {calculate_fibonacci(i)}")
```

### CSS Example
```css
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.blog-post h1 {
  color: #2563eb;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

## Blockquotes

> This is a blockquote. It's great for highlighting important information or quotes from other sources.
> 
> You can have multiple paragraphs in a blockquote.

> Another blockquote with some **bold text** and `inline code`.

## Links and Images

Here's a [link to my portfolio](https://example.com) and some external links:

- [GitHub](https://github.com)
- [LinkedIn](https://linkedin.com)
- [Twitter](https://twitter.com)

## Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Markdown Rendering | ✅ Working | All basic features |
| Code Highlighting | ✅ Working | Syntax highlighting |
| Responsive Design | ✅ Working | Mobile friendly |
| Dark Mode | ✅ Working | Theme support |
| SEO | ✅ Working | Meta tags |

## Mathematical Expressions

This blog now supports LaTeX math rendering! You can write mathematical expressions inline like $E = mc^2$ or as block equations:

$$
\int f(x) dx = F(x) + C
$$

### More Math Examples

Inline math: The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

Block math:
$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Matrix example:
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

Fraction example:
$$
\frac{d}{dx} \left( \frac{x^2 + 1}{x - 1} \right) = \frac{2x(x-1) - (x^2 + 1)}{(x-1)^2}
$$

## Task Lists

- [x] Create blog system
- [x] Add markdown support
- [x] Test basic features
- [ ] Add more posts
- [ ] Optimize performance
- [ ] Add comments system

## Horizontal Rules

---

This creates a nice visual separation between sections.

---

## Emphasis and Strong Text

You can use **strong emphasis** for important points and *light emphasis* for subtle highlights.

### Nested Emphasis

You can combine different types of emphasis:
- **Bold with *italic* inside**
- *Italic with **bold** inside*
- ***Bold and italic together***

## Code with Language Specification

```typescript
interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

function createBlogPost(post: BlogPost): string {
  return `# ${post.title}\n\n${post.content}`;
}
```

```bash
# Install dependencies
npm install gray-matter remark remark-html

# Run development server
npm run dev

# Build for production
npm run build
```

## Conclusion

This test post demonstrates that the blog system is working properly with various markdown features:

- ✅ Headers (H1, H2, H3, etc.)
- ✅ Text formatting (bold, italic, strikethrough)
- ✅ Lists (ordered and unordered)
- ✅ Code blocks with syntax highlighting
- ✅ Blockquotes
- ✅ Links
- ✅ Tables
- ✅ Task lists
- ✅ Horizontal rules
- ✅ Nested formatting

The blog system is ready for real content! 🎉

---

*This is a test post created on August 8, 2025 to verify the blog functionality.*
