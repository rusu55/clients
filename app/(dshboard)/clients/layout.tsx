
import { SideNav } from "@/components/nav/sideNav/SideNav"
interface Props{
    children: React.ReactNode
}
const ClientsLayout = ({children}: Props) => {
  return (
    <div className='flex gap-2'>
        <SideNav />
        <main className="max-w-7xl flex-1 mx-auto py-4">
          {children}
        </main>        
    </div>   
  )
}

export default ClientsLayout