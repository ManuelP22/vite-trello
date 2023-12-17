import { Folder } from 'lucide-react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
        <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
            <Folder
            width={30}
            height={30}
            color='green'
            />
            <p className="text-2xl text-neutral-600 pb-1 font-sans font-bold">
                FC Admin
            </p>
        </div>
    </Link>
  )
}

export default Logo