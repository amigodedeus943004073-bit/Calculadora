'use client';

import { useState } from 'react';
import { evaluate } from 'mathjs';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleInput = (val: string) => {
    setDisplay(prev => (prev === '0' ? val : prev + val));
  };

  const handleScientific = (op: string) => {
    const value = parseFloat(display);
    let result = 0;
    switch (op) {
      case 'sin': result = Math.sin(value); break;
      case 'cos': result = Math.cos(value); break;
      case 'tan': result = Math.tan(value); break;
      case 'sqrt': result = Math.sqrt(value); break;
      case 'log': result = Math.log10(value); break;
      case 'exp': result = Math.exp(value); break;
    }
    setDisplay(result.toString());
    setEquation(`${op}(${value})`);
  };

  const calculate = () => {
    try {
      const result = evaluate(display);
      setEquation(display);
      setDisplay(result.toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="bg-[#151619] text-[#E4E3E0] p-4 rounded-xl border border-[#323336] shadow-2xl w-full max-w-xs">
      <div className="bg-[#1D1E21] p-4 rounded-lg mb-4 border border-[#323336] text-right">
        <div className="text-[#FFB700] text-xs font-mono h-5 overflow-hidden">{equation}</div>
        <div className="text-3xl font-mono tracking-tight overflow-hidden text-ellipsis">{display}</div>
      </div>
      
      <div className="grid grid-cols-4 gap-1.5">
        <button className="bg-[#2A2B2F] text-[#E4E3E0] p-3 rounded text-xs font-mono border border-[#38393C]" onClick={() => handleScientific('sin')}>sin</button>
        <button className="bg-[#2A2B2F] text-[#E4E3E0] p-3 rounded text-xs font-mono border border-[#38393C]" onClick={() => handleScientific('cos')}>cos</button>
        <button className="bg-[#2A2B2F] text-[#E4E3E0] p-3 rounded text-xs font-mono border border-[#38393C]" onClick={() => handleScientific('tan')}>tan</button>
        <button className="bg-[#434549] text-[#FF4444] p-3 rounded text-xs font-bold uppercase border border-[#38393C]" onClick={() => {setDisplay('0'); setEquation('')}}>C</button>
        
        <button className="bg-[#2A2B2F] text-[#E4E3E0] p-3 rounded text-xs font-mono border border-[#38393C]" onClick={() => handleScientific('sqrt')}>√</button>
        <button className="bg-[#2A2B2F] text-[#E4E3E0] p-3 rounded text-xs font-mono border border-[#38393C]" onClick={() => handleScientific('log')}>log</button>
        <button className="bg-[#2A2B2F] text-[#E4E3E0] p-3 rounded text-xs font-mono border border-[#38393C]" onClick={() => handleScientific('exp')}>exp</button>
        <button className="bg-[#434549] text-[#E4E3E0] p-3 rounded text-sm font-bold border border-[#38393C]" onClick={() => handleInput('/')}>/</button>
        
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('7')}>7</button>
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('8')}>8</button>
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('9')}>9</button>
        <button className="bg-[#434549] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('*')}>*</button>
        
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('4')}>4</button>
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('5')}>5</button>
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('6')}>6</button>
        <button className="bg-[#434549] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('-')}>-</button>
        
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('1')}>1</button>
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('2')}>2</button>
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('3')}>3</button>
        <button className="bg-[#434549] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('+')}>+</button>
        
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('0')}>0</button>
        <button className="bg-[#323336] text-[#E4E3E0] p-3 rounded text-lg font-bold border border-[#38393C]" onClick={() => handleInput('.')}>.</button>
        <button className="col-span-2 bg-[#FFB700] text-[#151619] p-3 rounded text-3xl font-bold border border-[#38393C]" onClick={calculate}>=</button>
      </div>
    </div>
  );
}
