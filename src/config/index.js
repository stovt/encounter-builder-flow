// @flow
declare class process {
  static env: {
    NODE_PATH: string,
    PUBLIC_URL: string
  }
}

export default {
  ...process.env
};
