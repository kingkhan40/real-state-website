import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-100 shadow-xl'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500 text-xl '>Khan</span>
          </h1>
        </Link>
        <form className='bg-slate-200 px-5 py-2 rounded-full flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600 cursor-pointer' />
        </form>
        <ul className='flex gap-6'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/sign-up'>
            <li className=' text-slate-700 hover:underline'> Sign in</li>
          </Link>
       
        </ul>
      </div>
    </header>
  );
}