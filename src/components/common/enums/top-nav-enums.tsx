import DocTypes from "../form/doc-types";
import Keywords from "../form/keywords";

export const enum TabsEnum {
  DocTypes,
  Keywords,
  XMLMappings,
  LegacyToOnBase,
  ActivityLog,
}

export const getTabComponent = (tab: TabsEnum) => {
  switch (tab) {
    case TabsEnum.DocTypes:
      return <DocTypes />;
    case TabsEnum.Keywords:
      return <Keywords />;
    default:
      return <p>Not implemented</p>;
  }
};
