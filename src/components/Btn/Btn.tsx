interface BtnProps{
    content: string,
    color: 'pink' | 'darkBlue'
}

export default function Btn({ content, color }: BtnProps){

    return (
        <button className={color == 'darkBlue' ? 'bg-darkBlue text-white p-2 w-40 rounded' : 'bg-pink text-white p-2 w-40 rounded'}>
            {content}
        </button>
    )
}