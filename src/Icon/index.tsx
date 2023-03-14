import classNames from "classnames"
import { ReactNode, MouseEventHandler } from "react"
import './index.css'

interface ButtonProps {
  icon : string,
  className? : string,
  heigth?: number,
  width?: number,
  color?: string
}

const Icon = (props: ButtonProps) => {

  const { className, icon, heigth = 200, width=200, color="#3D3D3D" } = props

  const cls = classNames({
    
    [className as string] : !!className // 自定义class类名
  })

  return <svg 
    viewBox="0 0 1024 1024" 
    xmlns="http://www.w3.org/2000/svg" 
    p-id="2772" 
    width={width} 
    height={heigth}>
      <path d={icon} fill={color} p-id="2773"></path>
      </svg>
}

export default Icon