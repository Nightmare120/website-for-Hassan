import "./DarkmodeToggler.css";

export default function DarkModeToggler({ setDarkToggle, darkToggle }) {
    return (
        <label class="toggleDarkBtn">
            <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
            <span class="slideBtnTg round"></span>
        </label>
    );
}
