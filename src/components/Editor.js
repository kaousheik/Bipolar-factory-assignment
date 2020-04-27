import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import React from "react";
const myTheme = {
  // Theme object to extends default dark theme.
};
export const MyComponent = () => (
  <ImageEditor
    includeUI={{
      loadImage: {
        path: "img/sampleImage.jpg",
        name: "SampleImage",
      },
      theme: myTheme,
      menu: ["shape"],
      initMenu: "shape",
      uiSize: {
        width: "100vw",
        height: "100vh",
      },
      menuBarPosition: "bottom",
    }}
    cssMaxHeight={500}
    cssMaxWidth={1000}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70,
    }}
    usageStatistics={true}
  />
);
