import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/app/models/Payment";
import connectDB from "@/app/db/connectDb";
import { NextResponse } from "next/server";

export const POST = async (req) => {

    await connectDB();

    let body = await req.formData();
    body = Object.fromEntries(body);

    let p = await payment.findOne({
        oid: body.razorpay_order_id
    });

    if (!p) {
        return NextResponse.json(
            { success: false, message: "order id not found" },
            { status: 404 }
        );
    }

    let xx = validatePaymentVerification(
        {
            order_id: body.razorpay_order_id,
            payment_id: body.razorpay_payment_id,
        },
        body.razorpay_signature,
        process.env.KEY_SECRET
    );

    if (xx) {

        const updatePayment = await payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: true },
            { new: true }
        );

      return NextResponse.redirect(
    new URL(
        `/${updatePayment.to_user}?paymentdone=true`,
        process.env.NEXT_PUBLIC_URL
    )
);

    } else {

        return NextResponse.json(
            { success: false, message: "payment verification failed" },
            { status: 400 }
        );
    }
};