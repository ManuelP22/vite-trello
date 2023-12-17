import { Outlet } from 'react-router'
import { Header } from '@/components/_components/Header'
import { Footer } from './components/_components/Footer'

const IndexLayout = () => {
  return (
    <div className='h-screen bg-slate-100'>
        <Header />
            <main className='pt-40 pb-20 bg-slate-100'>
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}

export default IndexLayout