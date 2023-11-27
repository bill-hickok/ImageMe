import CatBreeds from "../form/cat-breeds";
import DocTypes from "../form/doc-types";
import Keywords from "../form/keywords";

export const enum TabsEnum {
  DocTypes,
  Keywords,
  CatBreeds,
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
    case TabsEnum.CatBreeds:
      return <CatBreeds />;
    default:
      return <p>Not implemented</p>;
  }
};
