import br from "./assets/001-flag.png";
import us from "./assets/002-united-states.png";
import fr from "./assets/003-france.png";

import { useTranslation } from "react-i18next";

const languageOptions = [
    {
        name: "Português",
        value: "ptBR",
        flag: br
    },
    {
        name: "English",
        value: "en",
        flag: us
    },
    {
        name: "Français",
        value: "fr",
        flag: fr
    },

]

export const LanguageSwitcher = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className="flex flex-col text-left">
            {/* <span>{t("selectYourLanguage")}</span> */}

            {
                languageOptions.map((languageOption) => (
                    <button 
                    className="flex flex-row"
                    key={languageOption.value}
                     onClick={() => {
                            i18n.changeLanguage(languageOption.value);
                        }}>
                            <img src={languageOption.flag} alt={languageOption.name} />
                            {/* <span className="text-left">{languageOption.name}</span> */}
                        </button>
                ))
            }
        </div>
    )
}