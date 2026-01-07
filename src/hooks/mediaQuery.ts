import { useTheme, useMediaQuery as useMuiMediaQuery } from '@mui/material';

/**
 * Hook to detect if the current viewport is desktop size
 * Uses MUI's breakpoint system (md and up)
 */
export function useIsDesktop(): boolean {
  const theme = useTheme();
  return useMuiMediaQuery(theme.breakpoints.up('md'));
}

/**
 * Hook to detect if the current viewport is mobile size
 * Uses MUI's breakpoint system (below md)
 */
export function useIsMobile(): boolean {
  const theme = useTheme();
  return useMuiMediaQuery(theme.breakpoints.down('md'));
}
