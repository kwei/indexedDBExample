"use client"

import { ReactNode, memo, useMemo } from "react"
import { Loading } from "./Loading"

interface ButtonPropsType {
    children: ReactNode
    color: 'blue' | 'red' | 'gray'
    onClick?: () => void
    loading?: boolean
}

export const Button = memo((props: ButtonPropsType) => {
    const { children, onClick, loading = false, color } = props

    const btnColor = useMemo(() => {
        if (color === 'blue') return 'bg-[var(--btn-bg-blue)]'
        else if (color === 'red') return 'bg-[var(--btn-bg-red)]'
        else if (color === 'gray') return 'bg-[var(--btn-bg-gray)]'
    }, [color])

    return (
        <button 
            className={`relative select-none w-fit font-semibold h-fit rounded-2.5 whitespace-nowrap cursor-pointer px-8 py-2 ${btnColor} ${loading ? 'cursor-progress' : ''}`}
            onClick={onClick}
            disabled={loading}
        >
            <div className={`${loading ? 'absolute w-full left-0 flex' : 'hidden'}`}>
                <Loading className="m-auto" />
            </div>
            <div className={`${loading ? 'invisible' : 'visible'}`}>
                {children}
            </div>
        </button>
    )
})
Button.displayName = 'Button'