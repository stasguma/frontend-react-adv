import { type ETheme } from './ThemeContext';

export function changeThemeInDOM(theme: ETheme): void {
  document.documentElement.dataset.theme = theme;
}
