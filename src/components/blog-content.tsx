import React from 'react';

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div 
      className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:scroll-m-20 prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-3xl prose-h1:scroll-m-20 prose-h1:border-b prose-h1:pb-2 prose-h1:first:mt-0
        prose-h2:text-2xl prose-h2:scroll-m-20 prose-h2:border-b prose-h2:pb-2 prose-h2:first:mt-0
        prose-h3:text-xl prose-h3:scroll-m-20 prose-h3:first:mt-0
        prose-h4:text-lg prose-h4:scroll-m-20 prose-h4:first:mt-0
        prose-p:leading-7 prose-p:[&:not(:first-child)]:mt-6
        prose-blockquote:mt-6 prose-blockquote:border-l-2 prose-blockquote:pl-6 prose-blockquote:italic
        prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-ul:[&>li]:mt-2
        prose-ol:my-6 prose-ol:ml-6 prose-ol:list-decimal prose-ol:[&>li]:mt-2
        prose-li:my-0
        prose-table:border-collapse prose-table:border prose-table:border-slate-200 dark:prose-table:border-slate-700
        prose-th:border prose-th:border-slate-200 dark:prose-th:border-slate-700 prose-th:bg-slate-50 dark:prose-th:bg-slate-800 prose-th:p-2 prose-th:text-left
        prose-td:border prose-td:border-slate-200 dark:prose-td:border-slate-700 prose-td:p-2
        prose-code:relative prose-code:rounded prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-mono
        prose-pre:my-6 prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:bg-slate-900 prose-pre:p-4
        prose-pre:code:bg-transparent prose-pre:code:p-0 prose-pre:code:text-slate-50 prose-pre:code:font-mono
        prose-img:rounded-lg prose-img:shadow-md prose-img:max-w-full prose-img:h-auto
        prose-iframe:rounded-lg prose-iframe:shadow-md prose-iframe:max-w-full
        prose-a:text-slate-900 dark:prose-a:text-slate-100 prose-a:underline prose-a:underline-offset-4 prose-a:decoration-slate-400 dark:prose-a:decoration-slate-600 prose-a:transition-colors hover:prose-a:decoration-slate-900 dark:hover:prose-a:decoration-slate-100
        prose-strong:font-semibold prose-strong:text-slate-900 dark:prose-strong:text-slate-100
        prose-em:text-slate-700 dark:prose-em:text-slate-300
        prose-hr:my-8 prose-hr:border-slate-200 dark:prose-hr:border-slate-700"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
