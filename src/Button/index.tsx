import classNames from "classnames"
import { ReactNode, MouseEventHandler } from "react"
import './index.css'

interface ButtonProps {
  type? : 'primary' | 'normal' | 'dashed' | 'link' | 'text',
  children? : ReactNode,
  className? : string,
  onClick? : MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {

  const { children, type='normal', className, onClick } = props

  const cls = classNames({
    'ant-btn': true,
    [`ant-btn-${type}`]: type,
    [className as string] : !!className // 自定义class类名
  })

  return <button className={cls} onClick={onClick}>{children}</button>
}

export default Button