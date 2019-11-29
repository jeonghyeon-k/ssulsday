import { api } from "../utils/api"

export const getCardList = async param => {
  return await api({
    url: `/cms/card/list.do`,
    type: "get",
    param
  });
};
export const getCardById = async param => {
  return await api({
    url: `/cms/card/view.do/${param.postId}`,
    type: "get",
    param
  });
};
export const getCardRange = async param => {
  return await api({
    url: `/cms/card/range.do`,
    type: "get",
    param
  });
};
export const ApiPostCard = async param => {
  return await api({
    url: `/cms/card/reg_action.do`,
    type: "post",
    param
  });
};
export const ApiDeleteCard = async param => {
  return await api({
    url: `/cms/card/del_action.do`,
    type: "delete",
    param
  });
};
export const ApiPutCard = async param => {
  return await api({
    url: `/cms/card/edit_action.do`,
    type: "put",
    param
  });
};
export const ApiCardByHashTag = async param => {
  return await api({
    url: `/cms/hashtag/list.do/${param.searchKeyword}`,
    type: "get",
    param
  });
};
