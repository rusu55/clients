import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import {LuPlus} from 'react-icons/lu';
import Link from "next/link"

export const BillboardClient = () => {
  return (
    <>
        <div className="flex items-center justify-between">
            <Heading title="test" description="Title Test" />
            <Link href='/clients/new' className="bg-primary text-primary-foreground text-sm hover:bg-primary/80 px-4 py-2 rounded-lg flex items-center transition duration-200">
                <LuPlus className=" inline-block mr-1 h-4 w-4"/>Add New
            </Link>
        </div>
        <Separator />
    </>
  )
}