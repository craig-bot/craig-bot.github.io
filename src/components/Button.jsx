import React from 'react';

export const Button = ({ children, className, link, onClick, colours, disabledPadding }) => {
    colours = {
        ...({
            // default colours
            from: 'blue-500',
            to: 'blue-700',
            focusFrom: 'blue-700',
            focusTo: 'blue-500',
            text: 'white'
        }),
        ...colours
    }
    return <button
        className={`bg-gradient-to-br from-${colours.from} to-${colours.to} focus:from-${colours.focusFrom} focus:to-${colours.focusTo} text-${colours.text} hover:opacity-90 rounded ${disabledPadding ? '' : 'px-2 py-0.5'} font-medium text-lg ` + (className || '')}
        onClick={link ? () => window.location.href = link : onClick || null}
    >{children}</button>
}