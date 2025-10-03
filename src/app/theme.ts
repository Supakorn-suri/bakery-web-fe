import { Roboto } from "next/font/google";
import { createTheme, Modal, Checkbox } from "@mantine/core";

const googleFont = Roboto({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

const theme = createTheme({
  fontFamily: googleFont.style.fontFamily,
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  primaryColor: "primary",
  colors: {
    primary: [
      "#FBEAD0", // very light beige
      "#FCE1C0",
      "#FAD1A4",
      "#F0A853", // warm highlight
      "#D98A3F",
      "#BA653A", // main brand brown-orange
      "#8A4621",
      "#6E442F",
      "#4A2E1F",
      "#2E1B11", // darkest shade
    ],
  },
  components: {
    Checkbox: Checkbox.extend({
      defaultProps: {
        size: "xs",
      },
      styles: {
        label: {
          paddingLeft: "8px",
          color: "#707070",
        },
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        radius: "16px",
      },
      styles: {
        header: {
          padding: "24px 24px 0 24px",
        },
        title: {
          fontSize: "24px",
          fontWeight: "600",
        },
        body: {
          padding: "24px",
        },
      },
    }),
    TextInput: {
      defaultProps: {
        radius: "8px",
        inputWrapperOrder: ["label", "input", "description"],
      },
      styles: {
        wrapper: {
          width: "100%",
        },
      },
    },
    Textarea: {
      defaultProps: {
        radius: "8px",
        inputWrapperOrder: ["label", "input", "description"],
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: "8px",
        inputWrapperOrder: ["label", "input", "description"],
      },
    },
  },
});

export default theme;
