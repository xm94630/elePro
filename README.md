# elePro
> A vue project.
> 补充：本项目是基于cooking脚手架工具，和element-ui进行的组合。
> build 完毕之后，可以在这个地址访问  http://localhost:8080/dist/

# 类似项目
> https://github.com/taylorchen709/vue-admin
> 对比下吧，我发现，那个项目就是自己手动攒的。各种配置打包、babel、webpack、模拟数据啊、单元测试、依赖库（vue库、路由、element-ui）等等都是自己配置的。要是自己也从头搞的话是比较麻烦的。使用它的模板也是可以的。
> cooking 这个脚手架一定程度上处理了配置打包等一系列的流程。不会再package.json文件中看到一堆的依赖。其它的其实和这个也差不多的。另外目录层级有些小差别。

## Development

```shell
npm i cooking-cli -g
npm run dev
```

## Production
```
npm run dist
```

## License
ISC

## 问题备注
当我自定义引入的css，和模板中的css有覆盖关系的时候，在开发模式中和编译模式中的不一致，这个比较纠结