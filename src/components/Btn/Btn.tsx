interface BtnProps{
    content: string,
    color: 'pink' | 'darkBlue',
    size: 'small' | 'large'
}

export default function Btn({ content, color, size }: BtnProps){

    let style: string = ''

    if (color == 'darkBlue'){
        style = 'bg-darkBlue text-white p-2 rounded hover:bg-white hover:text-blue transition'
    } else if (color == 'pink'){
        style = 'bg-pink text-white p-2 rounded hover:bg-white hover:text-blue transition'
    }

    if (size == 'small'){
        style += ' w-24 rounded-full'
    } else {
        style += ' w-40'
    }

    return (
        <button className={style}>
            {content}
        </button>
    )
}