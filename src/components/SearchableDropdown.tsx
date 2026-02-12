"use client";

import { useState, useEffect, useRef } from "react";

interface Option {
  id: string;
  name: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (id: string) => void;
}

export default function SearchableDropdown({
  options,
  value,
  onChange,
}: Props) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Display selected subject name when not searching
  const selectedOption = options.find((opt) => opt.id === value);
  const displayValue = isOpen ? query : (selectedOption?.name || "");

  const filtered = options.filter((opt) =>
    opt.name.toLowerCase().includes(query.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <input
        type="text"
        placeholder="Search subject..."
        value={displayValue}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          setIsOpen(true);
          setQuery("");
        }}
        className="w-full p-2 text-sm bg-gray-800 rounded border border-gray-700"
      />

      {isOpen && (
        <div className="absolute z-10 bg-gray-900 border border-gray-700 w-full max-h-40 overflow-y-auto mt-1 rounded shadow-lg">
          {filtered.map((opt) => (
            <div
              key={opt.id}
              onClick={() => {
                onChange(opt.id);
                setIsOpen(false);
                setQuery("");
              }}
              className="p-2 text-sm hover:bg-gray-700 cursor-pointer"
            >
              {opt.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
