'use client';

import { useForm } from 'react-hook-form';
import {format} from 'date-fns';
import { Form, FormField, FormLabel, FormControl, FormMessage, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from "@/lib/utils"
import {LuCalendarDays} from 'react-icons/lu';
import {services} from '@/constants'
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';


const ClientForm = () => {

  const formSchema = z.object({
    email: z.string().nonempty('Field is required').email({ message: 'Must be a valid email' }),
    firstName: z.string().nonempty('Name required'),
    lastName: z.string().nonempty('Name required'),    
    phone: z.string(),
    weddingDate: z.date(),        
    value: z.string(),
    services: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
})

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        firstName: "",
        lastName:"",        
        email: "",
        phone: "",
        weddingDate: new Date(),
        services: [],
        value: "",
    },
  })

  const onSubmit = (data : z.infer<typeof formSchema>) =>{
    console.log(data);
  }

  

  return (
    <div className="py-2 pb-4">
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <div className="flex w-full max-w-full items-center space-x-2 ">
                  <FormField control={form.control} name='lastName' render={({field}) => (
                    <FormItem className=' w-[300px]'>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )} />
                  <FormField control={form.control} name='firstName' render={({field}) => (
                    <FormItem className='w-[300px]'>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )} />
              </div>
              <FormField control={form.control} name='email' render={({field}) => (
                    <FormItem className='max-w-[610px]'>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Email Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name='phone' render={({field}) => (
                    <FormItem className='max-w-[610px]'>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
               <FormField control={form.control} name="weddingDate" render={({field}) =>(
                            <FormItem className="flex flex-col mt-3">
                                <FormLabel>Wedding Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                          <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                                >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) :(
                                                    <span>Pick a date</span>
                                                )}
                                                <LuCalendarDays className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                          </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                 date < new Date("2000-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>                                
                                <FormMessage />
                            </FormItem>
                        )} /> 
                  <FormField control={form.control} name="services" render={() =>(
                            <FormItem className="mt-3">
                                <div className="mb-4">
                                    <FormLabel className="text-base">Services</FormLabel>                                    
                                </div>
                                {services.map((service) => (
                                    <FormField
                                        key={service.id}
                                        control={form.control}
                                        name='services'
                                        render={({ field }) => {
                                            return(
                                                <FormItem
                                                    key={service.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(service.id)}
                                                        onCheckedChange={(checked) => {
                                                        return checked
                                                            ? field.onChange([...field.value, service.id])
                                                            : field.onChange(
                                                                field.value?.filter(
                                                                (value) => value !== service.id
                                                                )
                                                            )
                                                        }}
                                                    />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {service.label}
                                                        </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                                 <FormMessage />
                            </FormItem>
                        )} /> 
                     <FormField control={form.control} name="value" render={({field}) =>(
                            <FormItem className="mt-3">
                                <FormLabel>Value</FormLabel>
                                <FormControl>
                                <Input placeholder="value" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <div className="pt-6 space-x-2 flex items-center justify-end w-full">                           
                            <Button type="submit">Save Client</Button>
                     </div>
          </form>
      </Form>
    </div>
  )
}

export default ClientForm