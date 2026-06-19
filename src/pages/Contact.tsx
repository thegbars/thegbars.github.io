import Gutters from "@/components/Gutters.tsx";
import { Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        reset();
    };

    return (
        <div>
            <Gutters>
                <div className="flex flex-col content-center justify-center text-center mt-16 gap-4">
                    <h1 className="text-6xl text-purple-700 font-bold">
                        Lets work together!
                    </h1>

                    {/* Contact Form */}
                    <div className="mt-12 text-left">
                        {isSubmitSuccessful && (
                            <div className="mb-6 rounded-2xl border-2 border-green-500 bg-green-50 px-6 py-4 text-green-700 text-center font-medium">
                                ✓ Message sent — I'll get back to you soon!
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            className="flex flex-col gap-5"
                        >
                            {/* Name */}
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold uppercase tracking-wide text-purple-700"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Angela Murray"
                                    autoComplete="name"
                                    className={`rounded-2xl border-2 px-5 py-3 text-lg outline-none transition-colors focus:border-purple-700 focus:bg-purple-50 ${
                                        errors.name ? "border-red-400" : "border-purple-700"
                                    }`}
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <span className="text-sm text-red-500 font-medium" role="alert">
                    {errors.name.message}
                  </span>
                                )}
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold uppercase tracking-wide text-purple-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="murray@gmail.com"
                                        autoComplete="email"
                                        className={`rounded-2xl border-2 px-5 py-3 text-lg outline-none transition-colors focus:border-purple-700 focus:bg-purple-50 ${
                                            errors.email ? "border-red-400" : "border-purple-700"
                                        }`}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Enter a valid email address",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <span className="text-sm text-red-500 font-medium" role="alert">
                      {errors.email.message}
                    </span>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-semibold uppercase tracking-wide text-purple-700"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+1 (412) 123-4567"
                                        autoComplete="tel"
                                        className={`rounded-2xl border-2 px-5 py-3 text-lg outline-none transition-colors focus:border-purple-700 focus:bg-purple-50 ${
                                            errors.phone ? "border-red-400" : "border-purple-700"
                                        }`}
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[+\d][\d\s\-().]{6,19}$/,
                                                message: "Enter a valid phone number",
                                            },
                                        })}
                                    />
                                    {errors.phone && (
                                        <span className="text-sm text-red-500 font-medium" role="alert">
                      {errors.phone.message}
                    </span>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold uppercase tracking-wide text-purple-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="What's on your mind?"
                                    rows={5}
                                    className={`rounded-2xl border-2 px-5 py-3 text-lg outline-none transition-colors resize-y focus:border-purple-700 focus:bg-purple-50 ${
                                        errors.message ? "border-red-400" : "border-purple-700"
                                    }`}
                                    {...register("message", {
                                        required: "Message is required",
                                        minLength: {
                                            value: 10,
                                            message: "Message must be at least 10 characters",
                                        },
                                    })}
                                />
                                {errors.message && (
                                    <span className="text-sm text-red-500 font-medium" role="alert">
                    {errors.message.message}
                  </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-2xl border-2 border-purple-700 py-4 text-xl font-bold text-purple-700 transition-colors hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending…" : "Send message"}
                            </button>
                        </form>
                    </div>

                    {/* Social Links */}
                    <div className="mt-16">
                        <h2 className="text-purple-700 text-4xl">Or visit me here:</h2>
                        <div className="grid grid-cols-1 gap-4 my-8">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/thegbars"
                            >
                                <div className="rounded-2xl border-2 border-purple-700 py-8 hover:bg-purple-50 transition-colors cursor-pointer flex gap-4 justify-center items-center hover:font-bold">
                                    <Github className="h-[3em] w-[3em]" />
                                    <p className="text-2xl">thegbars</p>
                                </div>
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/greyson-barsotti/"
                            >
                                <div className="rounded-2xl border-2 border-purple-700 py-8 hover:bg-purple-50 transition-colors cursor-pointer flex gap-4 justify-center items-center hover:font-bold">
                                    <Linkedin className="h-[3em] w-[3em]" />
                                    <p className="text-2xl">Greyson Barsotti</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Gutters>
        </div>
    );
}