import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeApp({bgColor = "#fff"}) {
    const [qrCode, setQRCode] = useState('')
    const [input, setInput] = useState('')
    function generateQR() {
       setQRCode(input);
       setInput('');
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div>
                <input
                    type="text"
                    placeholder="Generate QR Code..."
                    id="qr-code"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                    disabled={input && input.trim() !== "" ? false : true} 
                    onClick={generateQR}
                >
                    Generate
                </button>
            </div>
            <QRCode id="qr-code-val" value={qrCode} size={300} bgColor={bgColor}/>
        </div>
    )
}