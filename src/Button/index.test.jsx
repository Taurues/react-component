import { fireEvent, render, screen } from '@testing-library/react'

import Button from './index'

describe('Button', () => {
  // 按钮文字
  test('click', () => {
    render(<Button>click</Button>)
    const linkElement = screen.getByText(/click/i)
    expect(linkElement).toBeInTheDocument()
  })

  // 按钮类
  test('render primary button', () => {
    const { container } = render(<Button type='primary'>click</Button>)
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument()
  })

  // 事件类
  test('button event', () => {
    // 事件初始化
    const onClick = jest.fn();
    // 渲染dom
    render(<Button onClick={onClick}>click</Button>)
    // 找到当前的dom
    const ele = screen.getByText(/click/i)
    // 执行点击事件
    fireEvent.click(ele)
    // 期望结果=>执行了回调
    expect(onClick).toBeCalled()
  })
})