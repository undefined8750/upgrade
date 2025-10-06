'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  type: 'text' | 'email' | 'password' | 'select' | 'number';
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  icon?: LucideIcon;
  options?: string[];
  maxLength?: number;
  register?: any;
  setValue?: (field: string, value: string) => void;
  className?: string;
}

export function FormField({
  type,
  id,
  label,
  placeholder,
  required = false,
  error,
  icon: Icon,
  options = [],
  maxLength,
  register,
  setValue,
  className = ''
}: FormFieldProps) {
  const renderInput = () => {
    if (type === 'select') {
      return (
        <Select onValueChange={(value) => setValue?.(id, value)}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    return (
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          className={cn(Icon && "pl-10", className)}
          {...register?.(id)}
        />
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && '*'}
      </Label>
      {renderInput()}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
} 