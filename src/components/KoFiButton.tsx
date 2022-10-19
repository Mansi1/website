import React, {ReactNode, useState} from 'react';
import {getRandomId} from "@milkscout/react";
import kofiIcon from '../assets/img/cup-border.webp'

export interface KoFiButtonProps {
    username: string;
    label: ReactNode;
    backgroundColor?: string
    color?: string
    endpoint?: string;
}

export const KoFiButton = ({
                               username,
                               label,
                               color = "#fff",
                               backgroundColor = "#00b9fe",
                               endpoint = 'https://ko-fi.com/'
                           }: KoFiButtonProps) => {
    const [id] = useState('kofi-widget-overlay-' + getRandomId());
    const [open, setOpen] = useState(false)
    return (<>
            <div style={{
                position: "fixed", left: 15,
                bottom: 15 + 60,
            }}>
                {open && <div style={{
                    boxShadow: '0 8px 30px 10px rgb(0 0 0 / 25%), 0 2px 10px rgb(0 0 0 / 25%)',
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    transition: 'height 0.5s ease 0s, opacity 0.3s linear 0s',
                    paddingTop: 8
                }}>
                    <iframe title='iframe ko-fi' src={endpoint + username + '/?hidefeed=true&widget=true&embed=true'} style={{
                        width: 328,
                        height: 400,
                        border: 0
                    }}/>
                    <div style={{
                        textAlign: "center",
                        borderTop: '1px solid #000',
                        fontSize: 12,
                        paddingTop: 8,
                        paddingBottom: 8
                    }}>
                        <a href={endpoint + username}
                           target="_blank" rel="noreferrer"
                        >{endpoint + username}</a>
                    </div>
                </div>}
                <div/>
                <div style={{
                    position: "fixed", left: 15,
                    bottom: 15,
                }}>
                    <div id={id} style={{
                        color: color,
                        backgroundColor: backgroundColor,
                        display: "flex",
                        flexDirection: 'row',
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingRight: 20,
                        paddingLeft: 20,
                        borderRadius: 50,
                        zIndex: 10000,
                        fontSize: 16,
                        lineHeight: "unset",
                        justifyContent: "center",
                        cursor: "pointer"
                    }} onClick={() => setOpen(s => !s)}>
                        <img src={kofiIcon} width={39} alt={"kofi icon"}/>
                        <div style={{marginLeft: 8, fontWeight: 'bold'}}>{label}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
