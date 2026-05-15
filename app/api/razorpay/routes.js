import { NextRequest } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectDb";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()

     