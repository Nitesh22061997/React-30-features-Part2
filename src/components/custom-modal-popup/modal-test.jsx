import React, { useState } from 'react'
import Modal from './modal'

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false)

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup)
    }

    function onClose() {
        setShowModalPopup(!showModalPopup)
    }
    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal id={"custom-id"} header={<div>Customized HEADER</div>} footer={<div>Customized FOOTER</div>} onClose={onClose} body={<div>Customized BODY</div>} />
            }
        </div>
    )
}
