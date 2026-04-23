import { NavLink } from "react-router-dom";

export default function TaskNavBar() {
  return (
    <nav style={styles.nav}>
      <NavLink
        to="/tasks"
        end
        style={({ isActive }) => ({
          ...styles.link,
          ...(isActive ? styles.activeLink : {}),
        })}
      >
        רשימת משימות
      </NavLink>

      <NavLink
        to="/tasks/create"
        style={({ isActive }) => ({
          ...styles.link,
          ...(isActive ? styles.activeLink : {}),
        })}
      >
        יצירת משימה
      </NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "12px",
    padding: "16px",
    borderBottom: "1px solid #ddd",
    marginBottom: "24px",
    backgroundColor: "#f8f9fa",
  } as React.CSSProperties,

  link: {
    textDecoration: "none",
    color: "#333",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: 500,
  } as React.CSSProperties,

  activeLink: {
    backgroundColor: "#007bff",
    color: "white",
  } as React.CSSProperties,
};