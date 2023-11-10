export type TagType = {
  label: string;
  color: string;
};

export const tags: { [key: string]: TagType } = {
  javaScript: {
    label: "JavaScript",
    color: "#FBCB0A",
  },
  ejs: {
    label: "EJS",
    color: "#A91F50",
  },
  react: {
    label: "React",
    color: "#7FB5FF",
  },
  redux: {
    label: "Redux",
    color: "#764abc",
  },
  nodeJs: {
    label: "Node.js",
    color: "#215732",
  },
  express: {
    label: "Express",
    color: "#000000",
  },
  postgreSql: {
    label: "PostgreSQL",
    color: "#336790",
  },
  typeScript: {
    label: "TypeScript",
    color: "#2F73BF",
  },
  reactNative: {
    label: "React Native",
    color: "#7FB5FF",
  },
  webflow: {
    label: "Webflow",
    color: "#000000",
  },
};
