import mongoose from 'mongoose';
import { format } from "date-fns";
import { NextRequest, NextResponse } from 'next/server';
import {getServerSession} from 'next-auth'
import { connectToDB } from "@/utils/db";
import Client from '@/models/client-model';
import Project from "@/models/project-model";
import Service from "@/models/service-model";
import DateRange from "@/models/dataRange-model";
import Payment from "@/models/payment-model";


export const POST = async (request: NextRequest) =>{
    const body = await request.json();

    await connectToDB();
    const client = await Client.findOne({email: body.email})

    if(client) return NextResponse.json('Client already exist', {status: 400})
}