import {z} from 'zod';

export const ClientFormSchema = z.object({
    email: z.string().min(1, 'Field is required').email({ message: 'Must be a valid email' }),
    firstName: z.string().min(3, 'Name required').max(20, 'Name to Long'),
    lastName: z.string().min(3, 'Name required').max(20, 'Name to Long'),    
    phone: z.string(),
    weddingDate: z.date(),        
    value: z.string(),
    services: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
})