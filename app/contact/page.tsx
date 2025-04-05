'use client'

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, FormLabel, Input, Textarea, Grid, GridItem } from '@chakra-ui/react'

interface FormInput {
    name: string
    phone: string
    email: string
    websiteUrl: string
    message: string

}


function Contact() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormInput>()
    const onSubmit: SubmitHandler<FormInput> = (data) => {
        
        console.log(data)
    }
   
    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <Grid
                templateAreas={`
                    "name phone"
                    "email websiteUrl"
                    "message message"
                    `}
                w={"35em"}
                gap={2}
                gridTemplateRows={'6rem 6rem 10rem'}
                gridTemplateColumns={'1fr 1fr'}
            >
                <GridItem area={'name'}>
                    <div>
                        <FormLabel htmlFor="Name">Name:</FormLabel>
                        <Input type="text" id="Name" {...register('name')}
                        />
                    </div>
                </GridItem>
                <GridItem area={'phone'}>
                    <div>
                        <FormLabel htmlFor="phone">Phone:</FormLabel>
                        <Input type="tel" id="phone" {...register('phone')} />
                    </div>
                </GridItem>
                <GridItem area={'email'}>

                    <div>
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <Input type="email" id="email" {...register('email')} />
                    </div>
                </GridItem>
                <GridItem area={'websiteUrl'}>

                    <div>
                        <FormLabel htmlFor="websiteUrl">Website URL:</FormLabel>
                        <Input type="url" id="websiteUrl" {...register('websiteUrl')} />
                    </div>
                </GridItem>
                <GridItem area={'message'}>

                    <div>
                        <FormLabel htmlFor="message">Message:</FormLabel>
                        <Textarea id="message" {...register('message')} size='lg' />
                    </div>
                </GridItem>
            </Grid>
            <Button type="submit">Submit</Button>

        </form >

    );
}

export default Contact