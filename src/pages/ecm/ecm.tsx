import CatBreeds from "../../components/common/form/cat-breeds";
import DocTypes from "../../components/common/form/doc-types";
import Keywords from "../../components/common/form/keywords";

export const enum TabsEnum {
  Dashboard,
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
