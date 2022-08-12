import style from "./index.module.scss";

import { Section } from "components/Section";
import { Stack } from "components/Stack";
import { HtmlIcon } from "components/Icons/HtmlIcon";
import { CssIcon } from "components/Icons/CssIcon";
import { JavaScriptIcon } from "components/Icons/JavaScriptIcon";
import { ReactIcon } from "components/Icons/ReactIcon";
import { ReduxIcon } from "components/Icons/ReduxIcon";
import { NodejsIcon } from "components/Icons/NodejsIcon";
import { PostgreSqlIcon } from "components/Icons/PostgreSqlIcon";
import { TypeScriptIcon } from "components/Icons/TypeScriptIcon";

export const MyStack = () => {
  return (
    <Section id="myStack" title="MY STACK" backgroundColor>
      <div className={style.container}>
        <Stack stackIcon={<HtmlIcon />} stackName="HTML 5" />
        <Stack stackIcon={<CssIcon />} stackName="CSS 3" />
        <Stack stackIcon={<JavaScriptIcon />} stackName="JavaScript" />
        <Stack stackIcon={<ReactIcon />} stackName="React" />
        <Stack stackIcon={<TypeScriptIcon />} stackName="TypeScript" />
        <Stack stackIcon={<ReduxIcon />} stackName="Redux" />
        <Stack stackIcon={<NodejsIcon />} stackName="Node.js" />
        <Stack stackIcon={<PostgreSqlIcon />} stackName="PostgreSQL" />
      </div>
    </Section>
  );
};
