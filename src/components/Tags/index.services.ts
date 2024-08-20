export type TagType = {
  label: string;
  backgroundColor: string;
  color?: string;
};

export const tags: { [key: string]: TagType } = {
  javaScript: {
    label: "JavaScript",
    backgroundColor: "#FBCB0A",
    color: "black",
  },
  ejs: {
    label: "EJS",
    backgroundColor: "#A91F50",
  },
  react: {
    label: "React",
    backgroundColor: "#7FB5FF",
    color: "black",
  },
  redux: {
    label: "Redux",
    backgroundColor: "#764abc",
  },
  nodeJs: {
    label: "Node.js",
    backgroundColor: "#215732",
  },
  express: {
    label: "Express",
    backgroundColor: "#000000",
  },
  postgreSql: {
    label: "PostgreSQL",
    backgroundColor: "#336790",
  },
  typeScript: {
    label: "TypeScript",
    backgroundColor: "#2F73BF",
  },
  reactNative: {
    label: "React Native",
    backgroundColor: "#7FB5FF",
  },
  webflow: {
    label: "Webflow",
    backgroundColor: "#000000",
  },
};
