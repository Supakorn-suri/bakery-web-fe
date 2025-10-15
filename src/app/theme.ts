import { createTheme, Modal, Checkbox, DEFAULT_THEME } from "@mantine/core";

const theme = createTheme({
  fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,

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
    NumberInput: {
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
    TextInput: {
      defaultProps: {
        radius: "8px",
        inputWrapperOrder: ["label", "input", "description", "error"],
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
        inputWrapperOrder: ["label", "input", "description", "error"],
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: "8px",
        inputWrapperOrder: ["label", "input", "description", "error"],
      },
    },
    Table: {
      styles: {
        th: {
          backgroundColor: "#FBF4EA",
          height: "48px",
        },
      },
    },
  },
});

export default theme;
