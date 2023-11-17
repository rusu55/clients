import {useMutation, useQueryClient} from 'react-query';
import axios from 'axios';
import { interfaceClient } from '@/types/interfaces';

const useAddClient = () =>{
    const queryClient = useQueryClient(); 

    return useMutation<interfaceClient, Error>({
        mutationFn: (addClient) =>
            axios
                .post('/api/clients', addClient)
                .then(res => res.data),
        onSuccess: (savedClient, newClient) =>{
            console.log(savedClient)
            queryClient.invalidateQueries()
        }
    })
}

export default useAddClient