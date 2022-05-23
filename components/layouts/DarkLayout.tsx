import { FC, PropsWithChildren } from "react"

const DarkLayout: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <div style={{
      backgroundColor: 'rgba(10, 10, 10, .3)',
      padding: '2rem',
    }}>
      {children}
    </div>
  )
}

export default DarkLayout