export const initHeaderFunctionality = () => {
    console.log('Header functionality initialized');
};

export const getSearchSuggestions = (query) => {
    if (!query) return [];
    const suggestions = [
        "About Us",
        "Products",
        "Download",
        "Contact",
        "Portfolio",
        "Services",
        "Team",
        "Careers"
    ];
    return suggestions.filter(item => item.toLowerCase().includes(query.toLowerCase()));
};
