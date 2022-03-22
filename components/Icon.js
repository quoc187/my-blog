import Image from "next/image"
import { cls  } from "../utils/template"

const sizes = {
  sm: 'w-6',
  md: 'w-8',
  lg: 'w-10'
}

const defaultClass = 'inline-block overflow-hidden'

const Icon = ({ src, size = 'md', className }) => {
  return <span className={cls(defaultClass, sizes[size], className)}>
    <Image src={src} width="100%" height="100%" layout="responsive"/>
  </span>
}

export default Icon;