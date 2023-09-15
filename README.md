# wujie-demo
b站小满zs课程--微前端-无界
- npm i -g pnpm
```bash
cd monorepo
pnpm i
cd monorepo
pnpm run dev
// 打开新的powershell
cd web/react-demo
pnpm run dev
// 打开新的powershell
cd web/vue-demo
pnpm run dev
```
访问主应用，可以看到react和vue项目

笔记：
## pnpm+monorepo

解决npm问题：

- 100个项目都有一个相同的依赖包，硬盘上保存100份相同依赖包的副本。如果使用pnpm，依赖包将被存放在统一位置。安装速度大大提升。
- **同一个依赖包**，版本之间不同的文件被保存。

**硬链接**（`mklink /H`共享一个文件的内存地址）+ **软链接**(`mklink ruan.js index.js`类似快捷方式，不占用空间)。指向pnpm大仓库



monorepo：最外面放公共库，子文件夹只放和自己有关的文件



```bash
// 子模块复用技术
pnpm -F react-demo add common
// 可以在react-demo 下引入common文件夹中的export
```
