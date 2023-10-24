import { useDetectClickOutside } from 'react-detect-click-outside';
export default function Dropdown(props){
  const componentRef = useDetectClickOutside({ 
    onTriggered: () => props.close(false)
  })
  return (
    <div ref={componentRef} className={`box absolute top-12 right-0 bg-black transition-all duration-200 opacity-0 p-0 ${props.status && 'top-11 opacity-100'}`}>
      {props.children}
    </div>
  )
}