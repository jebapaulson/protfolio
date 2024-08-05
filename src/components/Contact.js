export default function Contact() {
  const config = {
    email: "jebapaulson@gmail.com",
    phone: "9566671403",
  };
  return (
    <section className="flex flex-col  bg-primary px-5 py-32" id="contact">
      <div className=" flex flex-col items-center text-white">
        <h1 className="text-4xl border-b-4 border-pri mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className=" pb-6">
          If you want to discuss more in detail, please contact me{" "}
        </p>{" "}
        <p className="py-2">
          <span className="font-bold">Email: </span>
          {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold">Phone: </span>
          {config.phone}
        </p>
      </div>
    </section>
  );
}
