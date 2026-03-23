# 奥呦 Logic 视觉设计方案

## 品牌概述
奥呦 Logic - AI时代的首席认知官，专注GEO生成引擎优化

## 设计理念
**"智能光谱"** - 以深邃的科技青绿为基底，搭配明亮的能量色，展现AI时代的专业与前瞻。

---

## 色彩系统

### 主色调 - 科技青绿
```css
--primary-50: #f0fdfa;
--primary-100: #ccfbf1;
--primary-200: #99f6e4;
--primary-300: #5eead4;
--primary-400: #2dd4bf;
--primary-500: #14b8a6;  /* 主色 - 青绿色 */
--primary-600: #0d9488;
--primary-700: #0f766e;
--primary-800: #115e59;
--primary-900: #134e4a;
```

### 强调色 - 活力橙 + 青蓝
```css
--accent-orange: #f97316;    /* CTA按钮 */
--accent-cyan: #06b6d4;      /* 青色 */
--accent-blue: #3b82f6;      /* 蓝色 */
--accent-teal: #14b8a6;      /* 青绿 */
```

### 辅助色 - 渐变光谱
```css
--gradient-start: #14b8a6;   /* 青绿 */
--gradient-mid: #06b6d4;     /* 青色 */
--gradient-end: #3b82f6;     /* 蓝色 */
```

### 中性色
```css
--bg-dark: #0a0a1a;          /* 深色背景 */
--bg-card: rgba(255,255,255,0.03);  /* 卡片背景 */
--text-primary: #ffffff;
--text-secondary: #94a3b8;
--text-muted: #64748b;
--border-subtle: rgba(255,255,255,0.08);
```

---

## 字体系统

### 中文
- **标题**: "Noto Sans SC", "PingFang SC", sans-serif
- **正文**: "Noto Sans SC", "Microsoft YaHei", sans-serif

### 英文
- **标题**: "Space Grotesk", sans-serif
- **正文**: "Inter", sans-serif

### 字号规范
| 元素 | 大小 | 字重 | 行高 |
|------|------|------|------|
| H1 | 56px | 700 | 1.1 |
| H2 | 40px | 600 | 1.2 |
| H3 | 28px | 600 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |

---

## 视觉元素

### 渐变效果
```css
/* 主渐变 - 青绿到蓝 */
.gradient-primary {
  background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #3b82f6 100%);
}

/* 文字渐变 */
.gradient-text {
  background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 按钮渐变 */
.gradient-btn {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
}
```

### 玻璃拟态
```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}
```

### 发光效果
```css
.glow-primary {
  box-shadow: 0 0 60px rgba(20, 184, 166, 0.3);
}

.glow-accent {
  box-shadow: 0 0 40px rgba(249, 115, 22, 0.4);
}
```

---

## 背景设计

### Hero 背景
```css
.hero-bg {
  background: radial-gradient(ellipse at top, #0d3d3a 0%, #0a0a1a 40%, #000000 100%);
}
```

### 浮动光球
- 颜色：青绿色，透明度 15-20%
- 模糊：80px
- 动画：上下浮动 10s

### 网格线
- 颜色：青绿色，透明度 3%
- 大小：100px

---

## 动画规范

### 入场动画
- **淡入上移**: opacity 0→1, translateY 30px→0, duration 0.8s, ease-out
- **缩放淡入**: opacity 0→1, scale 0.95→1, duration 0.6s, ease-out
- **交错延迟**: 每个元素延迟 0.1s

### 悬停效果
- **卡片**: translateY -8px, shadow 增强, duration 0.3s
- **按钮**: scale 1.02, shadow 增强, duration 0.2s
- **链接**: color 变化, underline 滑入

### 背景动画
- **粒子**: 80个粒子, 连线距离 150px, 透明度 0.2
- **浮动元素**: translateY ±20px, duration 6s, ease-in-out, infinite
- **渐变流动**: background-position 动画, duration 8s

---

## 组件规范

### 按钮
```css
/* 主按钮 */
.btn-primary {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 30px rgba(249, 115, 22, 0.5);
}

/* 次按钮 */
.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
}
```

### 卡片
```css
.card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: rgba(20, 184, 166, 0.3);
  box-shadow: 0 8px 32px rgba(20, 184, 166, 0.15);
  transform: translateY(-8px);
}
```

### 输入框
```css
.input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 14px 18px;
  color: white;
  transition: border-color 0.3s;
}

.input:focus {
  border-color: #14b8a6;
  outline: none;
}
```

---

## 布局原则

### 间距系统
- **Section间距**: 120px (py-30)
- **容器最大宽度**: 1280px (max-w-7xl)
- **卡片间隙**: 32px (gap-8)
- **内边距**: 32px (p-8)

### 网格系统
- **服务卡片**: 3列网格
- **案例展示**: 2-3列网格
- **数据统计**: 4列网格
- **响应式**: 移动端单列

### 视觉层次
1. **Hero区**: 全屏高度, 粒子背景, 大标题居中
2. **内容区**: 左文右图或上图下文
3. **CTA区**: 渐变背景, 居中布局

---

## 响应式断点

| 断点 | 宽度 | 布局调整 |
|------|------|----------|
| Mobile | < 640px | 单列, 减小字号, 简化动画 |
| Tablet | 640-1024px | 2列网格 |
| Desktop | > 1024px | 完整布局 |

---

## 设计原则总结

1. **深色优先**: 以深色背景营造科技感，白色文字确保可读性
2. **青绿渐变**: 使用青绿→青色→蓝色渐变作为主视觉元素，橙色作为CTA强调
3. **玻璃质感**: 卡片使用毛玻璃效果，增加层次感和现代感
4. **微妙动画**: 粒子背景、浮动元素、平滑过渡，营造动态氛围
5. **充足留白**: 大间距让内容呼吸，体现专业品质
6. **背景控制**: 浮动光球透明度控制在 15-20%，避免雾蒙蒙的感觉

