export function ErrorMessage({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return <div className='error'>{children}</div>
}
