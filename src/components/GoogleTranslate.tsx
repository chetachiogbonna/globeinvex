"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (config: { pageLanguage: string }, id: string) => void;
      };
    };
  }
}

const GoogleTranslate = () => {
  const pathname = usePathname();
  const isUserPage = pathname.startsWith('/user');

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
        script.async = true;
        script.onload = () => console.log("Google Translate script loaded.");
        script.onerror = () => console.error("Failed to load Google Translate script.");
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
        console.log("Google Translate initialized.");
        setIsInitialized(true);
      } else {
        console.error("Google Translate API is not loaded yet.");
      }
    };

    addGoogleTranslateScript();
  }, [pathname]);

  const changeLanguageByButtonClick = (language: string) => {
    if (!isInitialized) {
      console.error("Google Translate widget is not initialized yet.");
      return;
    }

    const selectField = document.querySelector<HTMLSelectElement>(
      "#google_translate_element select"
    );

    if (selectField) {
      for (let i = 0; i < selectField.children.length; i++) {
        const option = selectField.children[i] as HTMLOptionElement;

        if (option.value === language) {
          selectField.selectedIndex = i;
          selectField.dispatchEvent(new Event("change"));
          console.log(`Language changed to: ${language}`);
          break;
        }
      }
    } else {
      console.error("Google Translate select field not found.");
    }
  };

  return (
    <div className="text-black">
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <select
        id="language"
        onChange={(e) => changeLanguageByButtonClick(e.target.value)}
        disabled={!isInitialized}
        className={cn("", { "w-full border border-gray-700 text-sm rounded": isUserPage })}
      >
        <option value="">Select Language</option>
        <option value="af">Afrikanns</option>
        <option value="sq">Albanian</option>
        <option value="ar">Arabic</option>
        <option value="hy">Armenian</option>
        <option value="eu">Basque</option>
        <option value="bn">Bengali</option>
        <option value="bg">Bulgarian</option>
        <option value="ca">Catalan</option>
        <option value="km">Cambodian</option>
        <option value="zh-CN">Chinese (Mandarin)</option>
        <option value="hr">Croation</option>
        <option value="cs">Czech</option>
        <option value="da">Danish</option>
        <option value="nl">Dutch</option>
        <option value="en" defaultValue="English">English</option>
        <option value="et">Estonian</option>
        <option value="fj">Fiji</option>
        <option value="fi">Finnish</option>
        <option value="fr">French</option>
        <option value="ka">Georgian</option>
        <option value="de">German</option>
        <option value="el">Greek</option>
        <option value="gu">Gujarati</option>
        <option value="he">Hebrew</option>
        <option value="hi">Hindi</option>
        <option value="hu">Hungarian</option>
        <option value="is">Icelandic</option>
        <option value="id">Indonesian</option>
        <option value="ga">Irish</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="jw">Javanese</option>
        <option value="ko">Korean</option>
        <option value="la">Latin</option>
        <option value="lv">Latvian</option>
        <option value="lt">Lithuanian</option>
        <option value="mk">Macedonian</option>
        <option value="ms">Malay</option>
        <option value="ml">Malayalam</option>
        <option value="mt">Maltese</option>
        <option value="mi">Maori</option>
        <option value="mr">Marathi</option>
        <option value="mn">Mongolian</option>
        <option value="ne">Nepali</option>
        <option value="no">Norwegian</option>
        <option value="fa">Persian</option>
        <option value="pl">Polish</option>
        <option value="pt">Portuguese</option>
        <option value="pa">Punjabi</option>
        <option value="qu">Quechua</option>
        <option value="ro">Romanian</option>
        <option value="ru">Russian</option>
        <option value="sm">Samoan</option>
        <option value="sr">Serbian</option>
        <option value="sk">Slovak</option>
        <option value="sl">Slovenian</option>
        <option value="es">Spanish</option>
        <option value="sw">Swahili</option>
        <option value="sv">Swedish </option>
        <option value="ta">Tamil</option>
        <option value="tt">Tatar</option>
        <option value="te">Telugu</option>
        <option value="th">Thai</option>
        <option value="bo">Tibetan</option>
        <option value="to">Tonga</option>
        <option value="tr">Turkish</option>
        <option value="uk">Ukranian</option>
        <option value="ur">Urdu</option>
        <option value="uz">Uzbek</option>
        <option value="vi">Vietnamese</option>
        <option value="cy">Welsh</option>
        <option value="xh">Xhosa</option>
      </select>
    </div>
  );
};

export default GoogleTranslate;
