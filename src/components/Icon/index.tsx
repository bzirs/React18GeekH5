type PropsType = {
  iconName: string
  className?: string
  handleClick?: () => void
}

const Icon = ({ iconName, className, handleClick }: PropsType) => {
  return (
    <svg className={'icon ' + className} aria-hidden='true' onClick={handleClick}>
      {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
      <use xlinkHref={`#${iconName}`}></use>
    </svg>
  )
}

export default Icon
