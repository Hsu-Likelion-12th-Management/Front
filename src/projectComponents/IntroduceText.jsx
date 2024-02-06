export default function IntroduceText({children, ...props}) {
  return (
    <p className={props.class}>{children}</p>
  )
}