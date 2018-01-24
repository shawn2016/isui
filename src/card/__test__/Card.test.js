import React from 'react';
import { mount, render } from 'enzyme';
import Card from '../';

describe('<Card>', () => {
  const C = mount(
    <Card title="Card标题" extra={<a href="#">更多</a>} style={{ width: 300, height: 200 }} >
      卡片内容<br />
      卡片内容<br />
      卡片内容<br />
    </Card>
  );

  it('The name of module must be "Card"', () => {
    expect(C.name()).toBe('Card');
  });

  it('Test `Card` without bordered', () => {
    C.setProps({ bordered: false });
    expect(C.find('.is-card').getDOMNode().className.split(' ').includes('is-card-bordered')).toBe(false);
  });

  it('Test `Card` with props `title`', () => {
    C.setProps({ title: 'Title for Card' });
    expect(C.find('.is-card-head-title').text()).toEqual('Title for Card');
  });

  it('Test `Card` with extra element', () => {
    C.setProps({ extra: (<a href="#">更多</a>) });
    expect(C.find('.is-card-extra').children().at(0).html()).toEqual('<a href="#">更多</a>');
  });

  it('Test `Card` with children', () => {
    expect(C.find('.is-card-body').html()).toEqual('<div class="is-card-body">卡片内容<br>卡片内容<br>卡片内容<br></div>');
  });

  it('Test `Card` with props `noHover`', () => {
    C.setProps({ noHover: true });
    expect(C.getDOMNode().className.split(' ')).toContain('is-card-no-hover');
  });

  it('Test `Card` with props `bodyStyle`', () => {
    const _C_ = render(
      <Card title="Card标题" extra={<a href="#">更多</a>} bodyStyle={{ border: '2px solid #ddd', color: 'red' }} style={{ width: 300, height: 200 }} >
        卡片内容<br />
        卡片内容<br />
        卡片内容<br />
      </Card>
    );
    expect(_C_.find('.is-card-body')[0].attribs.style).toEqual(expect.stringContaining('border:2px solid #ddd'));
  });
});
