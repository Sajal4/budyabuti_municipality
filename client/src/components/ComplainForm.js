import React, {useState} from 'react'

const ComplainForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };
    const handleSubmit=()=>{
        alert("Your Complain submitted Successfully!")
    }
  return (
    <div>
        <form className='complainForm'>
            <div className='formElement'>
                <label htmlFor='name'>Name </label>
                <input type='text' name='name' id='name' placeholder='Enter your name...'/>
            </div>
            <div className='formElement'>
                <label htmlFor='mobile'>Mobile no. </label>
                <input type="tel" name='mobile' id='mobile' placeholder='Enter your contact No.'/>
            </div>
            <div className='formElement'>
                <label htmlFor='address'>Address </label>
                <textarea name='address' id='address' placeholder='Enter Your full address...' rows='4' cols='35'></textarea>
            </div>
            <div className='formElement'>
                <label htmlFor='description'>Description </label>
                <textarea name='description' id='description' placeholder='Describe your complain briefly...' rows='4' cols='35'></textarea>
            </div>
            <div className='formElement'>
                <label htmlFor='image'>Upload Image </label>
                <input type="file" id='image' accept="image/*" onChange={handleImageUpload} />
                {selectedImage && (
                <div>
                    <h2>Preview:</h2>
                    <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={{ width: '200px' }} />
                </div>
                )}
            </div>
            <div className='formElement'>
                <label htmlFor='date'>Date </label>
                <input type="date" name='date' id='date'/>
            </div>
            <button className='formBtn' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default ComplainForm