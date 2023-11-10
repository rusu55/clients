import {connectToDB} from '@/utils/db';
import Client from '@/models/client-model';
import { BillboardClient } from '@/app/(dshboard)/clients/components/BillboardClient';
interface Props{
  params: {
    year: string
  }
}

const OverviewPage = async ({params}: Props) => {
  
  const clients = await Client.find({weddingDate: {$gte: `${params.year}-01-01`, $lte: `${params.year}-12-31`}});
  console.log(clients)
  return (
    <BillboardClient />
  )
}

export default OverviewPage