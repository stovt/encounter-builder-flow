// @flow
declare class process {
  static env: {
    NODE_PATH: string
  }
}

export default {
  ...process.env
};
