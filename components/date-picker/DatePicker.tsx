'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@/components/text-field/TextField';
import Icon from '@/components/icon/Icon';

interface DatePickerFieldProps {
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  selectedDate?: Date;
  onChange: (date: Date | null) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  helperText,
  error,
  disabled = false,
  required = false,
  className = '',
  selectedDate,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDatePicker = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={className}>
      <TextField
        label={label}
        helperText={helperText}
        error={error}
        disabled={disabled}
        required={required}
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        endIcon={
          <button type="button" onClick={toggleDatePicker} className="cursor-pointer" disabled={disabled}>
            <Icon name="calendar" />
          </button>
        }
        type="text"
      />

      {isOpen && (
        <div className="absolute z-10 mt-2">
          <DatePicker selected={selectedDate} onChange={onChange} inline dateFormat="MM/dd/yyyy" disabled={disabled} />
        </div>
      )}
    </div>
  );
};

export default DatePickerField;
