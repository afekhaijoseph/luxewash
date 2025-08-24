import whatsapp from "../assets/whatsapp.png"

const handleBookClick = () => {
  if (typeof window !== "undefined" && window.gtag_report_conversion) {
    window.gtag_report_conversion("https://luxewash.vercel.app/thank-you");
  } else {
    // fallback in case gtag is not available
    window.location.href = "https://luxewash.vercel.app/thank-you";
  }
};

const Whatsapp = () => {
  return (
    <div className="w-full flex flex-col items-center my-10">
        <div className="max-w-28 my-4">
            <img src={whatsapp} alt="Whatsapp logo" />
        </div>
        <h3 className="text-2xl my-3">Direct Conversation</h3>
        <p className="text-center my-3">Our team is ready to assist with your pickup request through WhatsApp. Simply click below to begin a conversation with us.</p>
        <a onClick={handleBookClick} href='https://wa.me/2349161497203' target='_blank' className="bg-green-500 text-white p-3 rounded-md my-4 border border-green-500 hover:bg-white hover:text-green-500">Connect Via Whatsapp</a >
    </div>
  )
}

export default Whatsapp