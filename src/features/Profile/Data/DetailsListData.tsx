import { AiOutlineFileProtect } from "react-icons/ai";
import { ChangeTextByLanguage } from "../../../Language/Language";
import { FaDatabase } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const DetailsList = [
  {
    id: 1,
    Title: ChangeTextByLanguage("صفحتي", "Profile"),
    link: "/profile/info",
    Element: <FaDatabase />,
  },
  {
    id: 2,
    Title: ChangeTextByLanguage("تغيير كلمه المرور", "Change Password"),
    link: "/profile/changepassword",
    Element: <RiLockPasswordFill />,
  },
  {
    id: 3,
    Title: ChangeTextByLanguage("تأميني الطبي", "My Insurance"),
    link: "/profile/my",
    Element: <AiOutlineFileProtect />,
  },
];
