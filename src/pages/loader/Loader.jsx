import LoadingOverlay from 'react-loading-overlay'
import CircleLoader from 'react-spinners/CircleLoader'

export default function MyLoader({ active, children }) {
  return (
    <LoadingOverlay
      active={active}
      spinner={<CircleLoader  />}
      height={100}
      width={170}
      size={1500}
    >
      {children}
    </LoadingOverlay>
  )
}