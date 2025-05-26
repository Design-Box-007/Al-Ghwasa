"use client";

// import { sendEmail } from "@/actions/sendEmail";
import { useState } from "react";
// import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactForm as ContactFormType } from "@/types";
import { toast } from "react-toastify";
import { sendFormData } from "@/api/sendFormData";

// Validation schema
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().regex(/^\d+$/, "Mobile number must be a number"),
    product: z.string(),
    message: z.string().min(1, "Message is required"),
});

const ContactForm: React.FC<{ className: string }> = ({ className = "" }) => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // <-- Add this
    } = useForm({
        resolver: zodResolver(formSchema),
    });


    const onSubmit = async (formData: ContactFormType) => {
        console.log("Form Submitted!");
        console.log("Form Data:", formData);
        setLoading(true);

        const payload = { ...formData, sheetName: "ContactForm1" };

        try {
            await sendFormData(payload);
            toast.success("Thanks for Submitting!");
            reset(); // <-- Clear the form here
        } catch (err) {
            console.error("Submission failed", err);
            toast.error("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className={`text-white p-8 rounded-xl ${className}`}>
            <h2 className="text-3xl font-semibold">Book a Free Consultation</h2>
            <p className="italic text-sm mb-6">
                {"// Reach out today and take the first step towards an unforgettable experience."}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative z-0 w-full">
                        <input
                            type="text"
                            {...register("name")}
                            className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white"
                            placeholder=" "
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Name
                        </label>
                        {errors.name && <p className="text-yellow-300 text-xs">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="relative z-0 w-full">
                        <input
                            type="email"
                            {...register("email")}
                            className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white"
                            placeholder=" "
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email
                        </label>
                        {errors.email && <p className="text-yellow-300 text-xs">{errors.email.message}</p>}
                    </div>
                </div>

                {/* Mobile & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Mobile */}
                    <div className="relative z-0 w-full">
                        <input
                            type="text"
                            {...register("mobile")}
                            className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white"
                            placeholder=" "
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Mobile No
                        </label>
                        {errors.mobile && <p className="text-yellow-300 text-xs">{errors.mobile.message}</p>}
                    </div>

                    {/* Product */}
                    <div className="relative z-0 w-full">
                        <select
                            {...register("product")}
                            className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white appearance-none"
                            defaultValue=""
                            style={{
                                colorScheme: 'dark',
                                backgroundColor: 'transparent',
                                color: 'white',
                            }}
                        >
                            <option value="" disabled>
                                Select a product
                            </option>
                            <option className="text-black" value="gastec">Gastec</option>
                            <option className="text-black" value="mx3">MX3</option>
                            <option className="text-black" value="oiltester">Oil Tester</option>
                        </select>

                        {/* <label className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-[36px] -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Product
                        </label> */}

                        {errors.product && (
                            <p className="text-yellow-300 text-xs mt-1">
                                {errors.product.message}
                            </p>
                        )}
                    </div>

                </div>

                {/* Message */}
                <div className="relative z-0 w-full">
                    <textarea
                        {...register("message")}
                        className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white resize-none"
                        rows={3}
                        placeholder=" "
                    ></textarea>
                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        How can we help you?
                    </label>
                    {errors.message && <p className="text-yellow-300 text-xs">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-white text-red-600 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
