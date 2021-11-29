import '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
}
