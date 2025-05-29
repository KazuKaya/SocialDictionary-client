import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const { data: results = [] } = useSearch(searchTerm);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        setShowDropdown(value.length > 0);
    };

    return (
        <div className="relative grow mx-2 lg:max-w-lg">
            <input
                value={searchTerm}
                onChange={handleSearch}
                className="w-full h-9 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                type="text"
                placeholder="Search..."
            />
            {showDropdown && results.length > 0 && (
                <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {results.map((item) => (
                        <li
                            key={`${item.type}-${item.id}`}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                            onClick={() => {
                                const prefix = item.type === "title" ? "#" : "@";
                                setSearchTerm(`${prefix}${item.name}`);
                                setShowDropdown(false);
                            }}
                        >
                            {item.type === "title" ? "#" : "@"}
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
