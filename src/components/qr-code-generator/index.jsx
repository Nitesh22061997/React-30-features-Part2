import React, { useState } from 'react';

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode(){
        setQrCode(input)
    }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
      <input onChange={(e)=>setInput(e.target.value)} type="text" name='qr-code' placeholder='Enter you value' />
      <button onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        {/* <QRCode id='qr-code-value' value=''/> */}
        
      </div>
    </div>
  )
}
