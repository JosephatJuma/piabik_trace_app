import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { PaperProvider, DefaultTheme, MD2DarkTheme } from "react-native-paper";
import App from "./App";

function Main() {
  const customDarkTheme = {
    ...MD2DarkTheme,
    colors: {
      ...MD2DarkTheme.colors,
      // primary: "your_primary_color",
      // accent: "your_accent_color",
      // Customize other colors here
    },
  };
  return (
    <PaperProvider theme={DefaultTheme}>
      <App />
    </PaperProvider>
  );
}

registerRootComponent(Main);
