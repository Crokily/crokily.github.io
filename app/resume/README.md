# 数据驱动简历系统

这个简历页面现在使用数据驱动的方法，使得内容管理更加灵活和易于维护。

## 文件结构

- `resumeData.ts` - 包含所有简历数据和关键词定义
- `utils.tsx` - 包含文本处理和关键词高亮的工具函数
- `page.tsx` - 简历页面组件，从数据文件读取内容
- `DownloadButton.tsx` - PDF下载按钮组件

## 如何更新简历内容

### 1. 个人信息
在 `resumeData.ts` 中的 `personalInfo` 对象中更新：
```typescript
personalInfo: {
  name: "你的姓名",
  title: "职位头衔",
  phone: "电话号码",
  email: "邮箱地址",
  location: "所在地",
  visa: "签证状态",
  links: {
    github: "GitHub链接",
    linkedin: "LinkedIn链接", 
    website: "个人网站链接"
  }
}
```

### 2. 教育背景
在 `education` 数组中添加或修改教育经历：
```typescript
{
  degree: "学位名称",
  institution: "学校名称", 
  duration: "时间段",
  location: "地点",
  wam: "成绩"  // 可选
}
```

### 3. 工作经验
在 `experience` 数组中添加或修改工作经历：
```typescript
{
  title: "职位 | 公司名称",
  company: "", 
  duration: "工作时间",
  location: "工作地点", // 可选
  achievements: [
    "成就描述1",
    "成就描述2"
  ]
}
```

### 4. 项目经历
在 `projects` 数组中添加或修改项目：
```typescript
{
  name: "项目名称",
  url: "项目链接", // 可选
  description: "项目描述",
  highlights: [
    "项目亮点1",
    "项目亮点2"
  ]
}
```

## 关键词高亮系统

### 添加新关键词
在 `resumeData.ts` 中的 `keywords` 数组中添加新的关键词：
```typescript
export const keywords = [
  'React', 'Vue.js', 'Node.js', // 现有关键词
  '新技术关键词', '新工具名称'    // 添加新关键词
];
```

### 关键词自动高亮
- 系统会自动识别文本中的关键词并高亮显示
- 高亮样式：蓝色文字 + 加粗字体
- 支持大小写不敏感匹配

## 特殊文本处理

### 链接处理
在文本中使用 `[链接地址]` 格式，系统会自动转换为可点击的链接：
```
"Built a Discord bot [https://s.coly.cc/taskbot]"
```

### 引号处理
系统会自动处理引号转义，确保在PDF生成时显示正确。

## 优势

1. **易于维护**：所有内容集中在一个数据文件中
2. **类型安全**：使用TypeScript接口确保数据结构正确
3. **自动高亮**：关键词自动高亮，无需手动添加样式
4. **响应式设计**：使用数组映射，自动适应内容变化
5. **可扩展**：易于添加新的章节或字段

## 使用建议

1. 定期更新 `keywords` 数组，包含行业相关的技术关键词
2. 使用具体的数字和成果来描述工作成就
3. 保持描述简洁而有力
4. 确保所有链接都是有效的 