const Language = JSON.stringify(window.localStorage.getItem("Language"));
export function ChangeTextByLanguage(Text: string, newText: string) {
  if (Language == '"English"') {
    return Text;
  } else {
    return newText;
  }
}

export const Traslation = {
  ConvertFLex: `${Language == '"English"' ? "flex" : "flex-row-reverse"}`,
  ConvertTextAlign: `${Language == '"English"' ? "text-start" : "text-end"}`,
};
