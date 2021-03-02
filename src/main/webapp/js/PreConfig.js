/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = null; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAW_MATH_URL = 'math';
window.DRAWIO_CONFIG = {
    "defaultFonts": [
      "Helvetica",
      "Verdana",
      "Times New Roman",
      "Garamond",
      "Comic Sans MS",
      "Courier New",
      "Georgia",
      "Lucida Console",
      "Tahoma"
    ],
    "presetColors": [
      "E6D0DE",
      "CDA2BE",
      "B5739D",
      "E1D5E7",
      "C3ABD0",
      "A680B8",
      "D4E1F5",
      "A9C4EB",
      "7EA6E0",
      "D5E8D4",
      "9AC7BF",
      "67AB9F",
      "D5E8D4",
      "B9E0A5",
      "97D077",
      "FFF2CC",
      "FFE599",
      "FFD966",
      "FFF4C3",
      "FFCE9F",
      "FFB570",
      "F8CECC",
      "F19C99",
      "EA6B66"
    ],
    "defaultColorSchemes": [
      [
        null,
        {
          "fill": "#f5f5f5",
          "stroke": "#666666"
        },
        {
          "fill": "#dae8fc",
          "stroke": "#6c8ebf"
        },
        {
          "fill": "#d5e8d4",
          "stroke": "#82b366"
        },
        {
          "fill": "#ffe6cc",
          "stroke": "#d79b00"
        },
        {
          "fill": "#fff2cc",
          "stroke": "#d6b656"
        },
        {
          "fill": "#f8cecc",
          "stroke": "#b85450"
        },
        {
          "fill": "#e1d5e7",
          "stroke": "#9673a6"
        }
      ],
      [
        null,
        {
          "fill": "#f5f5f5",
          "stroke": "#666666",
          "gradient": "#b3b3b3"
        },
        {
          "fill": "#dae8fc",
          "stroke": "#6c8ebf",
          "gradient": "#7ea6e0"
        },
        {
          "fill": "#d5e8d4",
          "stroke": "#82b366",
          "gradient": "#97d077"
        },
        {
          "fill": "#ffcd28",
          "stroke": "#d79b00",
          "gradient": "#ffa500"
        },
        {
          "fill": "#fff2cc",
          "stroke": "#d6b656",
          "gradient": "#ffd966"
        },
        {
          "fill": "#f8cecc",
          "stroke": "#b85450",
          "gradient": "#ea6b66"
        },
        {
          "fill": "#e6d0de",
          "stroke": "#996185",
          "gradient": "#d5739d"
        }
      ],
      [
        null,
        {
          "fill": "#eeeeee",
          "stroke": "#36393d"
        },
        {
          "fill": "#f9f7ed",
          "stroke": "#36393d"
        },
        {
          "fill": "#ffcc99",
          "stroke": "#36393d"
        },
        {
          "fill": "#cce5ff",
          "stroke": "#36393d"
        },
        {
          "fill": "#ffff88",
          "stroke": "#36393d"
        },
        {
          "fill": "#cdeb8b",
          "stroke": "#36393d"
        },
        {
          "fill": "#ffcccc",
          "stroke": "#36393d"
        }
      ]
    ],
    "defaultColors": [
      "none",
      "FFFFFF",
      "E6E6E6",
      "CCCCCC",
      "B3B3B3",
      "999999",
      "808080",
      "666666",
      "4D4D4D",
      "333333",
      "1A1A1A",
      "000000",
      "FFCCCC",
      "FFE6CC",
      "FFFFCC",
      "E6FFCC",
      "CCFFCC",
      "CCFFE6",
      "CCFFFF",
      "CCE5FF",
      "CCCCFF",
      "E5CCFF",
      "FFCCFF",
      "FFCCE6",
      "FF9999",
      "FFCC99",
      "FFFF99",
      "CCFF99",
      "99FF99",
      "99FFCC",
      "99FFFF",
      "99CCFF",
      "9999FF",
      "CC99FF",
      "FF99FF",
      "FF99CC",
      "FF6666",
      "FFB366",
      "FFFF66",
      "B3FF66",
      "66FF66",
      "66FFB3",
      "66FFFF",
      "66B2FF",
      "6666FF",
      "B266FF",
      "FF66FF",
      "FF66B3",
      "FF3333",
      "FF9933",
      "FFFF33",
      "99FF33",
      "33FF33",
      "33FF99",
      "33FFFF",
      "3399FF",
      "3333FF",
      "9933FF",
      "FF33FF",
      "FF3399",
      "FF0000",
      "FF8000",
      "FFFF00",
      "80FF00",
      "00FF00",
      "00FF80",
      "00FFFF",
      "007FFF",
      "0000FF",
      "7F00FF",
      "FF00FF",
      "FF0080",
      "CC0000",
      "CC6600",
      "CCCC00",
      "66CC00",
      "00CC00",
      "00CC66",
      "00CCCC",
      "0066CC",
      "0000CC",
      "6600CC",
      "CC00CC",
      "CC0066",
      "990000",
      "994C00",
      "999900",
      "4D9900",
      "009900",
      "00994D",
      "009999",
      "004C99",
      "000099",
      "4C0099",
      "990099",
      "99004D",
      "660000",
      "663300",
      "666600",
      "336600",
      "006600",
      "006633",
      "006666",
      "003366",
      "000066",
      "330066",
      "660066",
      "660033",
      "330000",
      "331A00",
      "333300",
      "1A3300",
      "003300",
      "00331A",
      "003333",
      "001933",
      "000033",
      "190033",
      "330033",
      "33001A"
    ],
    "defaultVertexStyle": {},
    "defaultEdgeStyle": {
      "edgeStyle": "orthogonalEdgeStyle",
      "rounded": "0",
      "jettySize": "auto",
      "orthogonalLoop": "1"
    },
    "defaultLibraries": "general;images;pid;flowchart;basic;arrows2",
    "defaultCustomLibraries": [],
    "defaultMacroParameters": {
      "border": false,
      "toolbarStyle": "inline"
    },
    "css": "",
    "fontCss": "",
    "plugins": [],
    "thumbWidth": 46,
    "thumbHeight": 46,
    "emptyDiagramXml": "<mxGraphModel><root><mxCell id='0'/><mxCell id='1' parent='0'/></root></mxGraphModel>",
    "emptyLibraryXml": "<mxlibrary>[]</mxlibrary>",
    "defaultEdgeLength": 80
  }; // Replace with your custom draw.io configurations. For more details, https://www.diagrams.net/doc/faq/configure-diagram-editor
urlParams['sync'] = 'manual';