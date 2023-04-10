import {
  DeleteMomentReq,
  DeleteMomentResp,
  GetMomentDetailReq,
  GetMomentDetailResp,
  GetMomentPreviewsReq,
  GetMomentPreviewsResp,
  NewMomentReq,
  NewMomentResp,
  SearchMomentPreviewsReq,
  SearchMomentPreviewsResp
} from "./moment-components";
import { PictureStyle } from "@/apis/cos/cos-interface";

/**
 * @description
 * @param req
 */
export async function deleteMoment(
  req: DeleteMomentReq
): Promise<DeleteMomentResp> {
  return await new Promise<DeleteMomentResp>((resolve, reject) => {
    uni.request({
      url: "/moment/delete_moment",
      data: req,
      method: "POST",
      success(res: UniNamespace.RequestSuccessCallbackResult) {
        if (res.statusCode !== 200) {
          reject(res);
        }
        const data = res.data as DeleteMomentResp;
        resolve(data);
      }
    });
  });
}

/**
 * @description
 * @param req
 */
export async function newMoment(req: NewMomentReq): Promise<NewMomentResp> {
  return await new Promise<NewMomentResp>((resolve, reject) => {
    uni.request({
      url: "/moment/new_moment",
      data: req,
      method: "POST",
      success(res: UniNamespace.RequestSuccessCallbackResult) {
        if (res.statusCode !== 200) {
          reject(res);
        }
        const data = res.data as NewMomentResp;
        resolve(data);
      }
    });
  });
}

/**
 * @description
 * @param req
 */
export async function getMomentPreviews(req: GetMomentPreviewsReq) {
  return await new Promise<GetMomentPreviewsResp>((resolve, reject) => {
    uni.request({
      url: "/moment/get_moment_previews",
      data: req,
      method: "GET",
      success(res: UniNamespace.RequestSuccessCallbackResult) {
        if (res.statusCode !== 200) {
          reject(res);
        }
        const data = res.data as GetMomentPreviewsResp;
        data.moments.forEach((moment) => {
          moment.photos[0] += PictureStyle.thumbnail;
          moment.user.avatarUrl += PictureStyle.thumbnail;
        });
        resolve(data);
      }
    });
  });
}

export async function searchMomentPreviews(req: SearchMomentPreviewsReq) {
  return await new Promise<SearchMomentPreviewsResp>((resolve, reject) => {
    uni.request({
      url: "/moment/search_moment",
      data: req,
      method: "GET",
      success(res: UniNamespace.RequestSuccessCallbackResult) {
        if (res.statusCode !== 200) {
          reject(res);
        }
        const data = res.data as SearchMomentPreviewsResp;
        resolve(data);
      }
    });
  });
}

/**
 * @description
 * @param req
 */
export async function getOwnMomentPreviews(req: GetMomentPreviewsReq) {
  return await new Promise<GetMomentPreviewsResp>((resolve, reject) => {
    uni.request({
      url: "/moment/get_own_moment_previews",
      data: req,
      method: "GET",
      success(res: UniNamespace.RequestSuccessCallbackResult) {
        if (res.statusCode !== 200) {
          reject(res);
        }
        const data = res.data as GetMomentPreviewsResp;
        data.moments.forEach((moment) => {
          moment.photos[0] += PictureStyle.thumbnail;
          moment.user.avatarUrl += PictureStyle.thumbnail;
        });
        resolve(data);
      }
    });
  });
}
/**
 * @description
 * @param req
 */
export async function getMomentDetail(req: GetMomentDetailReq) {
  return await new Promise<GetMomentDetailResp>((resolve, reject) => {
    uni.request({
      url: "/moment/get_moment_detail",
      data: req,
      method: "GET",
      success(res: UniNamespace.RequestSuccessCallbackResult) {
        if (res.statusCode !== 200) {
          reject(res);
        }
        const data = res.data as GetMomentDetailResp;
        data.moment.user.avatarUrl += PictureStyle.thumbnail;
        resolve(data);
      }
    });
  });
}
