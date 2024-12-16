type Props = {
  iconList: any;
  iconName: any;
  [key: string]: unknown;
};
export const getIcon = ({ iconList, iconName, classNames, ...rest }: Props) => {
  const TagName = iconList[iconName];
  return !!TagName ? <TagName {...rest} /> : null;
};
