import Link from "next/link";
import { IconType } from "react-icons";

interface Props{
  icon: IconType,
  label: string,
  href: string,
  selected: Boolean
}

export const MenuItem = ({icon: Icon, label, href, selected}: Props) => {
  return (
    <Link href={href} className={
      `p-2.5
        flex
        pl-5
        rounded-md
        gap-6
        item-center       
        md:cursor-pointer     
        font-medium 
      hover:text-neutral-400
        duration-300
        transition
      ${selected ? 'border-b-neutral-800' : 'border-transparent'}
      ${selected ? 'text-neutral-800' : 'text-neutral-400'}
      `}>
        <Icon size={23} className='min-w-max'/>
        {label}
    </Link>
  )
}
