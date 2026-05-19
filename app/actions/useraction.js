"use server"
import Razorpay from "razorpay"
import Payment from "@/app/models/Payment"
import connectDB from "@/app/db/connectDb"
import User from "@/app/models/User"
import { use } from "react"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x=await instance.orders.create(options)

    await Payment.create({
        oid: x.id,
        amount: amount,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,

    })
    return x;


}

export const fetchuser = async (username) => {
    await connectDB()

    let u = await User.findOne({ username })

    if (!u) {
        return null
    }

    let user = u.toObject({ flattenObjectIds: true })

    return user
}

export const fetchpayments = async (username) => {
    await connectDB()

    let p = await Payment.find({ to_user: username })
        .sort({ amount: -1 })
        .lean()

    return JSON.parse(JSON.stringify(p))
}

export const updateprofile = async (data, oldusername) => {

    await connectDB()

    let ndata = data

    if (oldusername !== ndata.username) {

        let u = await User.findOne({ username: ndata.username })

        if (u) {
            return { error: "Username already exists" }
        }
    }

    await User.updateOne(
        { email: ndata.email },
        ndata
    )

    return { success: true }
}