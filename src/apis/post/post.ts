import {
    DeletePostReq,
    DeletePostResp,
    GetPostDetailReq,
    GetPostDetailResp,
    GetPostPreviewsResp,
    NewPostReq,
    NewPostResp
} from "@/apis/post/post-interfaces";

// 这里到时候加个req参数
export function getPostPreviews(): Promise<GetPostPreviewsResp> {
    return new Promise<GetPostPreviewsResp>((resolve, reject) => {
        uni.request({
            url: "/post/get_post_previews",
            method: "GET",
            success(res: UniNamespace.RequestSuccessCallbackResult) {
                if (res.statusCode !== 200) {
                    reject(res);
                }
                const data = res.data as GetPostPreviewsResp;
                resolve(data);
            },
        });
    });
}

/**
 * @description
 * @param req
 */
export async function deletePost(req: DeletePostReq): Promise<DeletePostResp> {
    return new Promise<DeletePostResp>((resolve, reject) => {
        uni.request({
            url: "/post/delete_post",
            data: req,
            method: "POST",
            success(res: UniNamespace.RequestSuccessCallbackResult) {
                if (res.statusCode !== 200) {
                    reject(res);
                }
                const data = res.data as DeletePostResp;
                resolve(data);
            },
        });
    });
}

/**
 * @description
 * @param req
 */
export async function newPost(req: NewPostReq): Promise<NewPostResp> {
    return new Promise<NewPostResp>((resolve, reject) => {
        uni.request({
            url: "/post/new_post",
            data: req,
            method: "POST",
            success(res: UniNamespace.RequestSuccessCallbackResult) {
                if (res.statusCode !== 200) {
                    reject(res);
                }
                const data = res.data as NewPostResp;
                resolve(data);
            },
        });
    });
}

/**
 * @description
 * @param req
 */
export async function getPostDetail(req: GetPostDetailReq): Promise<GetPostDetailResp> {
    return new Promise<GetPostDetailResp>((resolve, reject) => {
        uni.request({
            url: "/post/get_post_detail",
            data: req,
            method: "GET",
            success(res: UniNamespace.RequestSuccessCallbackResult) {
                if (res.statusCode !== 200) {
                    reject(res);
                }
                const data = res.data as GetPostDetailResp;
                resolve(data);
            },
        });
    });
}