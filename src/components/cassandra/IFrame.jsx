import { useRef, useState } from 'react'

const IFrame = ({ url }) => {
   const [iFrameLoaded, setIFrameLoaded] = useState(false)
   const divBoxRef = useRef(null)
   const resizeIframe = (iframe) => {
      // .. resize iFrame container divBoxRef as needed.
   }
   return (
      <div ref={divBoxRef} className=" relative text-gray-600">
         {!iFrameLoaded && (
            <span className="inline-block">loading notebook ...</span>
         )}
         <iframe
            onLoad={(e) => {
               setIFrameLoaded(true)
               resizeIframe(e.target)
            }}
            title="static_html"
            src={url}
         ></iframe>
      </div>
   )
}
export default IFrame
