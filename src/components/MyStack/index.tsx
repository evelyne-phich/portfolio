import style from "./index.module.scss";

import { Section } from "components/Section";
import { Stack } from "components/Stack";
import { HtmlIcon } from "components/Icons/HtmlIcon";
import { CssIcon } from "components/Icons/CssIcon";
import { JavaScriptIcon } from "components/Icons/JavaScriptIcon";
import { ReactIcon } from "components/Icons/ReactIcon";
import { NodejsIcon } from "components/Icons/NodejsIcon";
import { PostgreSqlIcon } from "components/Icons/PostgreSqlIcon";
import { TypeScriptIcon } from "components/Icons/TypeScriptIcon";
import { VueIcon } from "components/Icons/VueIcon";
import { ExpressIcon } from "components/Icons/ExpressIcon";

export const MyStack = () => {
  return (
    <Section id="myStack" title="MY STACK" backgroundColor>
      <div className={style.container}>
        <Stack stackIcon={<HtmlIcon />} stackName="HTML 5" />
        <Stack stackIcon={<CssIcon />} stackName="CSS 3" />
        <Stack stackIcon={<JavaScriptIcon />} stackName="JavaScript" />
        <Stack stackIcon={<TypeScriptIcon />} stackName="TypeScript" />
        <Stack stackIcon={<ReactIcon />} stackName="React" />
        <Stack stackIcon={<VueIcon />} stackName="Vue" />
        <Stack stackIcon={<NodejsIcon />} stackName="Node.js" />
        <Stack stackIcon={<ExpressIcon />} stackName="Express" />
        <Stack stackIcon={<PostgreSqlIcon />} stackName="PostgreSQL" />
      </div>
    </Section>
  );
};
