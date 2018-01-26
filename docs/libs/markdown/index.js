import React from 'react';
import ReactDOM from 'react-dom';
import prism from 'prismjs';
import marked from 'marked';
import Canvas from './canvas';
import { Menu, Affix } from "../../../src";

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      markdownCopy: ""
    }
    this.components = new Map();
  }
  componentWillMount() {
    this.renderMarkdown(this.getLang(), this.getPageName())
    this.renderDOM();
  }
  componentDidUpdate() {
    this.renderDOM();
  }
  renderDOM() {
    for (const [id, component] of this.components) {
      this.div = document.getElementById(id);
      if (this.div instanceof HTMLElement) {
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.div));
        ReactDOM.render(component, this.div, () => {
          prism.highlightAll();
        });
      }
    }
    prism.highlightAll();
  }
  renderMarkdown(locale, fileName) {
    return import(`../../md/${locale}/${fileName}.md`).then(module => {
      this.setState({
        markdown: module,
        markdownCopy: module
      })
    })
  }
  getLang() {
    return localStorage.getItem('WUI_LANG') || 'cn'
  }
  getPageName() {
    const routes = window.location.hash.match(/(?:\/(.+))?(\/(.+)\?|\/(.+))/);
    if (routes) {
      return routes[3] || routes[4];
    }
    return 'quick-start';
  }
  render() {
    const { markdown, markdownCopy } = this.state;
    const menuListRight = []
    let prefixCls = 'is-docs'
    if (typeof markdownCopy === 'string') {
      this.components.clear();
      const menuItem = marked(markdownCopy.replace(/###\s([^]+?)\n/g, (match, p1, offset) => {
        console.log(p1)
        menuListRight.push(p1)
      }));
      const html = marked(markdown.replace(/<!--\s?DemoStart\s?-->([^]+?)<!--\s?End\s?-->/g, (match, p1, offset) => {
        const id = offset.toString(36);
        this.components.set(id, React.createElement(Canvas, Object.assign({
          name: this.getPageName()
        }, this.props), p1));
        return `<div id=${id}></div>`;
      }));
      console.log(menuListRight)
      return (
        <div>
          <Affix>
            <div className={`${prefixCls}-menu-right`}>
              <Menu style={{ width: 110 }}>
                {
                  menuListRight.map((item, i) => (
                    <Menu.Item key={i} index={item}>{item}</Menu.Item>
                  ))
                }
              </Menu>
            </div>
          </Affix>
          <div className={`${prefixCls}-content-warpper`} dangerouslySetInnerHTML={{ __html: html }} />
          <div className={`${prefixCls}-docinfo`}>
            犯了错误还是想对文件做出贡献？ <a href={`https://github.com/shawn2016/isui/blob/master/docs/md/${this.getLang() + '/' + this.getPageName()}.md`} target="_blank" rel="noopener noreferrer">在Github上编辑本页！</a> <br />
            <a href="https://github.com/shawn2016/isui/issues" target="_blank" rel="noopener noreferrer">反馈建议</a> | <a target="_blank" rel="noopener noreferrer" href="https://github.com/shawn2016/isui/issues/new">提交bug</a> | <a target="_blank" rel="noopener noreferrer" href="https://github.com/shawn2016/isui">Github</a>
          </div>
        </div>
      )
    } else {
      return (
        <span></span>
      )
    }
  }
}

