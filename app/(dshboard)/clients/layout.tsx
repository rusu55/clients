
import { SideNav } from "@/components/nav/sideNav/SideNav"
interface Props{
    children: React.ReactNode
}
const ClientsLayout = ({children}: Props) => {
  return (
    <>
        <SideNav />
        {children}
    </>    
  )
}

export default ClientsLayout