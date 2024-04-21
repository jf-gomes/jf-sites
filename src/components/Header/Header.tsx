import logo from '../../assets/logo.png'
import 'flowbite';

export default function Header(){

    return (
        <>
            <div className='flex items-center justify-around'>
                <div className="text-center">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                </div>
                <img className='w-20' src={logo} alt="JF Sites" />
            </div>

            <div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label">
            <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
            </button>
                
                <div className="grid grid-cols-2 gap-4">
                    <ul>
                        <li className='hover:text-pink cursor-pointer hover:underline'>Sobre nós</li>
                        <li className='hover:text-pink cursor-pointer hover:underline'>Nossos produtos</li>
                        <li className='hover:text-pink cursor-pointer hover:underline'>Contato</li>
                    </ul>
                </div>
            </div>
        </>
    )
}