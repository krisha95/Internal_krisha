import { useLayoutContext } from "@/context/useLayoutContext";
import { Icon } from "@iconify/react/dist/iconify.js";

const Theme = () => {
  const { theme, changeTheme } = useLayoutContext();

  const toggleTheme = () => {
    if (theme === "light") {
      return changeTheme("dark");
    }
    return changeTheme("light");
  };

  return (
    <>
      <div className="topbar-item">
        <button
          type="button"
          className="topbar-button"
          id="light-dark-mode"
          onClick={() => toggleTheme()}
        >
          <Icon icon="solar:moon-outline" className="fs-24 align-middle"></Icon>
        </button>
      </div>
    </>
  );
};

export default Theme;
