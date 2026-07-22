import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactForm() {
  return (
    <section className="max-w-[560px] mx-auto py-24 px-8" id="contact">
      <AnimateOnScroll>
        <div className="text-center mb-10">
          <h2
            className="text-[2.3rem] max-md:text-[1.8rem] font-bold text-forest mb-2"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Let&apos;s Talk
          </h2>
          <p className="text-gray">
            We are launching in New York City and looking for cafe partners.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3.5 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="cafe"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                Cafe Name
              </label>
              <input
                type="text"
                id="cafe"
                name="cafe"
                required
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
            >
              Location (neighborhood)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
            >
              Anything else we should know?
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white h-[90px] resize-y focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-terra text-white font-semibold text-[0.95rem] rounded-[5px] border-none cursor-pointer mt-2 hover:bg-terra-dark hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(198,93,62,0.3)] transition-all"
          >
            Send
          </button>
        </form>
      </AnimateOnScroll>
    </section>
  );
}
