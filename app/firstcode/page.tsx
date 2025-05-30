'use client';

import { useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react'; // 아이콘 임포트
import Link from 'next/link';

const VerificationCodeForm = () => {
  const [code, setCode] = useState(Array(6).fill(''));
  const [isCorrect, setIsCorrect] = useState(false); // 상태 추가
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9a-zA-Z]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setIsCorrect(false); // 입력이 바뀌면 다시 초기화

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    console.log('Verification code:', verificationCode);

    // 예시: "123456" 이 정답이라고 가정
    if (verificationCode === '123456') {
      setIsCorrect(true);
    } else {
      alert('Invalid code');
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center relative">
        <h2 className="text-2xl font-bold text-black mb-1">Create an account</h2>
        <p className="text-gray-600 mb-6">Let's get started!</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-left text-black font-medium">Enter Code</div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {code.map((char, index) => (
              <input
                key={index}
                ref={el => { inputsRef.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="w-10 h-12 text-center border rounded-md text-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={char}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}

            {isCorrect ? (
              <CheckCircle className="text-green-600 w-8 h-8 ml-2" />
            ) : (
              <button
                type="submit"
                className="ml-2 bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
              >
                Check
              </button>
            )}
          </div>

          <div className="text-sm text-black mb-2">
            Didn't receive a code?{' '}
            <button
              type="button"
              onClick={() => alert('Resending code...')}
              className="text-blue-600 hover:underline"
            >
              Resend code
            </button>
          </div>

          <div className="text-sm text-black mb-4">
            <strong>Already have an account?</strong>{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </div>

          <button
            type="submit"
            className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
          >
            <Link href='/passwd'>Next</Link>
          </button>
        </form>

        <button
          type="button"
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default VerificationCodeForm;
