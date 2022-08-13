import style from "./index.module.scss";

import { Tag } from "components/Tag";
import { TagType } from "./index.services";

type Props = {
  tags: Array<TagType>;
};

export const Tags = ({ tags }: Props) => {
  return (
    <div className={style.container}>
      {tags.map((tag) => (
        <Tag color={tag.color} label={tag.label} />
      ))}
    </div>
  );
};
