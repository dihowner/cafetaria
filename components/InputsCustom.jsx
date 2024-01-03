import React,{useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const InputsCustom = ({ title, value, onchange, Icon, type, placeholder,disabled }) => {
    const handleOnchange = (e) => {
        onchange(e.target.value);
    }
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassVisibility = () => {
        setPasswordVisible((prevVisibility) => !prevVisibility);
    };

  <div className=' flex flex-col w-full'>
            <label htmlFor="name">{title}</label>
            <div className="flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] relative ">
                <span>{Icon}</span>
                <input type={type === 'password' ? (passwordVisible ? 'text' : 'password') : type || 'text'} value={value} onChange={handleOnchange} placeholder={placeholder} className='w-full outline-none border-none bg-transparent' 
                    disabled={disabled}/>
                {type === 'password' && (
                    <div
                        onClick={togglePassVisibility}
                        className='absolute top-[40%] right-[10px] text-black cursor-pointer'
                    >
                        {passwordVisible ? (
                            <AiOutlineEye />
                        ) : (
                            <AiOutlineEyeInvisible />
                        )}
                    </div>
                )}
            </div>
            
        </div>

    return (
        <div className=' flex flex-col w-full'>
            <label htmlFor="name">{title}</label>
            <div className="flex gap-x-2 items-center px-2 py-3 border-2 rounded-[8px] relative ">
                <span>{Icon}</span>
                <input type={type === 'password' ? (passwordVisible ? 'text' : 'password') : type || 'text'} value={value} onChange={handleOnchange} placeholder={placeholder} className='w-full outline-none border-none bg-transparent' 
                    disabled={disabled}/>
                {type === 'password' && (
                    <div
                        onClick={togglePassVisibility}
                        className='absolute top-[40%] right-[10px] text-black cursor-pointer'
                    >
                        {passwordVisible ? (
                            <AiOutlineEye />
                        ) : (
                            <AiOutlineEyeInvisible />
                        )}
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default InputsCustom