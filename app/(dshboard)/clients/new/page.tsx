import dynamic from "next/dynamic";

const ClientForm = dynamic(
  () => import('@/app/(dshboard)/clients/components/ClientForm'),
  {
    ssr: false,
    loading: () => {return(<div>Loading ...</div>)}
  }
);

const NewClientPage = () =>{
  return(
    <ClientForm />
  )
}
export default NewClientPage