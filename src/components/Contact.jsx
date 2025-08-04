import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { CheckCircle } from "lucide-react";
import SocialIcons from "./SocialIcons";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [done, setDone] = useState(false);

  const onSubmit = (data) => {
    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then(
        () => {
          setDone(true);
          reset();
          setTimeout(() => setDone(false), 4000); // Hilangkan toast setelah 4 detik
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-12 min-h-[80vh] items-center bg-base-100"
    >
      {/* Left Side */}
      <div className="space-y-4 relative">
        <h2 className="text-4xl font-bold text-neutral">Get in Touch</h2>
        <h3 className="text-3xl font-bold text-orange-500">Contact me</h3>
        <p className="text-base text-neutral-content">
          Feel free to send me a message. I’ll get back to you as soon as I can.
        </p>
        <div className="absolute w-32 h-32 bg-cyan-200 opacity-40 rounded-full blur-3xl -z-10 top-0 left-0" />

        <SocialIcons />
      </div>

      {/* Right Side */}
      <div className="relative">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col w-full max-w-md mx-auto"
        >
          {/* Name */}
          <input
            {...register("user_name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
            className="input rounded-lg input-warning w-full"
          />
          {errors.user_name && (
            <span className="text-red-500 text-sm">{errors.user_name.message}</span>
          )}

          {/* Email */}
          <input
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Email"
            className="input rounded-lg input-warning w-full"
          />
          {errors.user_email && (
            <span className="text-red-500 text-sm">{errors.user_email.message}</span>
          )}

          {/* Subject Dropdown */}
          <select
            {...register("subject", { required: "Please select a subject" })}
            className="select rounded-lg select-warning w-full"
            defaultValue=""
          >
            <option value="" disabled>
              Select Subject
            </option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Collaboration">Collaboration</option>
            <option value="General Question">General Question</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <span className="text-red-500 text-sm">{errors.subject.message}</span>
          )}

          {/* Message */}
          <textarea
            {...register("message", { required: "Message cannot be empty" })}
            placeholder="Message"
            className="textarea rounded-lg textarea-bordered input-warning w-full min-h-[8rem]"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 w-fit py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Send
          </button>

          {/* Success Message */}
          {done && (
            <div className="alert alert-success shadow-lg animate-fade-in-down">
              <CheckCircle className="w-5 h-5 text-green-700" />
              <span>Thanks for contacting me! I’ll reply soon 😊</span>
            </div>
          )}
        </form>
        <div className="absolute w-32 h-32 bg-purple-400 opacity-40 rounded-full blur-3xl -z-10 bottom-0 right-0" />
      </div>
    </div>
  );
};

export default Contact;
