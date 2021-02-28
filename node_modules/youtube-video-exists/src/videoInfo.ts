import { default as axios, AxiosResponse } from 'axios'

export interface VideoInfo {
  /**
   * Title of the video
   */
  title: string

  /**
   * Information about the author of the video
   */
  author: {
    /**
     * Name of the author of the video
     */
    name: string

    /**
     * URL to the channel of the author of the video
     */
    url: string
  }
}

export interface VideoInfoResponse {
  /**
   * True when the video exists otherwise false
   */
  existing: boolean

  /**
   * True when the video id format is valid otherwise false
   */
  validId: boolean

  /**
   * True when the video is private otherwise false or undefined
   * Is defined when existing is true
   */
  private?: boolean

  /**
   * Information about the video
   * Is defined when existing is true and private is false
   */
  info?: VideoInfo
}

/**
 * Source: https://webapps.stackexchange.com/a/101153
 */
const idRegex = new RegExp('^([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])$')

/**
 * Checks if a YouTube video exists under the given ID
 *
 * When a video is found the return object also includes the title and author of the video
 *
 * @param id - YouTube video id
 * @returns {@link VideoInfoResponse} when {@link Promise} is resolved
 * @throws {@link AxiosError} when a network issue occurred
 */
export function getVideoInfo(id: string): Promise<VideoInfoResponse> {
  let videoInfoResponse: VideoInfoResponse = {
    existing: false,
    validId: false,
    private: undefined,
    info: undefined,
  }

  if (idRegex.test(id)) {
    videoInfoResponse.validId = true
    return axios
      .request({
        url: 'oembed',
        baseURL: 'https://www.youtube.com/',
        params: {
          url: `https://youtu.be/${id}`,
          format: 'json',
        },
        validateStatus: (status: number) =>
          status === 200 || status === 404 || status === 401,
      })
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          videoInfoResponse.existing = true
          videoInfoResponse.private = false
          videoInfoResponse.info = {
            title: response.data.title,
            author: {
              name: response.data.author_name,
              url: response.data.author_url,
            },
          }
        } else if (response.status === 401) {
          videoInfoResponse.existing = true
          videoInfoResponse.private = true
        }
        return videoInfoResponse
      })
  } else return new Promise(resolve => resolve(videoInfoResponse))
}
