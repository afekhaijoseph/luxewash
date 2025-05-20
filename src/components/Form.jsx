
const Form = () => {
  return (
        <form action="" className="w-full md:w-8/12 mx-auto bg-secondary text-white py-8 px-2 md:p-8 my-8 rounded-md ">
            <div className="w-10/12 mx-auto flex flex-col gap-4">
            <div className="flex gap-2 flex-col md:flex-row">
                <label htmlFor="">Name:</label>
                <input className="w-full text-gray-700 rounded-md p-1" type="text" />
            </div>
            <div className="flex gap-2 flex-col md:flex-row">
                <label htmlFor="">Address:</label>
                <input className="w-full text-gray-700 rounded-md p-1" type="text" />
            </div>
            <div className="flex gap-2 flex-col md:flex-row">
                <label htmlFor="" className="whitespace-nowrap">Item type:</label>
                <input className="w-full text-gray-700 rounded-md p-1" type="text" />
            </div>
            <div className="flex gap-2 flex-col md:flex-row">
                <label htmlFor="">Pickup date:</label>
                <input className="text-gray-700 rounded-md p-1" type="date" />
            </div>
            <div className="flex gap-2 flex-col md:flex-row">
                <label htmlFor="additional-note">Note:</label>
                <textarea className="w-full rounded-md p-1" name="additional-note" id="" rows={4} placeholder='Any special instructions or details about your items.'></textarea>
            </div>    
            <div className='w-full flex items-center my-2'>
              <button className='mx-auto border-2 p-2 rounded-md hover:bg-white hover:text-[#36454F] hover:border-[#36454F]'>Submit order</button>      
            </div>
             
            </div>
            
        </form>
  )
}

export default Form