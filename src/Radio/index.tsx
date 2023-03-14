import { isDisabled } from "@testing-library/user-event/dist/utils"
import classNames from "classnames"
import { ReactNode, CSSProperties, useState, useEffect, useRef } from "react"
import './index.css'

interface PadioProps {
  className? : string,
  style?: CSSProperties
  children?: ReactNode,
  checked?: Boolean,
  defaultChecked?: boolean,
  onChange?: Function,
  disabled?: Boolean
}

const Radio = (props: PadioProps) => {

  const { className, style, children, defaultChecked, onChange, disabled, ...others } = props

  const [checked, setChecked] = useState<Boolean>(false)
  const inputEl = useRef(null)

  const cls = classNames({
    'ant-radio': true,
    'ant-radio-checked': checked,
    'ant-radio-disabled': disabled,
    [className as string] : !!className // 自定义class类名
  })

  const wls = classNames({
    'ant-radio-wrapper': true,
    'ant-radio-wrapper-disabled': disabled
  })

  useEffect(() => {
    if("checked" in props && props.checked !== checked) {
      setChecked(props.checked)
    }
  }, [props.checked])

  const handleClick = (e: any) => {
    // 如果radio已经是选中状态，不允许再次点击
    if(checked || disabled){
      return
    }
    if(!('checked' in props)) {
      setChecked(true)
    }
    // 
    setChecked(true)
    if(typeof onChange === 'function') {
      e.target = inputEl.current
      onChange(e)
    }
  }

  // Radio的实现：为了保持样式统一，使用span标签覆盖原生input框，使用opcity为0来隐藏原来的input框但仍然保留事件

  return <div className={wls} onClick={handleClick}>
    <span className={cls}>
      <input ref={inputEl} type='radio' className="ant-radio-input" />
      <span className="ant-radio-inner"></span>
    </span>
    <span>{children}</span>
  </div>
}

export default Radio