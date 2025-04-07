import React from "react";
type InputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
};
export declare const Input: ({ value, onChange, placeholder, className }: InputProps) => any;
export {};
