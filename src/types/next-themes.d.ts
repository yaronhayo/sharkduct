
declare module 'next-themes' {
  export interface ThemeProviderProps {
    children?: React.ReactNode;
    defaultTheme?: string;
    forcedTheme?: string;
    themes?: string[];
    attribute?: string | 'class' | 'data-theme';
    value?: Record<string, string>;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    enableColorScheme?: boolean;
    storageKey?: string;
    nonce?: string;
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
  
  export function useTheme(): {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    forcedTheme: string | undefined;
    resolvedTheme: string | undefined;
    themes: string[];
    systemTheme: string | undefined;
  };
}
