import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import '../font.css'

export default function Prologue() {
    return (
        <div style={{
            color: 'red',
        }}>
            <h1 style={{
                fontFamily: 'CyrulikRounded',
                fontSize: 80
            }}>RUMBLE</h1>
            <h3>In The Jungle</h3>
        </div>
    )
}