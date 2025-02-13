interface ImportanceFactors {
    ULS: number;
    SLS: number;
}


interface ImportanceCategoryData {
    [category: string]: ImportanceFactors;
}

const windLoadImportanceFactors: ImportanceCategoryData = {
    Low: { ULS: 0.8, SLS: 0.75 },
    Normal: { ULS: 1, SLS: 0.75 },
    High: { ULS: 1.15, SLS: 0.75 },
    "Post-disaster": { ULS: 1.25, SLS: 0.75 },
};

export default windLoadImportanceFactors;

export function getWindLoadFactors(category: string): ImportanceFactors | undefined {
    return windLoadImportanceFactors[category];
}

