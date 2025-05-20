import whatsapp from "../assets/whatsapp.png"

const Whatsapp = () => {
  return (
    <div className="w-full flex flex-col items-center my-10">
        <div className="max-w-28 my-4">
            <img src={whatsapp} alt="" />
        </div>
        <h3 className="text-2xl my-3">Direct Conversation</h3>
        <p className="text-center my-3">Our team is ready to assist with your pickup request through WhatsApp. Simply click below to begin a conversation with us.</p>
        <button className="bg-green-500 text-white p-3 rounded-md my-4">Connect Via Whatsapp</button>
    </div>
  )
}

export default Whatsapp