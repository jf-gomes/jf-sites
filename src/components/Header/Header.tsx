import logo from '../../assets/logo.png'

export default function Header(){

    return (
        <>
            <div className='flex justify-around'>
                <img className='w-32' src={logo} alt="JF Sites" />
                <button type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
            </div>
            <div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label">
                <div className='flex flex-col items-center'>
                    <img className='w-32' src={logo} alt="JF Sites" />
                    <nav>
                        <ul className='flex flex-col gap-6 text-center'>
                            <li className='hover:text-pink hover:underline cursor-pointer'>Sobre nós</li>
                            <li className='hover:text-pink hover:underline cursor-pointer'>Soluções</li>
                            <li className='hover:text-pink hover:underline cursor-pointer'>Contato</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}