"use client";

import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string; // اختیاری طور پر سرچ بار کے لیے ٹیکسٹ
  onSearch: (query: string) => void; // تلاش کے لیے فنکشن کال بیک
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center space-x-2 border rounded-lg p-2 shadow-md">
      <input
        type="text"
        className="flex-1 p-2 border-none outline-none"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
