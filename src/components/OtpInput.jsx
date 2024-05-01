/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

const OtpInput = ({setOtpValue}) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const otpInputRefs = useRef([]);

    useEffect(() => {
        otpInputRefs.current = otpInputRefs.current.slice(0, otp.length);
    }, [otp]);

    const focusNextInput = (index) => {
        if (index < otp.length - 1) {
            otpInputRefs.current[index + 1].focus();
        }
    };

    const handleKeyUp = (e, index) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            if (index > 0) {
                otpInputRefs.current[index - 1].focus();
            }
        }
    };

    const handleChange = (e, index) => {
        const newOtp = otp.map((digit, idx) => idx === index ? e.target.value : digit);
        setOtp(newOtp);
        focusNextInput(index);
        setOtpValue(newOtp.join(''));
        console.log(newOtp.join(''));
    };
    
    const handlePaste = (e, index) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        if (pastedData.length > 1) {
            const newOtp = otp.map((digit, idx) => idx < pastedData.length ? pastedData[idx] : digit);
            setOtp(newOtp);
            focusNextInput(index + pastedData.length - 1);
            setOtpValue(newOtp.join(''));
            console.log(newOtp.join(''));
        }
    };

    return (
        <div className='flex justify-center items-center'>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyUp={(e) => handleKeyUp(e, index)}
                    onPaste={(e) => handlePaste(e, index)}
                    className={`w-10 bg-slate-200 py-2 border-none my-5 mx-3 text-center text-4xl cursor-${index === 0 ? 'pointer' : ''} pointer-events-${index === 0 ? 'auto' : 'none'}`}
                    ref={(el) => otpInputRefs.current[index] = el}
                />
            ))}
        </div>
    );
};

export default OtpInput;
