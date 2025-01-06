document.addEventListener("DOMContentLoaded", () => {
    const languageButton = document.querySelector(".language-button");
    const languageList = document.querySelector(".language-list");
    const defaultLanguage = "en";

    function loadTranslations(language) {
        fetch("translations.json")
            .then(response => response.json())
            .then(translations => {
                document.querySelectorAll("[data-i18n]").forEach(element => {
                    const key = element.getAttribute("data-i18n");
                    if (translations[language][key]) {
                        element.textContent = translations[language][key];
                    }
                });
                document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
                    const key = element.getAttribute("data-i18n-placeholder");
                    if (translations[language][key]) {
                        element.setAttribute("placeholder", translations[language][key]);
                    }
                });
                document.querySelectorAll("[data-i18n-alt]").forEach(element => {
                    const key = element.getAttribute("data-i18n-alt");
                    if (translations[language][key]) {
                        element.setAttribute("alt", translations[language][key]);
                    }
                });
            })
            .catch(error => console.error("Error loading translations:", error));
    }

    loadTranslations(defaultLanguage);

    languageList.addEventListener("click", event => {
        if (event.target.tagName === "A") {
            const selectedLanguage = event.target.getAttribute("data-lang");
            loadTranslations(selectedLanguage);
            languageButton.textContent = event.target.textContent;
        }
    });
});