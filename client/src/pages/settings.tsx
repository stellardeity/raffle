import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "antd";

import useLocalStorage from "@/shared/hooks/use-localstorage";
import i18n from "@/shared/lib/i18";

export const Settings = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ru");

  const handleLenguageChange = useCallback(() => {
    if (language === "en") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    } else if (language === "ru") {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }, [language]);

  return (
    <>
      <Button onClick={handleLenguageChange}>
        {t("change to")} {language === "ru" ? t("english") : t("russian")}
      </Button>
    </>
  );
};
