import React, { useRef, useState } from 'react'
import useOutsideClick from '.';

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false)
    const ref = useRef();
    useOutsideClick(ref,()=>setShowContent(false))
    return (
        <div>
            {
                showContent ? <div ref={ref}><h2>This is random content</h2>
                    <p>Please click outside of this to close this.It won't close if you click inside content</p></div> : <button onClick={() => setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}
