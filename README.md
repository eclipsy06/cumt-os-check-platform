# 操作系统复习检测平台

这是一个纯静态网站，所有内容都在前端文件中，不需要后端、数据库、Node、Python 或启动脚本。

## 文件结构

- `index.html`：网站入口
- `style.css`：页面样式
- `app.js`：题库、卡片、判分和错题本逻辑
- `.nojekyll`：让 GitHub Pages 按普通静态站点发布
- `os_whp (1).pdf`：复习文档来源

## 发布方式

### GitHub Pages

1. 新建一个 GitHub 仓库。
2. 上传本文件夹内的所有文件到仓库根目录。
3. 进入仓库 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`，保存。
6. 等待 GitHub 生成访问链接。

### Netlify / Vercel

把整个文件夹拖到 Netlify Drop，或作为静态项目导入 Vercel。构建命令留空，输出目录使用项目根目录。

## 本地打开

双击 `index.html`，或在浏览器中打开：

```text
file:///Users/zch/Downloads/os_check_platform/index.html
```

注意：本地 `file://` 只能在当前设备访问。要让其他设备访问，需要发布到 GitHub Pages、Netlify、Vercel 等静态托管平台。
