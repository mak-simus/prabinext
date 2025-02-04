import React from 'react';

const InputField = ({ label, type = 'text', value, onChange }: { label: string, type?: string, value: string, onChange: (value: string) => void }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default InputField;
