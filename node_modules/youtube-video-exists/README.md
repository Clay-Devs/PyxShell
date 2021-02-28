# youtube-video-exists

[![NPM](https://img.shields.io/npm/v/youtube-video-exists.svg?style=flat)](https://npmjs.org/package/youtube-video-exists)
[![Coverage Status](https://coveralls.io/repos/github/matthiasschwarz/youtube-video-exists/badge.svg?branch=master)](https://coveralls.io/github/matthiasschwarz/youtube-video-exists?branch=master)

> Checks if a YouTube video exists under the given ID. No API key is required. 

## How does it work?

Firstly the video id is checked against a regular expression if it is in a valid format.
When this check succedes the YouTube [oEmbed API](https://oembed.com/) is used to see if a video is present under the given ID.
This requires no API key and might be the best option to receive this information without one.

## API

### getVideoInfo

```typescript
function getVideoInfo(id: string): Promise<VideoInfoResponse> {/** Code ommited **/}
```

> Checks if a YouTube video exists under the given ID.
> When a video is found the return object also includes the title and author of the video

#### Parameters

* id: string - YouTube video id

#### Returns

* VideoInfoResponse when Promise is resolved

##### Example

```typescript
const example = {
  existing: true,
  validId: true,
  private: false,
  info: {
    title: 'YouTube Developers Live: Embedded Web Player Customization',
    author: {
      name: 'Google Developers',
      url: 'https://www.youtube.com/user/GoogleDevelopers',
    },
  }
}
```

#### Throws

* AxiosError when a network issue occurred

## Usage

### Check if the video exists

#### Async

```typescript
getVideoInfo('M7lc1UVf-VE').then(value => {
    if (value.existing) console.log('Video exists!')
})
```

#### Blocked

```typescript
async function example() {
    const existing = (await getVideoInfo('M7lc1UVf-VE')).existing
    if (existing) console.log('Video exists!')
}
```

### Check if the video is private

#### Async

```typescript
getVideoInfo('ZFxT6d13OKo').then(value => {
    if (value.existing && value.private) console.log('Video is private!')
})
```

#### Blocked

```typescript
async function example() {
    const response = await getVideoInfo('ZFxT6d13OKo')
    if (response.existing && response.private) console.log('Video is private!')
}
```

## License

Licensed under the [MIT](LICENSE) License.