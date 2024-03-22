import React from "react";

interface ModalProps {
    isOpen: boolean
    closeModal: () => void
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({isOpen, closeModal, children}) => {
    if (!isOpen) return null;

    return (
        <div onClick={() => closeModal()} className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex items-center">
            <div className="relative bg-trueBlack w-96 max-w-full mx-auto p-2">
                <div className={"flex justify-end"}>
                    <button onClick={() => closeModal()}>
                        <img src={"/assets/ceefax_cross.png"} alt={"Close ticket scanner"} width={28}/>
                    </button>
                </div>
                <div className={"text-left"}>
                {children}
                </div>
            </div>
        </div>
    );
}