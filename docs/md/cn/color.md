Color 色彩
===

`isui` 的样式使用了 [Less](https://github.com/less/less.js) 作为开发语言，并定义了一系列全局/组件的样式变量，`isui`中提供的所有颜色，你可以根据需求进行相应调整，[默认样式变量](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables)。


## 定制方式

我们使用 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式来覆盖变量。 参考 **主题定制** 里面的配置。

## 主色

isui 主要品牌颜色是鲜艳、友好的蓝色。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    //下面这段样式可以写入css中通过 className 来使用
    const {Row,Col} = Layout;

    return (
      <div>
        <Row gutter="20" className="colorDemo">
          <Col xs="24" sm="6"><div style={{background:"#409EFF"}}>Blue <span>#409EFF</span></div></Col>
          </Row>
      </div>
    )
  }
}
```
<!--End-->

## 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    //下面这段样式可以写入css中通过 className 来使用
    const {Row,Col} = Layout;
    return (
      <div>
        <Row gutter="20" className="colorDemo">
          <Col xs="24" sm="6"><div style={{background:"#F56C6C"}}>Red <span>#F56C6C</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#E6A23C"}}>Yellow <span>#E6A23C</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#67C23A"}}>Green <span>#67C23A</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#17a2b8"}}>Cyan <span>#17a2b8</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#343a40"}}>Dark(暗) <span>#343a40</span></div></Col>
          </Row>
      </div>
    )
  }
}
```
<!--End-->

## 灰色

常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    //下面这段样式可以写入css中通过 className 来使用
    const {Row,Col} = Layout;
    return (
      <div>
        <Row gutter="20" className="colorDemo">
          <Col xs="24" sm="6"><div style={{background:"#343a40"}}>标题 Title <span>#343a40</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#52575c"}}>正文 Content <span>#52575c</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#676b70"}}>辅助/图标 Sub Color <span>#676b70</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#a3a6a9"}}>失效 Disabled <span>#a3a6a9</span></div></Col>
        </Row>
        <Row gutter="20" className="colorDemo">
          <Col xs="24" sm="6"><div style={{background:"#dddee1",color:"#676b70"}}>边框 Border <span>#dddee1</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#e9eaec",color:"#676b70"}}>分割线 Divider <span>#e9eaec</span></div></Col>
          <Col xs="24" sm="6"><div style={{background:"#f8f8f9",color:"#676b70"}}>背景 Background <span>#f8f8f9</span></div></Col>
        </Row>
      </div>
    )
  }
}
```
<!--End-->