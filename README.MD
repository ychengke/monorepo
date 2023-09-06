参见：https://juejin.cn/post/7216182414698643517?searchId=20230906094131E22249C9C81DAF567788

其中添加未发布的包指令lerna add废弃，使用如下指令：
> yarn workspace @monorepo/company-ui add file:packages/company-util
效果如下：
```
 "dependencies": {
    "@monorepo/company-util": "file:packages/company-util"
  }
```