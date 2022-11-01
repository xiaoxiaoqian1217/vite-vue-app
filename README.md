# 集成 ESLint

安装 eslint

```
yarn add eslint
```

初始化 eslint, 生成 .eslintrc.json 文件

```
npx eslint --init
```

在 depackage.json 文件中增加一个 lint 命令

```
{
  "scripts": {
    // lint当前项目中的文件并且开启自动修复
    "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
  }
}

```
