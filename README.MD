参见：https://juejin.cn/post/7216182414698643517?searchId=20230906094131E22249C9C81DAF567788

其中添加未发布的包指令lerna add废弃，使用如下指令：
> yarn workspace @monorepo/company-ui add file:packages/company-util
效果如下：
```
 "dependencies": {
    "@monorepo/company-util": "file:packages/company-util"
  }
```
lerna publish报错
```
lerna ERR! E402 You must sign up for private packages错误
```
原因：无法发布到私有包，当包名以@your-name开头时，npm publish会默认发布为私有包，但是 npm 的私有包需要付费，所以需要登录
> npm login
并且在package.json中加入
```
"publishConfig": {
"access": "public"
},
```

再执行lerna publish就能发布成功了！
