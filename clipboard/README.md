## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
```
See [Configuration Reference](https://cli.vuejs.org/config/).
```

# clipboard使用说明
```
1、安装clipboard
yarn add clipboard
```
2、引入
import Clipboard from 'clipboard'
```
3、使用
<button class="btn" :data-clipboard-text="copyValue">点我复制</button>
copyValue是要复制的内容
声明Clipboard对象
this.clipboard = new Clipboard('.btn')
成功回调
this.clipboard.on('success', function() {
  
})
当复制内容消失时,销毁clipboard
this.clipboard.destroy()
4、button按钮无需添加@click事件即可触发