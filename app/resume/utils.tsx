import React from 'react';
import { keywords } from './resumeData';

// 高亮关键词的函数
export function highlightKeywords(text: string): React.ReactNode[] {
  if (!text) return [text];

  // 创建正则表达式来匹配所有关键词
  const keywordPattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  
  // 分割文本，保留分隔符
  const parts = text.split(keywordPattern);
  
  return parts.map((part, index) => {
    // 检查这个部分是否是关键词
    const isKeyword = keywords.some(keyword => 
      keyword.toLowerCase() === part.toLowerCase()
    );
    
    if (isKeyword) {
      return (
        <span 
          key={index} 
          className="text-blue-600 font-semibold"
        >
          {part}
        </span>
      );
    }
    
    return part;
  });
}

// 处理带有链接的文本（如 [s.coly.cc/taskbot]）
export function processLinksInText(text: string): React.ReactNode[] {
  const linkPattern = /\[(https?:\/\/[^\]]+)\]/g;
  const parts = text.split(linkPattern);
  
  return parts.map((part, index) => {
    if (part.match(/^https?:\/\//)) {
      return (
        <a 
          key={index}
          href={part} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-gray-500 ml-1"
        >
          [{part}]
        </a>
      );
    }
    return highlightKeywords(part);
  });
}

// 处理引号转义
export function processQuotes(text: string): string {
  return text.replace(/"/g, '"').replace(/"/g, '"');
} 