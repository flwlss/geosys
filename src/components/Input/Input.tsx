import React, { ReactNode } from 'react';

import './Input.scss';

interface InputProps {
  placeholder?: ReactNode;
  type?: string;
  textarea?: boolean;
  reactHookForm?: any;
  error?: string | null;
  labelHeight?: string;
  marginTop?: string;
  left?: string;
  marginTopLabel?: string;
  alignItems?: string;
  maxWidth?: string;
  color?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  textarea,
  error,
  reactHookForm,
  labelHeight,
  marginTop,
  left,
  marginTopLabel,
  alignItems,
  maxWidth,
  color,
}) => {
  return (
    <>
      <label
        style={{
          height: labelHeight,
          marginTop: marginTopLabel,
          alignItems: alignItems,
          maxWidth: maxWidth,
        }}
        className="labelContainer"
      >
        {textarea ? (
          <>
            <textarea
              style={
                error
                  ? { marginTop: marginTop, borderBottom: '1px solid red' }
                  : { marginTop: marginTop, color: color }
              }
              required
              {...reactHookForm}
              className="textarea"
            />
            <span
              style={error ? { left: left, color: 'red' } : { left: left }}
              className="floatingLabel"
            >
              {placeholder}
            </span>
          </>
        ) : (
          <>
            <input
              style={
                error ? { borderBottom: '1px solid red' } : { color: color }
              }
              {...reactHookForm}
              type={type}
              className="input"
              required
            />
            <span
              style={error ? { left: left, color: 'red' } : { left: left }}
              className="floatingLabel"
            >
              {placeholder}
            </span>
          </>
        )}
      </label>
    </>
  );
};

export default Input;
