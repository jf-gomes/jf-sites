interface BtnProps{
    content: string,
    color: 'pink' | 'darkBlue',
    size: 'small' | 'large',
    hoverBg: 'white' | 'blue'
}

export default function Btn({ content, color, size, hoverBg }: BtnProps){

    let style: string = ''

    if (color == 'darkBlue'){
        style = 'bg-darkBlue text-white p-2 rounded transition'
    } else if (color == 'pink'){
        style = 'bg-pink text-white p-2 rounded transition'
    }

    if (size == 'small'){
        style += ' w-24 rounded-full'
    } else {
        style += ' w-40'
    }

    if (hoverBg == 'blue'){
        style += ' hover:bg-blue hover:text-white'
    } else {
        style += ' hover:bg-white hover:text-blue'
    }

    return (
        <button className={style}>
            {content}
        </button>
    )
}