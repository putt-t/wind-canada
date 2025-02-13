'use client';

import { useState } from "react";
import windLoadImportanceFactors, { getWindLoadFactors } from "../lib/windLoadFactors";

export default function ImportanceFactorDisplay() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Normal");
    const [selectedLimitState, setSelectedLimitState] = useState<'ULS' | 'SLS'>("ULS");
    const [importanceFactor, setImportanceFactor] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
        updateImportanceFactor(event.target.value, selectedLimitState);
    }

    const handleLimitStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (value === "ULS" || value === "SLS") {
            setSelectedLimitState(value);
            updateImportanceFactor(selectedCategory, value);
        }
    }

    const updateImportanceFactor = (category: string, limitState: 'ULS' | 'SLS') => {
        setErrorMessage(null);
        const factor = getWindLoadFactors(category);
        if (factor) {
            setImportanceFactor(factor[limitState]);
            setErrorMessage(null);
        } else {
            setImportanceFactor(null);
            setErrorMessage("Invalid category");
        }
    }

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <header className="mb-2">
                <nav className="flex justify-between items-center p-2 sm:p-6">
                    <div className="text-xl font-normal text-gray-800">Wind Canada</div>
                </nav>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-0">
                <section className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Wind Load Importance Factor
                    </h1>

                    <div className="mb-4">
                        <label htmlFor="category-select" className="block text-gray-700 mb-2">
                            Importance Category:
                        </label>
                        <select
                            id="category-select"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            {Object.keys(windLoadImportanceFactors).map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="limit-state-select" className="block text-gray-700 mb-2">
                            Limit State:
                        </label>
                        <select
                            id="limit-state-select"
                            value={selectedLimitState}
                            onChange={handleLimitStateChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="ULS">ULS</option>
                            <option value="SLS">SLS</option>
                        </select>
                    </div>

                    {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

                    {importanceFactor !== null && (
                        <div className="text-center">
                            <p className="text-lg font-bold text-gray-800">
                                Importance Factor (I<sub>w</sub>): {importanceFactor}
                            </p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
