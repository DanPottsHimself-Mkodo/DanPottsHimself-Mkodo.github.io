import React, {useEffect, useState} from "react";
import {BrowserMultiFormatReader} from "@zxing/library";
import {isDev} from "../util/env";
import {Modal} from "./modal/Modal";

interface Props {
    onScan: (ticketId: string) => void;
}

export enum Permission {
    GRANTED = "GRANTED",
    DENIED = "DENIED"
}

export function stopVideoTracks(stream: MediaStream) {
    stream.getVideoTracks().forEach((track) => {
        track.stop();
    })
}

const TicketScanner: React.FC<Props> = ({onScan}) => {
    const [permissions, setPermissions] = useState<Permission>(Permission.DENIED);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [isPermissionsPopupVisible, setIsPermissionsPopupVisible] = useState(permissions === Permission.DENIED);
    const reader = new BrowserMultiFormatReader();

    function onPermissionChange(newPermission: PermissionStatus) {
        reader.reset();
        if (newPermission.state) {
            setPermissions(newPermission.state.toUpperCase() as Permission);
        }
    }

    useEffect(() => {
        window.navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: isDev() ? {
                    ideal: "environment"
                } : {
                    exact: "environment"
                }
            }
        }).then((mediaStream) => {
            setStream(mediaStream);
            setPermissions(Permission.GRANTED);
        }).catch(() => {
            setPermissions(Permission.DENIED);
            setStream(null);
        })

        window.navigator.permissions.query({name: "camera" as PermissionName}).then((res) => {
            // @ts-ignore
            res.onchange = () => {
                onPermissionChange(res);
            }
        })
    }, []);

    useEffect(() => {
        if (stream && permissions === Permission.GRANTED) {
            decode().then();
        }

        return () => {
            if (stream) {
                stopVideoTracks(stream);
            }
        }
    }, [stream, permissions]);

    async function decode() {
        const element = document.getElementsByTagName("video")[0];
        if (element) {
            const scanResult = await reader.decodeOnceFromConstraints({
                video: {
                    facingMode: isDev() ? {
                        ideal: "environment"
                    } : {
                        exact: "environment"
                    },
                }
            }, element);

            const ticketId = scanResult.getText();
            onScan(ticketId);
        }
    }

    return (
        <div className={"relative flex-grow px-4 pb-4 w-full h-full items-center justify-center"}>
            {permissions === Permission.GRANTED ? (
                <>
                    <video className={"w-full h-full object-cover rounded-2xl"}/>
                    <div
                        className={"absolute flex z-20 w-[calc(100%-32px)] mx-4 h-[calc(100%-16px)] left-0 top-0 bg-transparent justify-center items-center overflow-clip rounded-2xl"}>
                        <div className={"corners-border w-9/10 h-32 shadow-scannerOverlay"}>
                            <div className={"-mx-4 bg-imperial h-[2px] w-[calc(100%+32px)] animate-scanner"}/>
                        </div>
                    </div>
                </>
            ) : (
                <Modal isOpen={isPermissionsPopupVisible} closeModal={() => setIsPermissionsPopupVisible(false)}>
                    <div className={"flex flex-col px-4 pb-6 text-center"}>
                        <h2 className={"font-black text-xl mb-4"}>Permission needed</h2>
                        <p>In order to scan tickets, you need to grant camera permission for this website</p>
                    </div>
                </Modal>
            )}

        </div>
    )
}

export default TicketScanner;