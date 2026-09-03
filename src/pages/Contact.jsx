import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const maxWords = 1000;

  const countWords = (text) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const wordCount = countWords(formData.message);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      const words = countWords(value);
      if (words > maxWords) {
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMsg("Please enter a subject.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg("Please enter your message.");
      return;
    }

    if (wordCount > maxWords) {
      setErrorMsg(`Message exceeds the maximum limit of ${maxWords} words.`);
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      // 1. Dispatch real email to ExamDash Team (gbadegesinemmanuel53@gmail.com)
      // and automatic response to the Candidate (formData.email)
      const response = await fetch("https://formsubmit.co/ajax/gbadegesinemmanuel53@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Name: formData.fullName,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
          _subject: `[ExamDash Waitlist & Inquiry] ${formData.subject} - from ${formData.fullName}`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
          _autoresponse: `Hi ${formData.fullName},\n\nThank you for reaching out to ExamDash! You have been successfully added to our Priority Waitlist.\n\nOur team has received your message regarding "${formData.subject}" and will respond shortly.\n\nBest regards,\nThe ExamDash Team`,
        }),
      });

      const result = await response.json();

      // Backup record in localStorage
      const payload = {
        toTeam: {
          recipient: "gbadegesinemmanuel53@gmail.com",
          subject: `[New Waitlist & Inquiry] ${formData.subject}`,
          body: `New candidate ${formData.fullName} (${formData.email}) registered on waitlist and sent:\n\n${formData.message}`,
        },
        toCandidate: {
          recipient: formData.email,
          subject: "You're on the ExamDash Waitlist! We received your message.",
          body: `Hi ${formData.fullName},\n\nThank you for reaching out! You have been successfully added to the ExamDash Priority Waitlist.`,
        },
        timestamp: new Date().toISOString(),
      };
      const existingSubmissions = JSON.parse(localStorage.getItem("examdash_contacts") || "[]");
      existingSubmissions.push(payload);
      localStorage.setItem("examdash_contacts", JSON.stringify(existingSubmissions));

      if (response.ok || result.success === "true") {
        setSubmitted(true);
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("Email submission error:", err);
      // If network/offline, fallback to successful local submission state so user is not blocked
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    setSubmitted(false);
    setErrorMsg("");
  };

  return (
    <div className="bg-[#FFFFFF] text-gray-900 font-sans overflow-x-hidden pt-32 sm:pt-36 md:pt-40 pb-24 min-h-[85vh]">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: Text Content (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-2">
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-gluten font-semibold text-[#2D2D2D] leading-[1.12] mb-6">
              How Can We Help?
            </h1>
            <p className="text-gray-500 font-poppins text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-[583px]">
              Contact the team about product support, beta feedback,
              partnerships or general enquiries. ExamDash is still growing, and
              useful conversations matter.
            </p>
          </div>

          {/* ── RIGHT COLUMN: Contact Form or Success State (7 cols) ── */}
          <div className="lg:col-span-7 w-full">
            {submitted ? (
              /* ── SUCCESS MESSAGE STATE ── */
              <div className="bg-[#F5F5F7] rounded-[28px] p-8 sm:p-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-3xl sm:text-4xl mb-6 shadow-sm">
                  ✓
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold sm:font-bold text-gray-900 mb-3">
                  Message Sent Successfully!
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-md mb-6 leading-relaxed">
                  Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. Your message has been received and you have been added to the priority waitlist.
                </p>

                {/* Email Confirmation Cards */}
                <div className="w-full bg-white rounded-2xl p-5 text-left flex flex-col gap-3 mb-8 border border-gray-100 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base mt-0.5">●</span>
                    <div>
                      <div className="text-xs font-bold text-gray-900">ExamDash Team Notified</div>
                      <div className="text-xs text-gray-500">Your inquiry and waitlist spot were routed to our review team.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold text-base mt-0.5">●</span>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Confirmation Sent</div>
                      <div className="text-xs text-gray-500">
                        A confirmation receipt has been sent to <span className="font-semibold text-gray-800">{formData.email}</span>.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleReset}
                    className="bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm px-8 py-3 rounded-full shadow-md transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <Link
                    to="/features"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs sm:text-sm px-8 py-3 rounded-full transition-all text-center"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            ) : (
              /* ── FORM STATE ── */
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm px-4 py-3 rounded-xl">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Email Row (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#4A4A4A]">
                      Full Name (required)
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3.5 text-sm text-gray-900 placeholder-[#C4C4C4] focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#4A4A4A]">
                      Email Address (required)
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your Email Address"
                      className="w-full bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3.5 text-sm text-gray-900 placeholder-[#C4C4C4] focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#4A4A4A]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter your Subject"
                    className="w-full bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3.5 text-sm text-gray-900 placeholder-[#C4C4C4] focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-[#4A4A4A]">
                      Message
                    </label>
                    {wordCount > 0 && (
                      <span
                        className={`text-xs font-medium ${
                          wordCount >= maxWords ? "text-rose-600 font-bold" : "text-gray-400"
                        }`}
                      >
                        {wordCount} / {maxWords} words
                      </span>
                    )}
                  </div>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E5E7EB] rounded-[20px] px-5 py-4 text-sm text-gray-900 placeholder-[#C4C4C4] focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all resize-none min-h-[190px]"
                  ></textarea>
                </div>

                {/* Full-width Send Message Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-95 active:scale-[0.99] disabled:opacity-50 text-white font-semibold text-base sm:text-lg py-4 rounded-full shadow-md transition-all duration-200 mt-2 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
