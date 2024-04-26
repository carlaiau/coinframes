import { createSystem, colors } from "frog/ui";
export const {
    Box,
    Columns,
    Column,
    Heading,
    HStack,
    Rows,
    Row,
    Spacer,
    Text,
    VStack,
    vars,
} = createSystem({
    colors: {
        black: "#000000",
        dark: "#373737",
        grey: "#1e2025",
        white: '#ffffff',
        light: '#eff2f5',
        blue: '#0052ff',
        yellow: '#fd3',
        green: '#00a83e',
        gradient: 'linear-gradient(90deg, #fd3 0%, #00a83e 100%)',
    },

})